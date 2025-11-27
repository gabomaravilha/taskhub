const CardModel = require('../models/CardModel');

const CardController = {

  async index(req, res) {
    try {
      const cards = await CardModel.getAll();
      return res.status(200).json(cards)
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  async store(req, res) {
    try {
      const { title, description } = req.body;
      
      if (!title) {
        return res.status(400).json({ error: "O título é obrigatório!" });
      }
      const newCard = await CardModel.create(title, description);
      return res.status(201).json(newCard);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

module.exports = CardController;