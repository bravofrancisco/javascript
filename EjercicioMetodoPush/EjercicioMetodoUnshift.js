/**
 * Ejemplo 1: Agregar un jugador al inicio
Problema: Tienes un array con las puntuaciones de los jugadores en un juego, y al inicio de la siguiente ronda, llega un nuevo jugador. Su puntuación debe ser agregada al principio del array.
 */
let puntuaciones3 = [10, 20, 30];
let nuevaPuntuacion = 5;
function agregarNuevoJugadores(puntuaciones3, puntuacion) {
  puntuaciones3.unshift(puntuacion);
  return puntuaciones3;
}
console.log(agregarNuevoJugadores(puntuaciones3, nuevaPuntuacion));
