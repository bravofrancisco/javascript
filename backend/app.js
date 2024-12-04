const express = require("express");
const bodyParser = require("body-parser");
const personaRoutes = require("./routes/personaRoutes");
const errorHandler = require('./middleware/errorHandler');  // Verifica la ruta


const app = express();

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Rutas
app.use("/api", personaRoutes);

// Middleware de manejo de errores (debe ir al final de todas las rutas)
app.use(errorHandler);

module.exports = app;
