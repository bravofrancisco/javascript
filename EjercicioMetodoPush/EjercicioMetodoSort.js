/**
 * Método sort() en JavaScript
El método sort() se utiliza para ordenar los elementos de un arreglo. De forma predeterminada, ordena los elementos como cadenas de texto en orden alfabético ascendente. Sin embargo, podemos personalizar este ordenamiento proporcionando una función de comparación.
 */
const frutas = ["manzana", "banana", "cereza"];
frutas.sort();
console.log(frutas);

const numeros = [3, 1, 4, 1, 5, 9];
numeros.sort((a, b) => a - b);
console.log(numeros);

// ordenamiento numerico descendente
const numeros2 = [3, 1, 4, 1, 5, 9];
numeros2.sort((a, b) => b - a);
console.log(numeros2); // Output: [9, 5, 4, 3, 1, 1]

//ordenamiento de objetos por una propiedad
const personas = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Carlos", edad: 25 },
  { nombre: "Beto", edad: 28 },
];

personas.sort((a, b) => a.edad - b.edad);
console.log(personas); // Ordenados por edad ascendente

//**ordenamiento personlizado */
const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalón', precio: 35 },
    { nombre: 'Zapato', precio: 50 }
  ];
  
  productos.sort((a, b) => {
    if (a.precio === b.precio) {
      return a.nombre.localeCompare(b.nombre); // Ordenar por nombre si el precio es igual
    }
    return a.precio - b.precio; // Ordenar por precio
  });
  console.log(productos); // Ordenados por precio ascendente, luego por nombre alfabéticamente