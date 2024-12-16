const db = require('../config/db');  // Conexión a la base de datos

const Persona = {
  crearPersona: async (nombre, edad, sexo, peso, altura, imc) => {
    try {
      const query = 'INSERT INTO personas (nombre, edad, sexo, peso, altura, imc) VALUES (?, ?, ?, ?, ?, ?)';
      const [result] = await db.execute(query, [nombre, edad, sexo, peso, altura, imc]);
      return result;
    } catch (err) {
      // Si el error es un conflicto en la base de datos, lo manejamos de forma específica
      if (err.code === 'ER_DUP_ENTRY') {
        throw new Error('Conflicto de datos en la base de datos');
      }
      throw err; // Si es otro tipo de error, lo lanzamos tal cual para ser capturado en el controlador
    }
  },

  crearRegistroIMC: async (idPersona, imc) => {
    try {
      const query = 'INSERT INTO registros_imc (id_persona, imc) VALUES (?, ?)';
      const [result] = await db.execute(query, [idPersona, imc]);
      return result;
    } catch (err) {
      throw err;  // Lanzamos el error para que sea manejado por el controlador
    }
  },

  obtenerPersonas: async () => {
    try {
      const query = 'SELECT * FROM personas';
      const [rows] = await db.execute(query);
      return rows;
    } catch (err) {
      throw err;  // Lanzamos el error para que sea manejado por el controlador
    }
  }
};

module.exports = Persona;
