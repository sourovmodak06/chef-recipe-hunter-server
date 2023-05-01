const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Tuk Tuk Kitchen server Running')
})

app.listen(port, () => {
  console.log(`Tuk Tuk Kitchen server port ${port}`)
})