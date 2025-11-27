const express = require('express');
const routes = require('./routes');

const app = express();

app.get('/', (req,res) => {
  res.status(200).send('OK');
})

app.use(express.json()); 
app.use(routes);         

module.exports = app;