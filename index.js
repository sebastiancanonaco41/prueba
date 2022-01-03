const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worl!')
})

app.get('/today', (req, res) => {
  res.send('yesterday')
})

app.get('/yesterday', (req, res) => {
  res.send('yesterday')
})

app.get('/tomorrow', (req, res) => {
  res.send('tomorrow')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
