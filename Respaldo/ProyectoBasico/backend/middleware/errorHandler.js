// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    // Si el error es un error conocido (como un error de validación o base de datos)
    console.error(err.stack); // Log del error para fines de depuración
  
    if (err.isJoi) {
      // Si es un error de Joi (validador)
      return res.status(400).json({
        error: 'Error de validación',
        details: err.details,
      });
    }
  
    // Si el error es de la base de datos o cualquier otro error específico
    if (err.code && err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        error: 'Conflicto de datos',
        message: 'Ya existe un registro con los mismos datos.',
      });
    }
  
    // Errores generales (por ejemplo, errores internos del servidor)
    return res.status(500).json({
      error: 'Error interno del servidor',
      message: 'Hubo un problema al procesar tu solicitud. Intenta más tarde.',
    });
  };
  
  module.exports = errorHandler;
  