//#region Problemas para resolver sin desarrollo de código:
// Problema 1: Escribe un programa que reciba un número y determine si es positivo, negativo o cero.
let number = 12;
if (number > 0) {
  console.log("es número positivo");
} else if (number === 0) {
  console.log("es número cero");
} else {
  console.log("es número negativo");
}
// Problema 2: Escribe un programa que reciba dos números y determine cuál de ellos es el mayor. Si ambos son iguales, debe imprimir "Ambos son iguales".
let numero = 13;
let numero2 = 13;
if (numero > numero2) {
  console.log("El primer numero es mayor" + numero);
} else if (numero === numero2) {
  console.log("Son numeros iguales", numero + " " + numero2);
} else {
  console.log("El segundo numero es mayor" + numero2);
}
// Problema 3: Escribe un programa que reciba tres números y determine si todos son mayores a 10.
let numero1 = 12;
let numeros2 = 12;
let numero3 = 1;

if (numero1 > 10 && numeros2 > 10 && numero3 > 10) {
  console.log("todos los numeros son mayores a 10");
} else {
  console.log("no son mayores a 10");
}

// Problema 4: Escribe un programa que reciba una edad y determine si la persona es menor de edad (menos de 18 años), mayor de edad (18-64 años), o anciano (65 años o más).
console.log("´++programa  mayor de edad ++");

let age = 66;
if (age < 18) {
  console.log("Eres menor de edad");
} else if (age >= 18 && age < 64) {
  console.log("Mayor de edad");
} else if (age > 65) {
  console.log("Eres anciano");
} else {
  console.log("Eres mayor de edad");
}
// Problema 5: Escribe un programa que reciba una nota y determine si el estudiante aprobó, reprobó, o si su calificación es suficiente para una mención honorífica (por ejemplo, mayor a 9).

function evaluarNota(nota) {
  if (nota > 9) {
    console.log("¡Mención honorífica! La calificación es mayor a 9.");
  } else if (nota >= 6) {
    console.log("Aprobó. La calificación es " + nota);
  } else {
    console.log("Reprobó. La calificación es " + nota);
  }
}

// Ejemplo de ejecución:
evaluarNota(10);  // Mención honorífica
evaluarNota(7);   // Aprobó
evaluarNota(4);   // Reprobó










// Problema 6: Escribe un programa que reciba un número y determine si es divisible por 4, 5 o ninguno.

let numbers = 121;

if (numbers % 4 === 0 && numbers % 5 === 0) {
  console.log("El número es divisible tanto por 4 como por 5.");
} else if (numbers % 4 === 0) {
  console.log("El número es divisible por 4.");
} else if (numbers % 5 === 0) {
  console.log("El número es divisible por 5.");
} else {
  console.log("El número no es divisible ni por 4 ni por 5.");
}

// Problema 7: Escribe un programa que reciba un número y determine si es impar o par y si es mayor o menor que 100.

function ProgramImparMayor(numerox) {
  let mensaje = ""; // Variable para almacenar el mensaje final

  // Verificar si el número es par o impar
  if (numerox % 2 === 0) {
    mensaje += "El número " + numerox + " es par.\n";
  } else {
    mensaje += "El número " + numerox + " es impar.\n";
  }

  // Verificar si el número es mayor, menor o igual a 100
  if (numerox > 100) {
    mensaje += "El número " + numerox + " es mayor a 100.\n";
  } else if (numerox < 100) {
    mensaje += "El número " + numerox + " es menor a 100.\n";
  } else {
    mensaje += "El número " + numerox + " es igual a 100.\n";
  }

  return mensaje; // Devolvemos el mensaje completo
}

const resultado = ProgramImparMayor(1121);
console.log(resultado); // Ahora puedes imprimir el resultado

//#endregion
