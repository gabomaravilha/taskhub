const connection = require('../database/connection');

const UserModel = {
  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await connection.query(sql, [email]);
    return rows[0];
  },

  create: async (name, email, passwordHash) => {
    const sql = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at';
    const values = [name, email, passwordHash];
    const { rows } = await connection.query(sql, values);
    return rows[0];
  }
};

module.exports = UserModel;