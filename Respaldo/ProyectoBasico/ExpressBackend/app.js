const express = require('express');
const app = express();
const clienteRoutes = require('./routes/cliente');
const compraRoutes = require('./routes/compra');
const ventaRoutes = require('./routes/venta');

// Middleware para manejar datos JSON
app.use(express.json());

// Usar las rutas
app.use('/clientes', clienteRoutes);
app.use('/compras', compraRoutes);
app.use('/ventas', ventaRoutes);

// Configurar el puerto del servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
