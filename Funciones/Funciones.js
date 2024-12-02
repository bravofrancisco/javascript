/**
 * function nombreDeLaFuncion(parametros) {
  // Código a ejecutar
}
 */
function Greetting() {
  console.log("Hola Mundo");
}
Greetting();

/**
 * 3. Funciones con parámetros
Las funciones también pueden recibir parámetros, que son valores que se pasan cuando se llama a la función. Los parámetros se usan para hacer que la función sea más flexible y reutilizable.

Sintaxis con parámetros:
function nombreDeLaFuncion(parametro1, parametro2) {
  // Código que usa los parámetros
}
 */
function saludar(nombre) {
  console.log("Hola," + nombre + "!");
}
saludar("carlos");
saludar("Ana");

/**
 * 4. Funciones con retorno (return)
Las funciones pueden devolver un valor usando la palabra clave return. Esto permite que la función realice un cálculo o procesamiento y devuelva el resultado a la parte del código que la llamó.

function nombreDeLaFuncion(parametro1, parametro2) {
  return valor;  // Devuelve un valor
}
 */

function Sumar(a, b) {
  return a + b;
}
let resultado = Sumar(1, 2);
console.log("El resultado es =" + resultado);

/**
 * 5. Funciones anónimas
Una función anónima es una función que no tiene un nombre. Las funciones anónimas suelen usarse como valores de asignación a variables o dentro de otros métodos, como callbacks.
 */
let multiplicar = (a, b) => {
  return a * b;
};
console.log(multiplicar(2, 3));

/**
 *  Las funciones flecha son una forma más concisa de escribir funciones en JavaScript. Introducidas en ECMAScript 6 (ES6), las funciones flecha permiten omitir la palabra clave function y tienen una sintaxis más compacta.
 * const nombreDeLaFuncion = (parametro1, parametro2) => {
  // Código de la función
}
 */
const Salud = (name) => {
  console.log("Hola" + " " + name);
};
Salud("Marcela");

(function () {
  console.log("Esta función se ejecuta automáticamente.");
})();

function factorial(numbers) {
  if (numbers === 0) {
    return 1;
  }
  return numbers * factorial(numbers - 1);
}
console.log(factorial(5));

/**
 * 9. Parámetros por defecto
Los parámetros por defecto se utilizan para asignar un valor a un parámetro si no se pasa uno durante la llamada a la función.

Sintaxis con parámetros por defecto:
 */
function saludar(nombre = "Invitado") {
  console.log("¡Hola, " + nombre + "!");
}

saludar(); // Imprime: ¡Hola, Invitado!
saludar("Juan"); // Imprime: ¡Hola, Juan!

/**
   * 
   * 10. Funciones dentro de objetos (Métodos)
En JavaScript, las funciones también se pueden definir dentro de objetos. Estas funciones se llaman métodos.
   */
const persona = {
    nombre: "Pedro",
    saludar: function() {
      console.log("¡Hola, soy " + this.nombre + "!");
    }
  };
  
  persona.saludar();  // Imprime: ¡Hola, soy Pedro!
  