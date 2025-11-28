const express = require('express');
const cardsRouter = require('./cards.routes');
const authRouter = require('./auth.routes');

const routes = express.Router();

routes.use('/auth', authRouter);

routes.use('/cards', cardsRouter);

module.exports = routes;