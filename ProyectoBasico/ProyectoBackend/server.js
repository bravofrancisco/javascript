// Importamos las dependencias necesarias
const express = require("express");
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Lista de productos (en memoria, sin base de datos)
let productos = [
  { id: 1, nombre: "Laptop", precio: 900, categoria: "Electrónica" },
  { id: 2, nombre: "Smartphone", precio: 1900, categoria: "Electrónica" },
  { id: 3, nombre: "Auriculares", precio: 90, categoria: "Accesorios" },
];

// Endpoint para obtener todos los productos
app.get("/productos", (req, res) => {
  res.json(productos);
});

// Endpoint para obtener un producto por ID
app.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

// Endpoint para crear un nuevo producto
app.post("/productos", (req, res) => {
  const { nombre, precio, categoria } = req.body;

  if (!nombre || !precio || !categoria) {
    return res.status(400).send("Datos incompletos");
  }

  const nuevoProducto = {
    id: productos.length + 1, // Generamos un ID simple
    nombre,
    precio,
    categoria,
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// Endpoint para actualizar un producto
app.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, precio, categoria } = req.body;

  const producto = productos.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).send("Producto no encontrado");
  }

  // Actualizamos los datos del producto
  producto.nombre = nombre || producto.nombre;
  producto.precio = precio || producto.precio;
  producto.categoria = categoria || producto.categoria;

  res.json(producto);
});

// Endpoint para eliminar un producto
app.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).send("Producto no encontrado");
  }

  productos.splice(index, 1); // Eliminamos el producto del arreglo
  res.status(204).send(); // Respondemos con un estado 204 (sin contenido)
});

// Arrancamos el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
