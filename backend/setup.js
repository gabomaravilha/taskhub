const connection = require('./src/database/connection');

async function createTable() {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS cards (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        column_name VARCHAR(50) DEFAULT 'TODO'
      );
    `;

    await connection.query(sql);
    console.log('✅ Tabela CARDS criada com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao criar tabela:', error);
  } finally {
    await connection.end(); 
  }
}

createTable();