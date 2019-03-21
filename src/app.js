'use strict'

const fs = require('fs')
const ejs = require('ejs')
const express = require('express')
const app = express()

app
  .use(express.static('static'))
  .set('view engine', 'ejs')
  .set('views', 'views')
  .get('/', index)
  .get('/books', index)
  .get('/courses', overviewCourses)
  .get('/books/:frabl', detailBook)
  .get('/courses/:frabl', detailCourse)
  .listen(3333)

function index(req, res, err) {
  console.log("index")

  fs.readFile('static/data/bookData.json', 'utf8', (err, books) => {
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
      console.error("index error:", err)
    }
  })
}

function overviewCourses(req, res, err) {
  console.log("overview course")

  fs.readFile('static/data/courseData.json', 'utf8', (err, courses) => {
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
      console.error("overviewCourses error:", err)
    }
  })

}

function detailBook(req, res, err) {
  console.log("detail course")

  const frabl = req.params.frabl

  const data = fs.readFile('static/data/bookData.json', 'utf8', (err, books) => {
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
  console.log("detail course")

  const frabl = req.params.frabl

  const data = fs.readFile('static/data/courseData.json', 'utf8', (err, courses) => {
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

      console.log(detailCourse);
    } catch (err) {
      console.error(err)
    }
  })

}
