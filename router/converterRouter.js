const express = require('express')
const router = express.Router()
const ConverterController = require('../controllers/converterController')

const controller = new ConverterController()

router.post('/', controller.convertInput)

module.exports = router
