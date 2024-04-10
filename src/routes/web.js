const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! Nodemon')
})
router.get('/abc', (req, res) => {
    res.send('ABC')
})
router.get('/test', (req, res) => {
    res.render('sample.ejs')
})
module.exports = router;