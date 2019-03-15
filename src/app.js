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
  .get('/books', overviewBooks)
  .get('/courses', overviewCourses)
  .get('/books/:frabl', detailBook)
  .get('/courses/:frabl', detailCourse)
  .listen(3333)

function index(req, res) {
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
      console.error(err)
    }
  })
}

function overviewBooks(req, res) {
  console.log("overview books")

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
      console.error(err)
    }
  })
}

function overviewCourses(req, res) {
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
      console.error(err)
    }
  })

}

function detailBook(req, res) {
  console.log("detail book")

  const frabl = req.params.frabl


}

function detailCourse(req, res) {
  console.log("detail course")

}
