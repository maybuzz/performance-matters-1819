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
  .get('/:frabl', detailBook)
  .get('/courses', overviewCourses)
  .get('/courses/:frabl', detailCourse)
  .listen(3333)

function index(req, res) {
  fs.readFile('static/data/bookData.json', 'utf8', (err, books) => {
    if (err) {
      console.log('i fail')
      console.error(err)
      return
    }
    try {
      console.log('i try')
      const data = JSON.parse(books)
      console.log(data);

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

  res.render('main.ejs', {
    page: 0
  })
}

function overviewCourses(req, res) {
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
        page: 0,
        courses: data
      })
    } catch (err) {
      console.error(err)
    }
  })
}

function detailBook(req, res) {
  console.log("detail book")
  const data = fs.readFile('static/data/bookData.json')
  console.log(req.params)

  res.render('book.ejs', {
    page: 0,
    book: data
  })
}

function detailCourse(req, res) {

}
