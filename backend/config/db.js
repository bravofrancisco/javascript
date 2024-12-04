const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Cambia esto por tu contraseña
  database: 'calculadora_imc',
});

module.exports = pool.promise();