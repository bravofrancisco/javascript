const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los clientes
router.get('/', (req, res) => {
  db.query('SELECT * FROM Cliente', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los clientes' });
    }
    res.json(results);
  });
});

// Crear un nuevo cliente
router.post('/', (req, res) => {
  const { nombre, email, telefono, direccion } = req.body;
  const query = 'INSERT INTO Cliente (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)';
  
  db.query(query, [nombre, email, telefono, direccion], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear el cliente' });
    }
    res.status(201).json({ message: 'Cliente creado con éxito', id_cliente: results.insertId });
  });
});

// Obtener un cliente por su ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  
  db.query('SELECT * FROM Cliente WHERE id_cliente = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener el cliente' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json(results[0]);
  });
});

module.exports = router;
