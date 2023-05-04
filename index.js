const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


const chefs = require('./data/chefs.json');
const chefData = require('./data/chefData.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send(chefs);
})
app.get('/chefData', (req, res) => {
  res.send(chefData);
})

app.get('/chefData/:id', (req, res) => {
  const id = req.params.id;
  const selected = chefData.find(n => n.id === id)
  res.send(selected);
})

app.listen(port, () => {
  console.log(`Tuk Tuk Kitchen server port ${port}`)
})