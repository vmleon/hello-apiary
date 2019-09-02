const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/health', (req, res) => res.json({ status: 'OK' }))

app.listen(port, () => console.log(`Hello Apiary listening on port ${port}!`))