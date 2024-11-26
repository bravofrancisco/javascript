/**
 * Declarar un string que contenga tu nombre.
 */
let nombre = "francisco";

/**
 * Declarar un number que contenga tu edad.
 */
let edad = 30;

/**
 * Declarar un boolean que indique si tienes un pasaporte.
 */
let tienePasaporte = false;

/**
 * Declarar un null para representar la ausencia de un valor en una variable.
 */
let trabajo = null;

/**
 * Declarar una variable sin asignar valor para obtener undefined.
 */
let mascota;

/**
 * Declarar un symbol que represente un identificador único.
 */
let idProducto = Symbol("producto123");

/**
 * Declarar un bigint para representar un número muy grande.
 */
let poblacion = 7800000000n;

/**
 * Ejercicio 1: Concatenar un string con tu nombre y apellido
Objetivo: Crear un mensaje que diga "Hola, mi nombre es [nombre] [apellido]."
 */
let names = "francisco";
let lastname = "bravo";
let mensaje =
  "Hola , mi nombres" +
  " " +
  names +
  " " +
  " y mi apellido es " +
  " " +
  lastname;

console.log(mensaje);

/**
 * Ejercicio 2: Calcular el año de nacimiento a partir de la edad
Objetivo: Crear una variable edad y calcular el año de nacimiento (suponiendo que el año actual es 2024).
 */
let anoActual = 2024;
let anoNacimiento = 1992;

let miedad = anoActual - anoNacimiento;

console.log("Mi edad actual es " + miedad);

/**
 * Ejercicio 3: Verificar si una persona es mayor de edad
Objetivo: Usar un boolean para verificar si una persona es mayor de edad (18 años o más).
 */
let age = 20;
let esMayor = (age) => 18;
console.log(esMayor);

/**
 * Ejercicio 4: Asignar un valor null a una variable y comprobarlo
Objetivo: Asignar null a una variable direccion y verificar si tiene un valor asignado.
 */
let direccion = "xx";
if (direccion === null) {
  console.log("no esta definida la direcccion");
} else {
  console.log("hay direccion" + " " + direccion);
}

/**
 * Ejercicio 5: Comprobar si una variable está definida
Objetivo: Comprobar si una variable telefono está definida o no usando undefined.
 */
let telefono = 123;
if (telefono === undefined) {
  console.log("no esta definda");
} else {
  console.log("si esta definida" + " " + telefono);
}

/**
 * Ejercicio 6: Crear un identificador único usando symbol
Objetivo: Crear un symbol que represente un identificador único para un producto y mostrarlo en la consola.
 */
let idProductos = Symbol("androind");
console.log(idProductos);


/**
 * Ejercicio 7: Realizar una operación con bigint
Objetivo: Usar un bigint para calcular la suma de dos números grandes y mostrar el resultado.
 */
let numero1 = 1234567890123456789012345678901234567890n;
let numero2 = 9876543210987654321098765432109876543210n;
let suma = numero1 + numero2;
console.log(suma);  // Resultado esperado: 11111111101111111110111111111011111111100n
