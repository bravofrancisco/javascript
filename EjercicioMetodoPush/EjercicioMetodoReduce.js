/**
 * El método reduce() en JavaScript es un método poderoso utilizado en arrays que te permite acumular o reducir todos los elementos de un array a un solo valor. Este método toma una función reductora que se aplica a cada elemento del array, de izquierda a derecha, y la función puede tener un valor inicial.
 * 
 * sintaxsis reduce
 * array.reduce(function(acumulador, valorActual, indice, array) {
  // lógica para reducir el array
}, valorInicial);
 */

//Ejercicio basico
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
}, 0);
console.log(sum);

/**
 * Suma de los elementos de un array Dado el siguiente array, usa reduce() para sumar todos sus elementos.
 */
const array2 = [2, 4, 6, 8];
const agrupar = array2.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
});
console.log(agrupar);

/**
 * Encontrar el número más grande Usa reduce() para encontrar el número más grande en un array.
 */
const numbers2 = [3, 5, 7, 2, 8, 6];
const numbersMax = numbers2.reduce((acumulador, valorActual) => {
  return acumulador > valorActual ? acumulador : valorActual;
});
console.log(numbersMax);

/**
 * Concatenar todos los strings de un array Dado el siguiente array de cadenas, utiliza reduce() para concatenar todas las cadenas en una sola.
 */
const words = ["Hola", "como", "estas"];
const sentence = words.reduce((acumulador, valorActual) => {
  return acumulador + " " + valorActual;
});
console.log(sentence);

/**
 * Contar las ocurrencias de cada elemento en un array Dado el siguiente array, usa reduce() para contar cuántas veces aparece cada número.
 */
const numbers3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const count = numbers3.reduce((acumulador, valorActual) => {
  if (acumulador[valorActual]) {
    acumulador[valorActual]++;
  } else {
    acumulador[valorActual] = 1;
  }
  return acumulador;
}, {});
console.log(count);

/**
 * Aplanar un array de arrays Supongamos que tienes un array de arrays y quieres "aplanarlo" en un solo array con todos los elementos. Usa reduce() para hacerlo.
 */
const arrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
const flattened = arrays.reduce((acumulador, valorActual) => {
  return acumulador.concat(valorActual);
}, []);
console.log(flattened);

/**
 * Ejercicio 1: Suma de los números positivos en un array
Dado un array que contiene números positivos y negativos, usa reduce() para sumar solo los números positivos.
*/
const numbers4 = [5, -2, 10, -3, 7, -1];
const sumarPositivo = numbers4.reduce((acumulador, valorActual) => {
  if (valorActual > 0) {
    return acumulador + valorActual;
  }
  return acumulador;
}, 0);
console.log(sumarPositivo);

/**
 * Ejercicio 2: Crear un objeto con la cantidad de veces que aparece cada palabra
Dado un array de palabras, usa reduce() para crear un objeto que indique cuántas veces aparece cada palabra en el array.

Instrucciones:

Usa reduce() para recorrer el array de palabras.
El acumulador será un objeto que contiene como claves las palabras y como valores la cantidad de veces que aparece cada palabra.
 */