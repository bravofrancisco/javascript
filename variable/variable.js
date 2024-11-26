//var es la forma de decalrar variable de ambito global o funcional
var nombre = "Francisco";
var apellido = "Bravo";

console.log(nombre);
console.log(apellido);

/**
 * b) let:
Se introdujo en ES6 y es más moderna. Tiene ámbito de bloque y no puede ser redeclarada en el mismo bloque.
 */
let edad = 23;
let edad2 = 21;

/**
 * c) const:
También fue introducido en ES6. Las variables declaradas con const no pueden ser reasignadas (es decir, son constantes) y tienen ámbito de bloque.
 */
const pais = "Chile";
pais = "USA";
console.log(pais);
