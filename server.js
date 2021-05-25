const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express()
const server = http.createServer(app)

const PORT = process.env.PORT || 5001

/** Router */
const converterRouter = require('./router/converterRouter')

/** Middlewares */
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE')
  next()
})
app.use(function (req, res, next) {
  next()
  console.info(`${req.method} ${req.path} ${res.statusCode}`)
})

/** API */
app.use('/rest/converter', converterRouter)

server.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`)
})
