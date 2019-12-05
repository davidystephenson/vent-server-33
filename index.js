const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const ventRouter = require('./vent/router')

const app = express()

const port = 4000

app.get('/', (request, response) => {
  response.send('hello world')
})

const corsMiddleware = cors()
app.use(corsMiddleware)

const jsonParser = bodyParser.json()
app.use(jsonParser)

app.use(ventRouter)

app.listen(
  port,
  () => console
    .log(`Listening on ${port}`)
)
