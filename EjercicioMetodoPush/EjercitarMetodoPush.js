/**
 * array.push(elemento1, elemento2, ..., elementoN);
 */
let frutas = ["manzana", "banana", "cereza"];
frutas.push("naranja");
console.log(frutas);

let numeros = [1, 2, 3];
numeros.push(4, 5, 6, 7, 8, 9, 10);
console.log(numeros);

let mixedArray = [1, "texto", true];
mixedArray.push(2.5, ["toro"], { clave: "1234" });
console.log(mixedArray);

let coches = ["BMW", "Audi"];
let nuevaLongitud = coches.push("mercedez");
console.log(coches);
console.log(nuevaLongitud);

/**
 * Ejerciccio practico 1
 */
const estudiantes = ["francisco", "manuel", "juana"];
estudiantes.push("Marta", "Marcela", "Macarena");
console.log(estudiantes);

/**
 * Ejercicio práctico 2:
Crea un array de números y agrega números de forma iterativa (usando un bucle) con push(). Después, muestra el array completo.
 */
let numbers = [];
for (let i = 0; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers);

/**
 * Seguimiento de ventas diarias
 */

let venta = [];
let suma = 0;
//supongamos que estas son las ventas realizada durante el dia
let ventadehOY = [150, 200, 90, 120, 180, 250, 300];

//bucle for para agrefgar ventas
for (let i = 0; i < ventadehOY.length; i++) {
  venta.push(ventadehOY[i]);
  suma += ventadehOY[i];
}
console.log("Las venta del dia fueron" + " :" + venta.splice(","));
console.log("Las venta del dia fueron" + " :" + suma);

let totalventasFormateado = suma.toLocaleString("es-CL", {
  style: "currency",
  currency: "CLP",
});
console.log(totalventasFormateado);

/**
 * nscripciones en un Curso
Supón que estás gestionando un sistema de inscripciones para un curso y quieres agregar los nombres de los estudiantes que se inscriben.
 */
let estudiantesSubcritos = [];

//LISTA DE ESTUDIANTES
let nuevosEstudiantes = ["lucas", "pedro", "chanchito"];

for (let i = 0; i < nuevosEstudiantes.length; i++) {
  estudiantesSubcritos.push(nuevosEstudiantes[i]);
}
console.log(
  "nuevos estudinates subcscritos" + " : " + estudiantesSubcritos.splice(",")
);

/**producto de inventarios */
// Crear un array vacío para el inventario
let inventario = [];

// Lista de productos que llegan al inventario
let nuevosProductos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Móvil", precio: 400 },
  { nombre: "Auriculares", precio: 50 },
  { nombre: "Teclado", precio: 30 },
];
// Usar un bucle para agregar los productos al inventario
for (let i = 0; i < nuevosProductos.length; i++) {
  inventario.push(nuevosProductos[i]); // Agregar producto al inventario
}
// Mostrar el inventario actualizado de manera más clara
console.log("Inventario actualizado:");
inventario.forEach((producto, index) => {
  console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
});

console.log("***Almacenar proyecto***");

// Crear un array vacío para almacenar las actividades del proyecto
let actividadesProyecto = [];

// Actividades realizadas durante el día
let actividadesDelDia = [
  "Reunión con el cliente",
  "Desarrollo de funcionalidades",
  "Revisión de código",
  "Pruebas de calidad",
  "Envío de reporte",
];

// Usar un bucle para agregar las actividades al registro
for (let i = 0; i < actividadesDelDia.length; i++) {
  actividadesProyecto.push(actividadesDelDia[i]); // Agregar actividad al registro
}

// Mostrar todas las actividades realizadas
console.log("Actividades realizadas en el proyecto:", actividadesProyecto);

console.log("**Lista de compra*");
// Crear un array vacío para la lista de compras
let listaDeCompras = [];

// Agregar productos a la lista de compras
listaDeCompras.push("Leche");
listaDeCompras.push("Pan");
listaDeCompras.push("Huevos");
listaDeCompras.push("Fruta");

// Mostrar la lista de compras
console.log("Lista de compras:", listaDeCompras);
