const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/health', (req, res) => res.json({ status: 'OK' }))

app.listen(port, () => console.log(`Hello Apiary listening on port ${port}!`))