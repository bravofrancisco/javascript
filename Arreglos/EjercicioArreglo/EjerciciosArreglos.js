/**
 * let arreglo = [1, 2, 3, 4, 5];
 * let arreglo = new Array(1, 2, 3, 4, 5);
 */
let arreglo = [10, 20, 30, 40, 50];
console.log(arreglo[0]); // 10 (primer elemento)
console.log(arreglo[2]); // 30 (tercer elemento)
console.log(arreglo[12]); // 30 (tercer elemento)

//modificar arreglo
let arreglo2 = [10, 20, 30, 40, 50];
arreglo[2] = 35; // Cambia el valor en el índice 2 (el valor 30 se convierte en 35)
console.log(arreglo2); // [10, 20, 35, 40, 50]

//Propiedad lenght
let arreglo3 = [1, 2, 3, 4, 5];
console.log(arreglo3.length);

//push Agregar un elemento al final del arreglo y deveulve el nuevo tamaño del arreglo

let arreglo4 = [10, 22, 31];
arreglo4.push(100);
console.log(arreglo4);

//POP elimina el ultimo elemento del arreglo y lo devuelvo
let arreglo5 = [32, 12, 43];
let eliminado = arreglo5.pop();
console.log(arreglo5);
console.log(eliminado);

//shift() Elimina el primer elemento del arreglo y lo devuelve
let arreglo6 = [10, 20, 30, 40];
let eliminado6 = arreglo6.shift();
console.log("antes");

console.log(arreglo6); // [20, 30, 40]
console.log("despues");
console.log(eliminado6); // 10

//Unshift agrega un eleento al principio del arrego y devuelve el nuevo tamano del arreglo
let arreglo7 = [20, 30, 40];
arreglo7.unshift(10);
console.log(arreglo7); // [10, 20, 30, 40]

console.log("++metodo foreach++");
let arreglo8 = [10, 20, 30, 40];
arreglo8.forEach(function (elemento, indice) {
  console.log(`Elemento en el índice ${indice}: ${elemento}`);
});

//Map crea un nuevo arreglo con los resultado de la ejecucion de una funcion en cada elemento del arreglo original.

console.log("*Elemento MAP*");

let arreglo9 = [1, 2, 3, 4, 99];
let nuevoarreglo = arreglo9.map(function (elemento2) {
  return elemento2 * 2;
});
console.log(nuevoarreglo);

//filter crea un nuevo arrelgo con los elementos que pasen una prueba definada por una funcion
let arreglo10 = [10, 20, 30, 40, 50];
let nuevoArreglo10 = arreglo10.filter(function (elemento3) {
  return elemento3 > 25; // Solo elementos mayores que 25
});
console.log(nuevoArreglo10); // [30, 40, 50]

/**
 * reduce():
Aplica una función a un acumulador y a cada elemento (de izquierda a derecha) para reducirlo a un solo valor.
 */
let arreglo11 = [1, 2, 3, 4, 5];
let suma = arreglo11.reduce(function (acumulador, valorActual) {
  return acumulador + valorActual;
}, 0); // Inicializa el acumulador en 0
console.log(suma); // 15

/**
 * 
 * find():
Devuelve el primer elemento que cumpla con la condición dada.
 */
console.log("**Elemento encontado**");

let arreglo12 = [10, 20, 30, 40, 50];
let encontrado = arreglo12.find(function (elemento) {
  return elemento > 30; // Encuentra el primer elemento mayor que 30
});
console.log(encontrado); // 40

/**
 * includes():
Verifica si un arreglo contiene un determinado elemento.
javascript
Copiar código

 */
console.log("++metodo include++");

let arreglo13 = [10, 20, 30, 40];
console.log(arreglo13.includes(20)); // true
console.log(arreglo13.includes(50)); // false

let arreglo = [40, 10, 100, 25, 5];
arreglo.sort(); // Ordena como cadenas de texto
console.log(arreglo); // [10, 100, 25, 40, 5]

/**
 *sort():
Ordena los elementos del arreglo. Por defecto, ordena como cadenas de texto. 
 */
let arregloNumerico = [40, 10, 100, 25, 5];
arregloNumerico.sort(function (a, b) {
  return a - b; // Ordena de menor a mayor
});
console.log(arregloNumerico); // [5, 10, 25, 40, 100]
