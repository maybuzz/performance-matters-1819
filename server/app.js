'use strict'

const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const express = require('express')
const compression = require('compression')
const app = express()

app
  .use(compression())
  .use((req, res, next) => { res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60);  next() })
  .use(express.static(path.join(__dirname, 'static')))
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))
  .get('/', index)
  .get('/offline', offline)
  .get('/books', index)
  .get('/courses', overviewCourses)
  .get('/books/:frabl', detailBook)
  .get('/courses/:frabl', detailCourse)
  .listen(3333)

function index(req, res, err) {
  console.log('index')

  fs.readFile('server/static/data/bookData.json', 'utf8', (err, books) => {
    if (err) {
      console.log('i fail')
      console.error(err)
      return
    }
    try {
      console.log('i try')
      const data = JSON.parse(books)

      res.render('main.ejs', {
        page: 0,
        books: data
      })
    } catch (err) {
      console.error('index error: ', err)
    }
  })
}

function offline(req, res, err) {
  res.render('offline.ejs')
}

function overviewCourses(req, res, err) {
  console.log('overview course')

  fs.readFile('server/static/data/courseData.json', 'utf8', (err, courses) => {
    if (err) {
      console.log('i fail')
      console.error(err)
      return
    }
    try {
      console.log('i try')
      const data = JSON.parse(courses)

      res.render('main.ejs', {
        page: 1,
        courses: data
      })
    } catch (err) {
      console.error('overviewCourses error: ', err)
    }
  })

}

function detailBook(req, res, err) {
  console.log('detail course')

  const frabl = req.params.frabl

  const data = fs.readFile('server/static/data/bookData.json', 'utf8', (err, books) => {
    if (err) {
      console.log('i fail')
      console.error(err)
      return
    }
    try {
      console.log('i try')
      const dataJSON = JSON.parse(books)

      const detailBook = dataJSON.filter(detail => {
        return detail.frabl === frabl
      })

      res.render('book.ejs', {
        book: detailBook
      })

    } catch (err) {
      console.error(err)
    }
  })

}

function detailCourse(req, res, err) {
  console.log('detail course')

  const frabl = req.params.frabl

  const data = fs.readFile('server/static/data/courseData.json', 'utf8', (err, courses) => {
    if (err) {
      console.log('i fail')
      console.error(err)
      return
    }
    try {
      console.log('i try')
      const dataJSON = JSON.parse(courses)

      const detailCourse = dataJSON.filter(detail => {
        return detail.frabl === frabl
      })

      res.render('course.ejs', {
        course: detailCourse
      })

    } catch (err) {
      console.error(err)
    }
  })

}
