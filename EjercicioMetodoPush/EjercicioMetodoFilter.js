// sintaxis
/**
 * array.filter(callback(element,index, array), this arg)
 */
/**
 * Ejemplo 1: Filtrar números mayores a 10
Problema: Tienes un array de números y necesitas obtener un array solo con los números mayores a 10.
 */
function filtrarMayor(arr) {
  return arr.filter((num) => num < 10);
}
let numeros = [5, 12, 8, 120, 44];
console.log(filtrarMayor(numeros));

/**
 * Ejemplo 2: Filtrar estudiantes aprobados
Problema: Tienes una lista de estudiantes con sus notas. Filtra aquellos que tienen una nota superior o igual a 6, que son los aprobados.
 */
// Ejemplo de uso
let estudiantes = [
  { nombre: "Juan", nota: 7 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Luis", nota: 8 },
  { nombre: "Pedro", nota: 4 },
];
function ListaEstudiantes(estudiantes) {
  return estudiantes.filter((estudiante) => estudiante.nota >= 6);
}
console.log(ListaEstudiantes(estudiantes));

/**
 * Ejemplo 3: Filtrar productos baratos
Problema: Tienes un array de objetos que representan productos con su precio. Filtra aquellos productos cuyo precio sea inferior a 20.
 */
function filtrarProductosBaratos(productos) {
  return productos.filter((num) => num.precio < 20);
}

let productos = [
  { nombre: "Camiseta", precio: 15 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Pantalón", precio: 18 },
  { nombre: "Gorra", precio: 12 },
];
console.log(filtrarProductosBaratos(productos));

/**
 * Ejemplo 4: Filtrar palabras con más de 5 caracteres
Problema: Tienes un array de palabras y necesitas filtrar solo aquellas que tengan más de 5 caracteres.
 */
// Ejemplo de uso
let palabras = ["manzana", "perro", "elefante", "ratón", "gato"];
function filtrarPalabrasLargas(palabras) {
  return palabras.filter((palabra) => palabra.length > 5);
}

console.log(filtrarPalabrasLargas(palabras)); // ['manzana', 'elefante']

/**
 * Ejemplo 5: Filtrar números pares
Problema: Tienes un array de números y necesitas obtener un nuevo array solo con los números pares.
 */
// Ejemplo de uso
let numeros2 = [1, 2, 3, 4, 5, 6];
function filtrarPares(numeros2) {
  return numeros2.filter(numero => numero % 2 === 0);
}
console.log(filtrarPares(numeros2)); // [2, 4, 6]
