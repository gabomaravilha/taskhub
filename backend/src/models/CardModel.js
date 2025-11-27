const connection = require('../database/connection');

const CardModel = {
  getAll: async () => {
    const { rows } = await connection.query("SELECT * FROM cards");
    return rows;
  },

  create: async (title, description) => {
    const sql = "INSERT INTO cards (title, description) VALUES ($1, $2) RETURNING *";
    const { rows } = await connection.query(sql, [title, description]);
    return rows[0];
  }
};

module.exports = CardModel; 