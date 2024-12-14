/**
 * async es una palabra clave que se coloca antes de una función para indicarle que la función es asincrónica. Esto significa que la función devolverá una promesa automáticamente.

await se utiliza dentro de funciones async para pausar la ejecución de la función hasta que una promesa se resuelva. Puedes pensar en await como una forma de "esperar" a que una promesa termine antes de continuar con la ejecución del código.
 */
async function ejemplo() {
  let resultado = await Promise.resolve("Hola desde la prmesa");
  console.log(resultado);
}
ejemplo();

/**
 * Cómo funciona async/await con Promesas:
Cuando tienes una función que devuelve una promesa, puedes usar await para esperar a que la promesa se resuelva antes de continuar.
 */
async function obtenerDatos(params) {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let datos = await respuesta.json();
  console.log(datos);
}
obtenerDatos();

/**
 * Cuando trabajas con async/await, puedes usar un bloque try/catch para manejar errores de manera sencilla.
 */
async function obtenerdatos2(params) {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!respuesta.ok) throw new Error("No se pudo obtener los datos");
    let datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
obtenerdatos2();

console.log("*resolver promesa con await");
async function fetchUserData() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");
    let obtenerRespuesta = await respuesta.json();
    console.log(obtenerRespuesta);
  } catch (error) {
    console.error(error);
  }
}
fetchUserData();

/**
 * Ejercicio 2: Manejo de errores
Modifica el ejercicio anterior para que, si ocurre un error al obtener los datos (por ejemplo, la API no responde), imprima un mensaje de error adecuado en la consola.
 */

async function obtenerDatos3() {
  try {
    let respuesta3 = await fetch("https://api.example.com/datos");
    if (!respuesta3) {
      throw new Error("La respuesta de la red no fue exitosa");
    }
    let obtenerRespuesta2 = await respuesta3.json();
    console.log(obtenerRespuesta2);
  } catch (error) {
    console.error(error);
  }
}
obtenerDatos3();

async function fetchMultiplePosts() {
  try {
    let [post1, post2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) =>
        res.json()
      ),
    ]);
    console.log(post1, post2);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

fetchMultiplePosts();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedGreeting() {
  await delay(2000); // Espera 2 segundos
  console.log("¡Hola después de 2 segundos!");
}
delayedGreeting();
