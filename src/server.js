const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 3001
const hostname = process.env.HOSTNAME
app.set('view', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/abc', (req, res) => {
  res.send('ABC')
})
app.get('/testEjs', (req, res) => {
  res.render('views/sample.ejs')
})
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})