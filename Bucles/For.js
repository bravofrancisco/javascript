/**
 * El ciclo for en JavaScript se utiliza para iterar sobre una secuencia de elementos (como un arreglo, una cadena de texto o incluso un rango de números). Se ejecuta un bloque de código repetidamente hasta que se cumpla una condición específica.
 */
// for (inicialización; condición; actualización) {
//   // Bloque de código que se ejecuta mientras la condición sea verdadera
// }

for (let i = 0; i <= 4; i++) {
  console.log("=", i);
}

console.log("*Imrpimir los numeros del 1 al 10**");
for (let i = 0; i <= 10; i++) {
  console.log("=" + i);
}
console.log("*Sumar los números del 1 al 100**");
let sumarTotal = 0;
for (let i = 1; i <= 100; i++) {
  sumarTotal += i;
}
console.log("el total es.:" + sumarTotal);

console.log("*Imprimir los elementos de un arreglo**");

let frutas = ["platano", "naranja", "melon", "sandia"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
frutas.push("mango");
console.log(frutas);

console.log("++contar cuantos numeros positivos hay en un arreglo+++");

let numeros2 = [1, -3, 4, -5, 7, 0, -2];
let contar = 0;
let sumarArreglo = 0;
for (let i = 0; i < numeros2.length; i++) {
  if (numeros2[i] > 0) {
    contar++;
    sumarArreglo += i;
  }
}
console.log(contar);
console.log(sumarArreglo);

console.log("++Encontrar el número más grande de un arreglo+++");
let numeros3 = [1, 3, 7, 2, 9, 4];
let maximo = numeros3[0];
for (let i = 0; i < numeros3.length; i++) {
  if (numeros3[i] > maximo) {
    maximo = numeros3[i];
  }
}
console.log(maximo);

console.log("**Imprimir cada letra de una cadena*");

let str = "Javascript";
for (let i = 0; i <= str.length; i++) {
  console.log(str);
}

let resultadoStr = str;
for (let i = 0; i < resultadoStr.length; i++) {
  console.log(resultadoStr[i]);
}
