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
  },

  update: async (id, card) => {
    const sql = `
      UPDATE cards 
      SET title = $1, description = $2, column_name = $3 
      WHERE id = $4 
      RETURNING *
    `;
    const values = [card.title, card.description, card.column_name, id];
    
    const { rows } = await connection.query(sql, values);
    return rows[0]; 
  }
  
};

module.exports = CardModel; 