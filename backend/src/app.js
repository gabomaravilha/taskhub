const express = require('express');
//const routes = require('./routes')//
const connection = require('./database/connection');
const app = express();

//app.use('/api', routes)//

app.get('/', (req, res) => {
  return res.json({message: 'Welcome to TaskHub API'});
})

app.get('/health', (req, res) => {
  return res.send('OK');
});

app.get('/cards', async (req, res) => {
  try {
    await connection.query(
      "INSERT INTO cards (title, description) VALUES ($1, $2)", 
      ['Tarefa Teste ' + Date.now(), 'Criado automaticamente']
    );

    const { rows } = await connection.query("SELECT * FROM cards");

    return res.json(rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = app;
