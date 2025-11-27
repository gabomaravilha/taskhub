const express = require('express');
const CardController = require('../controllers/cardcontroller');

const router = express.Router();

router.get('/', CardController.index);

router.post('/', CardController.store);

module.exports = router;