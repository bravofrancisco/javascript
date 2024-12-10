const express = require('express');
const router = express.Router();
const db = require('../db');

// Crear una nueva compra
router.post('/', (req, res) => {
  const { id_cliente, fecha, total } = req.body;
  const query = 'INSERT INTO Compra (id_cliente, fecha, total) VALUES (?, ?, ?)';
  
  db.query(query, [id_cliente, fecha, total], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear la compra' });
    }
    res.status(201).json({ message: 'Compra creada con éxito', id_compra: results.insertId });
  });
});

// Obtener todas las compras
router.get('/', (req, res) => {
  db.query('SELECT * FROM Compra', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las compras' });
    }
    res.json(results);
  });
});

module.exports = router;
