const express = require('express')
const router = express.Router()
const ConverterController = require('../controllers/converterController')

const controller = new ConverterController()

router.post('/', controller.convertInput)
router.get('/status', controller.getStatus)
router.get('/conversions', controller.conversionsEventsHandler)

module.exports = router
