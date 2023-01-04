const express = require('express')
const cors = require('cors')
const events = require('events')

const emitter = new events.EventEmitter()

const PORT = 5000

const app = express()

app.use(cors())

app.get('/get-messages', () => {
  emitter.once('newMessage', (message) => {
    res.json(message)
  })
})

app.post('/new-messages', (req, res) => {
  const message = req.body
  emitter.emit('newMessage', message)
  res.status(200)
})

app.listen(PORT, () => console.log(`SERVER START ${PORT} `))
