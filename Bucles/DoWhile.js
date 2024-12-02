/*
do{

}while(condicion);
**/
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

/**
 * Imprimir los numeros del 1 al 10
 */
console.log("+Imprimir los numero del 1 al 10++");

let numeros = 1;
do {
  console.log(numeros);
  numeros++;
} while (numeros <= 10);

/**
 * Imprimir: Sumar los numeros del 1 al 100
 */
console.log("Sumar los numero del 1 al 100");
let numbers = 1;
let suma = 0;
do {
  suma += numbers;
  numbers++;
} while (numbers <= 100);
console.log(suma);

/**
 * 3. Intermedio: Verificar si un número es par o impar
Escribe un ciclo do...while que pida al usuario ingresar números hasta que ingrese un número par, y luego imprima si es par o impar.
 */
console.log("Numero es par o impar");

// let num;
// do {
//   num = parseInt(prompt("Ingresa un numero:")); // Use prompt to input number
//   if (num % 2 === 0) {
//     console.log("El numero es par.");
//   } else {
//     console.log("El numero es impar.");
//   }
// } while (num % 2 !== 0); // Continue the loop until the number is even

/**
 * . Difícil: Imprimir una pirámide de asteriscos
Escribe un ciclo do...while que imprima una pirámide de asteriscos con 5 filas.
 */
let filas = 5;
let j =1;
do {
    let fila = '';
    let x = 1;
    while (x <=j) {
        fila += "+";
        x++;
    }
    console.log(fila);
    j++;
    
} while (j <=filas);

/**
 * Adivina el jeugo
 */
// let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// let intento;
// do {
//   intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
//   if (intento < numeroSecreto) {
//     console.log("Demasiado bajo. Intenta de nuevo.");
//   } else if (intento > numeroSecreto) {
//     console.log("Demasiado alto. Intenta de nuevo.");
//   } else {
//     console.log("¡Adivinaste el número!");
//   }
// } while (intento !== numeroSecreto);
