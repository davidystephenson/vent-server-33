const express = require('express')

const app = express()

const port = 4000

app.get('/', (request, response) => {
  response.send('hello world')
})

app.listen(
  port,
  () => console
    .log(`Listening on ${port}`)
)
