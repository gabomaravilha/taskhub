const { Pool } = require('pg');

const connection = new Pool({
  user: 'postgres',        
  host: 'localhost',
  database: 'taskhub',
  password: 'admin',       
  port: 5432,              
});

console.log('Criando pool de conexão com o PostgreSQL...');

module.exports = connection;