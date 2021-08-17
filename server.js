const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
const cors = require('cors')
const bent = require('bent')
// const getJSON = bent('json')
const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))

// Set up
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(staticFileMiddleware)
app.use(history({
  disableDotRule: true,
  verbose: true
}))
app.use(staticFileMiddleware)

app.get('/', function (req, res) {
  res.render(path.join(__dirname, '/dist/index.html'))
})
