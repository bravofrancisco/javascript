const express = require('express');
const personaController = require('../controllers/personaController');
const personaValidator = require('../validators/personaValidator');

const router = express.Router();

// Ruta para crear una persona y su registro de IMC
router.post('/personas', personaValidator, personaController.crearPersona);

// Ruta para obtener todas las personas
router.get('/personas', personaController.obtenerPersonas);

module.exports = router;
