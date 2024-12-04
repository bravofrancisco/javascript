const Persona = require('../models/persona');
const personaSchema = require('../validators/personaValidator');

const personaController = {
  // Crear una nueva persona
  crearPersona: async (req, res, next) => {
    try {
      // Validar los datos de la solicitud usando Joi
      const { error } = personaSchema.validate(req.body);

      if (error) {
        // Si la validación falla, lanzar un error para ser manejado por el middleware
        return next(error);  // El error se pasa al siguiente middleware (el de manejo de errores)
      }

      const { nombre, edad, sexo, peso, altura } = req.body;
      const imc = peso / (altura * altura); // Fórmula para calcular IMC

      // Intentar insertar la persona y registrar el IMC
      const result = await Persona.crearPersona(nombre, edad, sexo, peso, altura, imc);

      // Insertar el registro del IMC
      await Persona.crearRegistroIMC(result.insertId, imc);

      res.status(201).json({
        message: 'Persona y registro IMC creados con éxito',
        idPersona: result.insertId,
        imc
      });
    } catch (err) {
      // Si ocurre un error en cualquier parte de la función, se pasa al middleware de manejo de errores
      next(err);
    }
  },

  // Obtener todas las personas
  obtenerPersonas: async (req, res, next) => {
    try {
      const personas = await Persona.obtenerPersonas();
      res.status(200).json(personas);
    } catch (err) {
      // Pasar el error al middleware de manejo de errores
      next(err);
    }
  }
};

module.exports = personaController;

