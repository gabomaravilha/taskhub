const express = require('express');
const connection = require('./database/connection');
const app = express();

app.get('/health', (req, res) => {
  return res.send('OK');
});

app.get('/db-test', async (req, res) => {
  try {
    const [result] = await connection.query('SELECT 1');
    return res.json({ db: 'connected', result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = app;
