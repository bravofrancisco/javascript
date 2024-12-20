const express = require("express");
const morgan = require("morgan");
const path = require("path"); // Agregar esta línea

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("./static"));

app.listen(3000, () => {
  console.log(`server  on port ${3000}`);
});
