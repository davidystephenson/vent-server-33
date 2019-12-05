const express = require('express')
const bodyParser = require('body-parser')

const ventRouter = require('./vent/router')

const app = express()

const port = 4000

app.get('/', (request, response) => {
  response.send('hello world')
})

const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(ventRouter)

app.listen(
  port,
  () => console
    .log(`Listening on ${port}`)
)
