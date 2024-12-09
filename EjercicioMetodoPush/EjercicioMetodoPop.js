/**
 * El método pop() en JavaScript se utiliza para eliminar el último elemento de un array y devolver ese elemento. El array se modifica directamente, reduciendo su tamaño en uno.
 * array.pop();
 */
let frutas = ["manzana", "banana", "cereza"];
let frutaeliminada = frutas.pop();
console.log("elemento eliminado:", frutaeliminada);
console.log("elemento actualizado:", frutas);

let vacio = [];
let eliminado2 = vacio.pop();
console.log(eliminado2);
console.log(vacio);

/**
 * Crea un array de números y utiliza pop() para eliminar el último número. Muestra el array después de la operación.
 */
let numbers = [1, 2, 3, 4, 5];
console.log("antes de eliminar", numbers);
numbers.pop();
console.log("eliminado el ultimo numero", numbers);

/**
 * Tienes un array con nombres de personas. Usa pop() para eliminar el último nombre y muestra el array actualizado.
 */
let person = ["mama", "papa", "hijo"];
console.log("antes de eliminar", person);
person.pop();
console.log("eliminado", person);

/**
 * Crea un array con 5 palabras y utiliza pop() varias veces para eliminar dos palabras del final. Imprime el array después de cada eliminación.
 */
let array = ["mouse", "teclado", "pantalla", "audifono", "microfono"];
array.pop();
console.log("eliminacion 1", array);
array.pop();
console.log("eliminacion 2", array);
array.pop();
console.log("eliminacion 3", array);

/**
 * Dado un array de colores, elimina el último color y muestra el color eliminado y el array restante.
 */
let arrayColors = ["azul", "rojo", "naranja", "verde"];
let colorEliminado = arrayColors.pop();
console.log("array orignal", arrayColors);

console.log(colorEliminado);
console.log(arrayColors);

/**
 *Crear un array con valores numéricos. Usa pop() en un ciclo para eliminar elementos hasta que el array esté vacío, mostrando el valor eliminado en cada iteración.
 */
// let valores = [1, 2, 3, 4, 5];
// console.log("valores originales", valores);
// for (let i = 0; i < valores.length; i++) {
//   let numerosEliminado = valores.pop();
//   console.log(numerosEliminado);
// }
// console.log("Array final", valores);

let valores = [1, 2, 3, 4, 5];
console.log("Valores originales:", valores);

// Usamos un ciclo while que sigue hasta que el array esté vacío
while (valores.length > 0) {
  let numerosEliminado = valores.pop(); // Elimina el último elemento
  console.log(numerosEliminado); // Muestra el valor eliminado
}

console.log("Array final:", valores); // Muestra el array vacío

/**
 * Ejercicio avanzado con pop():
Problema: Tienes un array de números que representan las puntuaciones de jugadores en un juego. Cada número es la puntuación de un jugador después de una ronda de juego. Sin embargo, al final de cada ronda, el jugador que tenga la puntuación más baja es descalificado y se elimina del juego (se elimina la última puntuación).

Tu tarea es crear una función que, dado un array de puntuaciones de varios jugadores, elimine las puntuaciones de los jugadores descalificados de acuerdo con la siguiente lógica:
 */
let puntaciones = [10, 15, 5, 20, 5];

function eliminarDescalificados(puntaciones) {
  // Mientras haya más de un jugador (si hay al menos dos puntuaciones)
  while (puntaciones.length > 1) {
    // Encontramos la puntuación más baja
    const puntacionesBaja = Math.min(...puntaciones);

    // Encontramos el índice de la puntuación más baja
    const indiceBajo = puntaciones.indexOf(puntacionesBaja);

    // Eliminamos la puntuación más baja del arreglo
    puntaciones.splice(indiceBajo, 1);
  }

  // Regresamos las puntuaciones restantes
  return puntaciones;
}

// Llamada a la función
puntaciones = eliminarDescalificados(puntaciones);
console.log(puntaciones);

/**
 * Ejemplo 2: Eliminar el jugador con la puntuación más alta
Problema: Tienes un array de puntuaciones de jugadores. Al final de cada ronda, el jugador con la puntuación más alta es descalificado. La función debe eliminar solo la última aparición de la puntuación más alta.
 */
let puntaciones2 = [10, 15, 5, 20, 5];

function eliminarJugadorConPuntuacionAlta(puntuaciones2) {
  const puntuacionAlta = Math.max(...puntuaciones2);
  const indiceAlto = puntuaciones2.lastIndexOf(puntuacionAlta); // Elimina la última aparición
  puntuaciones2.splice(indiceAlto, 1);
  return puntuaciones2;
}
console.log(eliminarJugadorConPuntuacionAlta(puntaciones2));

/**
 * Ejemplo 3: Eliminar el último jugador de la lista
Problema: Tienes un array de puntuaciones de jugadores. En cada ronda, el último jugador de la lista se descalifica, y por lo tanto, debes eliminar la última puntuación de la lista.
 */
let score = [10, 20, 15, 30];
function EliminarUltimoJugador(score) {
  score.pop();
  return score;
}
console.log(EliminarUltimoJugador(score));

/**
 * Ejemplo 4: Eliminar los jugadores con puntuaciones pares
Problema: Tienes un array de puntuaciones. Al final de cada ronda, los jugadores con puntuaciones pares son descalificados. La función debe eliminar las puntuaciones pares del array.
 */
let score2 = [10, 15, 8, 7, 12, 9];

function eliminarJugadoresConPuntuacionesPares(score2) {
  let index = score2.length;
  while (index--) {
    if (score2[index] % 2 === 0) {
      score2.splice(index, 1);
    }
  }
  return score2;
}
console.log(eliminarJugadoresConPuntuacionesPares(score2));


/**
 * Ejemplo 5: Eliminar el jugador con la puntuación menor que la media
Problema: Tienes un array de puntuaciones. Al final de cada ronda, el jugador cuya puntuación esté por debajo de la media de las puntuaciones de todos los jugadores debe ser descalificado. La función debe eliminar solo la última aparición de una puntuación menor que la media.
 */
function eliminarJugadorConPuntuacionBaja(puntuaciones) {
  const media = puntuaciones.reduce((sum, score) => sum + score, 0) / puntuaciones.length;
  const puntuacionBaja = puntuaciones.find(score => score < media);
  const indiceBajo = puntuaciones.lastIndexOf(puntuacionBaja);
  puntuaciones.splice(indiceBajo, 1);
  return puntuaciones;
}
let puntuaciones = [10, 20, 15, 5, 30];
console.log(eliminarJugadorConPuntuacionBaja(puntuaciones));  // [10, 20, 15, 30]