// let nuevoArray = arreglo.map((elemento, indice, array) => {
//   return nuevoArray;
// });
let numeros = [1, 2, 3, 4, 5];
//creamos un nuevo array donde multiplicacmos cada numero por 2

let multiplicacion = numeros.map((num) => {
  return num * 2;
});
console.log(multiplicacion);

/**
 *Ejercicio 1: Convertir los números a sus cuadrados
Crea un programa que reciba un array de números y devuelva un nuevo array con los cuadrados de esos números.
 */
let numbers = [1, 2, 3, 4, 5];
let cuadrados = numbers.map((num) => {
  return num * 4;
});
console.log(cuadrados);

/**
 * Ejercicio 2: Convertir un array de cadenas a mayúsculas
Dado un array con nombres en minúsculas, utiliza map() para crear un nuevo array donde todos los nombres estén en mayúsculas.
 */
let cadena = ["juan", "luca", "francisco", "karol"];
let mayúsculas = cadena.map((nombre) => {
  return nombre.toUpperCase();
});
console.log(mayúsculas);

/**
 * Ejercicio 3: Sumar un número a cada elemento de un array
Crea una función que reciba un array de números y un número como parámetros. Luego, devuelve un nuevo array donde a cada número del array original se le ha sumado el número recibido como parámetro.
 */
let num = [10, 20, 30, 40, 50];
let suma = 5;
let resultado = num.map((nume) => {
  return nume + suma;
});
console.log(resultado);

/**
 * Ejercicio 4: Obtener la longitud de las cadenas en un array
Crea una función que reciba un array de cadenas y devuelva un nuevo array con la longitud de cada cadena.
 */
let palabras = ["manazana", "banana", "cereza"];
let longitud = palabras.map((palabra) => {
  return palabra.length;
});
console.log(longitud);


/**
 * Ejercicio 5: Filtrar números pares y elevarlos al cuadrado
Crea un programa que reciba un array de números y devuelva un nuevo array con los números pares elevados al cuadrado, y mantenga los impares sin cambios.
 */
let numerosx = [1, 2, 3, 4, 5, 6, 7];
let resultadox = numerosx.map(num => (num % 2 === 0 ? num * num : num));
console.log(resultadox);  // [1, 4, 3, 16, 5, 36, 7]
