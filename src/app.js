'use strict'

const express = require('express')
const root = express()

const ejs = require('ejs')

root
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'views')
  .get('/', index)
  .get('/books', overviewBooks)
  .get('/book', detailBook)
  .get('/courses', overviewCourses)
  .get('/course')
  .listen(3333)

function index(req, res) {
  res.render('main.ejs', {
    page: 0
  })
}

function getBooks(req, res) {
  const booksBtn = document.getElementById('booksBtn')
  booksBtn.onclick = app.initBooks
  res.render('main.ejs', {
    page: 0
  })
}

function getCourses(req, res) {
  const courseBtn = document.getElementById('courseBtn')
  res.render('main.ejs', {
    page: 1
  })
}

const app = {
  init: () => {
    const booksBtn = document.getElementById('booksBtn')
    const courseBtn = document.getElementById('courseBtn')

    booksBtn.onclick = app.initBooks
    courseBtn.onclick = app.initCourses

    api.getBooks()
  },
  initBooks: () => {
    clear.clearCourses()
    clear.clearBooks()
    api.getBooks()
  },
  initCourses: () => {
    clear.clearCourses()
    clear.clearBooks()
    api.getCourse()
  }
}

const api = {
  getBooks: async () => {
    if (localStorage.getItem('books')) {
      render.onload()
      return render.listBooks()
    }

    render.onload()

    const oba = new API()
    const bookStream = await oba.createStream("search/for+dummies&facet=type(book)&facet=language(dut)&librarian=true{50}")

    bookStream
      .pipe(data.formatBooks)
      .pipe(render.listBooks)
  },
  getCourse: async () => {
    if (localStorage.getItem('courses')) {
      return render.listCourse()
    }
    render.onload()
    const oba = new API()
    const courseStream = await oba.createStream("search/*&facet=type(Cursus)&librarian=true{100}")
    courseStream
      .pipe(data.formatCourse)
      .pipe(render.listCourse)

    }
}

const data = {
  formatBooks: (bookStream) => {
    console.log("bookStream", bookStream)
    const allBooks = []
    const allData = bookStream.map((book) => {

      const data = {
        title: book.titles.title._attributes['search-term'].split('voor')[0].trim(),
        cover: book.coverimages.coverimage[0] ? book.coverimages.coverimage[0]._text : 'https://v19.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/417724462&token=c1322402',
        author: book.authors ? book.authors['main-author']._attributes['search-term'] : 'onbekend',
        summary: book.summaries ? book.summaries.summary._text : 'onbekend.',
        year: book.publication.year['_text']
      }

      allBooks.push(data)

      return data

    })
    window.localStorage.setItem('books',JSON.stringify(allBooks))
  },
  formatCourse: (courseStream) => {
    console.log("stream", courseStream)
    const allCourses = []
    const allData = courseStream.map((course) => {

      const data = {
        title: course.titles.title
          ? (course.titles.title.length > 0
            ? course.titles.title[0]._text
            : course.titles.title._text)
          : course.titles['short-title']._text.split(':')[0].trim(),
        cover: course.coverimages.coverimage
          ? (course.coverimages.coverimage.length > 0
            ? (course.coverimages.coverimage[1]
              ? course.coverimages.coverimage[1]._text
              : course.coverimages.coverimage[0]._text)
            : course.coverimages.coverimage._text)
          : 'https://v19.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/417724462&token=c1322402',
        summary: course.summaries ? course.summaries.summary._text : 'Excuses, er is geen verdere informatie te vinden.',
        link: course.eresources ? course.eresources.eresource._attributes.url : 'geen website'
      }

      allCourses.push(data)

      return data

    })

    window.localStorage.setItem('courses',JSON.stringify(allCourses))
  }
}
