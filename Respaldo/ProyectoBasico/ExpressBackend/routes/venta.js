const express = require('express');
const router = express.Router();
const db = require('../db');

// Crear una nueva venta
router.post('/', (req, res) => {
  const { id_cliente, fecha, total } = req.body;
  const query = 'INSERT INTO Venta (id_cliente, fecha, total) VALUES (?, ?, ?)';
  
  db.query(query, [id_cliente, fecha, total], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear la venta' });
    }
    res.status(201).json({ message: 'Venta creada con éxito', id_venta: results.insertId });
  });
});

// Obtener todas las ventas
router.get('/', (req, res) => {
  db.query('SELECT * FROM Venta', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las ventas' });
    }
    res.json(results);
  });
});

module.exports = router;
