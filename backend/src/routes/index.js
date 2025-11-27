const express = require('express');
const cardsRouter = require('./cards.routes');

const routes = express.Router();

routes.use('/cards', cardsRouter);

module.exports = routes;