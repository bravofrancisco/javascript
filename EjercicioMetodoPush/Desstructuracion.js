/**
 * 1. Desestructuración de Arrays
La desestructuración de arrays te permite asignar elementos de un array a variables individuales. Puedes hacerlo especificando las variables en el mismo orden en que aparecen los elementos del array.
 */

//ejemplo
const frutas = ["manzana", "banana", "cereza"];
const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

//Ignorar elementos del array: Si solo te interesa algunos elementos, puedes dejar las variables de los elementos que no quieres extraer en blanco (usando comas).
const numeros = [1, 2, 3, 4];
const [, segundo, , cuarto] = numeros;
console.log(segundo); // 2
console.log(cuarto); // 4

const colores = ["rojo"];
const [primero, segundo2 = "azul"] = colores;
console.log(primero);
console.log(segundo2);

//desestructuracion de objetos
//la desestructuracion de objetos permite extraer valores de un objeto y asignarlos a variables con un nombre especificco

const persona = {
  nombre: "francisco",
  edad: 20,
  cuidad: "valdivia",
};
const { nombre, edad, cuidad } = persona;
console.log(nombre);
console.log(edad);
console.log(cuidad);

//Desestructuración con alias: Puedes renombrar las propiedades al desestructurarlas.
const coche = {
  marca: "toyota",
  modelo: "corolla",
  año: 2023,
};
const { marca: m, modelo: mod } = coche;
console.log(m);
console.log(mod);

/**
 * Desestructuración con valores predeterminados: Si una propiedad no existe en el objeto, se puede asignar un valor por defecto.
 */
const producto = { nombres: "Laptop", precio: 1000 };
const { nombres, precio, disponibilidad = "en stock" } = producto;
console.log(nombres); // "Laptop"
console.log(precio); // 1000
console.log(disponibilidad); // "en stock" (valor predeterminado)

// Desestructuración con valores predeterminados: Si una propiedad no existe en el objeto, se puede asignar un valor por defecto.
const productoss = { nombress: "Laptop", precioss: 1000 };
const { nombress, precioss, disponibilidads = "en stock" } = productoss;
console.log(nombress); // "Laptop"
console.log(precioss); // 1000
console.log(disponibilidads); // "en stock" (valor predeterminado)

/**
 * 3. Desestructuración en Funciones
Puedes usar desestructuración en los parámetros de una función para acceder rápidamente a los valores de un objeto o array que se pasa como argumento.

Desestructuración de un array en una función:
 */
function sumar([a, b]) {
  return a + b;
}
console.log(sumar([3, 4]));

/**
 * Desestructuración de un objeto en una función:
 */
function saludar({ nombre, edad }) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

const usuarios = { nombre: "Ana", edad: 30 };
saludar(usuarios); // "Hola, mi nombre es Ana y tengo 30 años."

const usuario = {
  nombre: "Pedro",
  direccion: {
    ciudad: "Lima",
    pais: "Perú",
  },
};
const {
  nombrse,
  direccion: { ciudad, pais },
} = usuario;
console.log(nombrse); // "Pedro"
console.log(ciudad); // "Lima"
console.log(pais); // "Perú"

/**
   *  Desestructuración con Rest (...)
La sintaxis de rest te permite agrupar el resto de las propiedades o elementos no desestructurados en un solo objeto o array.
   */
const persona1 = { nombrez: "Luis", edad: 40, ciudad: "Barcelona" };
const { nombrez, ...resto } = persona1;
console.log(nombrez);
console.log(resto);

const numbers = [1, 2, 3, 4, 5];
const [primerot, segundot, ...resto2] = numbers;
console.log(primerot);
console.log(segundot);
console.log(resto2);
