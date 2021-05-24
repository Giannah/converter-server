const convert = require('../utils/converter')

class ConverterController {
  convertInput(req, res) {
    setTimeout(() => {
      const input = req.body.input

      try {
        const result = convert(input)

        res.status(200).json(result).end()
      } catch (error) {
        res.status(400).end()
      }
    }, 2000)
  }
}

module.exports = ConverterController
