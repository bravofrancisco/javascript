const express = require("express");
const morgan = require("morgan");
const path = require("path"); // Agregar esta línea

const app = express();
let products = [
  { id: 1, name: "laptop", price: 2.0 },
  { id: 2, name: "mOUSE", price: 23.0 },
];

app.use(morgan("dev"));
app.use(express.json());
app.set("AppName", " Express Course");

app.get("/producto", (req, res) => {
  res.json(products);
});
app.post("/producto", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(newProduct);
});

// PUT request to update a product by ID
app.put("/producto/:id", (req, res) => {
  const newData = req.body; // Obtener los nuevos datos del cuerpo de la solicitud
  const productFound = products.find(
    (producto) => producto.id === parseInt(req.params.id)
  );

  if (!productFound) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  // Actualizar el producto en el array
  products = products.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );

  // Buscar el producto actualizado y devolverlo
  const updatedProduct = products.find((p) => p.id === parseInt(req.params.id));
  res.json({
    message: "Product updated successfully",
    updatedProduct: updatedProduct, // Enviar el producto actualizado
  });
});

app.delete("/producto/:id", (req, res) => {
  const productFound = products.find(function (producto) {
    return producto.id === parseInt(req.params.id);
  });
  if (!productFound)
    return res.status(404).json({
      message: "product not found",
    });

  // Actualizar el array de productos eliminando el producto por ID
  products = products.filter((p) => p.id !== parseInt(req.params.id));

  console.log(products); // Para depuración

  res.json({
    message: "Producto eliminado",
    product: productFound, // Envía el producto eliminado
  });
});

app.get("/producto/:id", (req, res) => {
  const productFound = products.find(function (producto) {
    return producto.id === parseInt(req.params.id);
  });
  if (!productFound)
    return res.status(404).json({
      message: "message not found",
    });
  console.log(productFound);
  res.json(productFound);
});

// Servir archivos estáticos desde la carpeta "static"
app.use("/static", express.static(path.join(__dirname, "static")));

app.listen(3000, () => {
  console.log(`server ${app.get("AppName")} on port ${3000}`);
});
