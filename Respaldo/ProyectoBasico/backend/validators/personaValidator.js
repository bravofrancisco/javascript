const { body } = require('express-validator');

// Validación de los datos para crear una persona
const personaValidator = [
  body('nombre')
    .isString().withMessage('El nombre debe ser una cadena de texto')
    .isLength({ min: 3, max: 255 }).withMessage('El nombre debe tener entre 3 y 255 caracteres'),
  
  body('edad')
    .isInt({ min: 0 }).withMessage('La edad debe ser un número entero positivo'),
  
  body('sexo')
    .isIn(['masculino', 'femenino']).withMessage('El sexo debe ser "masculino" o "femenino"'),
  
  body('peso')
    .isFloat({ gt: 0 }).withMessage('El peso debe ser un número mayor que 0'),
  
  body('altura')
    .isFloat({ gt: 0 }).withMessage('La altura debe ser un número mayor que 0')
];

module.exports = personaValidator;
