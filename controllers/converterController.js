const convert = require('../utils/converter')

class ConverterController {
  constructor() {
    this.clients = []
    this.conversions = []
    this.convertInput = this.convertInput.bind(this)
    this.sendConversionsEventsToAll = this.sendConversionsEventsToAll.bind(this)
    this.getStatus = this.getStatus.bind(this)
    this.conversionsEventsHandler = this.conversionsEventsHandler.bind(this)
  }

  sendConversionsEventsToAll(last) {
    this.clients.forEach((client) => client.res.write(`data: ${JSON.stringify(last)}\n\n`))
  }

  convertInput(req, res, next) {
    const input = req.body.input
    try {
      const result = convert(input)
      res.json(result)
      const message = `${input} converted to ${result}`
      this.conversions.push({ message })
      return this.sendConversionsEventsToAll(message)
    } catch (error) {
      res.status(400).end()
    }
  }

  getStatus(req, res) {
    try {
      res.json({ clients: this.clients.length })
    } catch (error) {
      console.log(error)
    }
  }

  conversionsEventsHandler(req, res, next) {
    try {
      const headers = {
        'Content-Type': 'text/event-stream',
        Connection: 'keep-alive',
        'Cache-Control': 'no-cache',
      }

      res.writeHead(200, headers)

      const conversions = this.conversions
      const data = `data: ${JSON.stringify(conversions)}\n\n`

      res.write(data)

      const clientID = Date.now()
      const newClient = {
        id: clientID,
        res,
      }

      this.clients.push(newClient)

      req.on('close', () => {
        this.clients = this.clients.filter((client) => client.id !== clientID)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = ConverterController
