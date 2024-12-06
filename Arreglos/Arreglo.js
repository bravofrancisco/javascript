/**
 * Ejercicio 1: Sumar los elementos de un arreglo
Escribe una función que reciba un arreglo de números y devuelva la suma de todos sus elementos.
 */
function sumarArreglo(arregloSumar) {
  let sumar = 0;
  arregloSumar.forEach((element) => {
    sumar += element;
  });
  return sumar;
}
const result = sumarArreglo([1, 2, 3, 4, 5]);
console.log(result);

/**
 * Ejercicio 2: Encontrar el número mayor en un arreglo
Escribe una función que reciba un arreglo de números y devuelva el número mayor.
 */
function EncontrarNumero(arrayMayor) {
  return Math.max(...arrayMayor);
}
let Mayor = [10, 20, 5, 40, 30];
console.log(EncontrarNumero(Mayor));


/**
 * Escribe una función que reciba un arreglo de números con posibles duplicados y devuelva un arreglo sin duplicados.
 */
function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
  }
  
  let arreglo14 = [1, 2, 3, 2, 4, 1, 5];
  console.log(eliminarDuplicados(arreglo14));  // [1, 2, 3, 4, 5]