/**
 * Ejemplo 1:
Escribe un programa que imprima los números impares del 1 al 50.
 */
let numeros = 0;

while (numeros < 50) {
  if (numeros % 2 !== 0) {
    console.log(numeros);
  }
  numeros++;
}

/**
 * Ejemplo 2:
Escribe un programa que calcule la suma de los primeros 100 números naturales (desde 1 hasta 100).
 */
console.log("+++imprimir la suma++");

let numeros2 = 1;
let suma = 0;
while (numeros2 <= 3) {
  suma += numeros2;
  numeros2++;
}
console.log(suma);
