const express = require('express')
const app = express()
const port = 3005
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  console.log(`ShareASmile app listening on port ${port}`)
})