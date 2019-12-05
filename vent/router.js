const express = require('express')

const Vent = require('./model')

const { Router } = express
// const Router = express.Router

const router = new Router()

router.get(
  '/test',
  (request, response) => {
    response.send('test!')
  }
)

router.get(
  '/vent',
  (request, response) => {
    Vent
      .findAll()
      .then(vents => {
        response.send(vents)
      })
  }
)

router.post(
  '/vent',
  (request, response) => {
    Vent
      .create(request.body)
      .then(vent => response.send(vent))
  }
)

module.exports = router
