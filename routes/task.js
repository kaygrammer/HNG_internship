const express = require('express')
const router = express.Router()

const {calculate} = require('../controller/task')
router.post('/', calculate)

module.exports = router