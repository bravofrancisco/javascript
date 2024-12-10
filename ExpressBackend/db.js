const mysql = require('mysql2');

// Crear conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',     // o la dirección de tu servidor de base de datos
  user: 'root',          // tu usuario de MySQL
  password: '',          // tu contraseña de MySQL
  database: 'retail'     // el nombre de la base de datos que creaste
});

// Verificar la conexión
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;
