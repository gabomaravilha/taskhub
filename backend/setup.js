const connection = require('./src/database/connection');

async function createUsersTable() {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await connection.query(sql);
    console.log('✅ Tabela USERS criada com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao criar tabela de USERS:', error);
  } finally {
    await connection.end();
  }
}

createUsersTable();