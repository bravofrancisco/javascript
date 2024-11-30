/**
 *El ciclo while en JavaScript funciona de manera muy similar al de Python. Repite un bloque de código mientras una condición sea verdadera.
 */
// while (condición) {
//     // Bloque de código a ejecutar
// }

/**
 * Ejemplo básico en JavaScript:
Imagina que queremos imprimir los números del 1 al 5 utilizando un ciclo while:
 */
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}
/**
 * Contemos cuántas veces aparece un número dentro de un array hasta que lo encontremos, usando un ciclo while:
 */
let numeros = [3, 6, 9, 12, 15, 18, 21];
let buscado = 12;
let indice = 0;
let encontrado = false;

while (indice < numeros.length && !encontrado) {
  if (numeros[indice] === buscado) {
    encontrado = true;
    console.log(`El número ${buscado} se encuentra en el índice ${indice}.`);
  }
  indice++;
}

/**
 * Supongamos que estamos contando cuántas veces necesitamos multiplicar un número para que alcance o supere 100:
 */
let numerosTabla = 2;
let contadotTabla = 0;

while (numerosTabla < 10) {
  numerosTabla *= 2;
  contadotTabla++;
}
console.log(`Se multiplicó ${contador} veces para que ${numerosTabla} alcance o supere 100.`);
