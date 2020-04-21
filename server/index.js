const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express()
const port = 8000

const addrsRouter = require('./route/addrs-router')

db.once('open', () => {
    console.log('DB연결성공')
})

db.on('error', err => {
    console.log('DB연결 에러')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', addrsRouter)

app.listen(port, () => {
    console.log('server on ' + port)
})