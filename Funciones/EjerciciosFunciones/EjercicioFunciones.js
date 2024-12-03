//1.Ejercicio básico (Saludo)
function Saludo(name) {
  console.log("Hola," + name);
}
Saludo("Francisco Manuel Bravo Becerra");

//2.-Ejercicio de parámetro por defecto
function bienvenida(name2 = "invitado") {
  console.log("Hola," + name2);
}
bienvenida();
bienvenida("Juana");

//3.-Ejercicio de suma
function sumar(n1, n2) {
  return n1 + n2;
}
console.log(sumar(2, 2));

//4. Ejercicio de multiplicación
function EsPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const result = EsPar(2);
console.log(result);

//5.-Ejercicio de inversión de cadena
function invertirCadena(cadena) {
  let separarCadena = cadena.split("");
  let invertirCadenas = separarCadena.reverse();
  let unir = invertirCadenas.join("");
  return unir;
}
console.log(invertirCadena("Juanito"));

/**
 * 8. Ejercicio de mayor número
Crea una función llamada mayorNumero que reciba tres números como parámetros y devuelva el mayor de esos tres números.
 */
function MayorNumbers(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    // Corrected comparison
    console.log("El numero mayor es " + n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log("El numero mayor es " + n2);
  } else if (n3 > n2 && n3 > n1) {
    console.log("El numero mayor es " + n3);
  } else {
    console.log("Los números son iguales");
  }
}

MayorNumbers(1, 22, 3); // Call the function without storing it in a variable

/**
 * 9. Ejercicio de método en objeto
Crea un objeto persona con las propiedades nombre y edad, y un método saludar que imprima un mensaje en consola como: "¡Hola! Mi nombre es [nombre] y tengo [edad] años." Llama al método del objeto.
 */
const persona = {
  nombre: "francisco",
  edad: 32,
};
function MetodoSaludar() {
  console.log(
    "Hola mi nombres es",
    persona.nombre + " " + "y tengo" + " " + persona.edad
  );
}
MetodoSaludar();

/** Ejercicio de suma de números en un arreglo
Crea una función llamada sumarArreglo que reciba un arreglo de números como parámetro y devuelva la suma de todos los números en el arreglo.
 * 
 */

function SumarArreglo(array) {
  let sumar2 = 0;
  for (let i = 0; i < array.length; i++) {
    sumar2 += array[i];
  }
  return sumar2;
}
const resu = [1, 2, 3, 4, 5];
console.log(SumarArreglo(resu));

/**
 * 2. Ejercicio de encontrar el promedio
Crea una función llamada promedio que reciba un arreglo de números y devuelva el promedio de los números en el arreglo. Si el arreglo está vacío, la función debe devolver null.
 */
function promedio(array2) {
  let sumar = 0;
  for (let i = 0; i < array2.length; i++) {
    sumar += array2[i];
  }
  let promedio = sumar / array2.length;
  return promedio;
}
const resultadoArray = [1, 2, 3, 4, 5];
console.log(promedio(resultadoArray));

/**
 * 6. Ejercicio de cuenta atrás
Crea una función llamada cuentaAtras que reciba un número n y haga una cuenta regresiva hasta llegar a 0, imprimiendo cada número en consola. Utiliza recursión para resolver este ejercicio.
 */
function cuentaAtras(n){

}
const cuenta = cuentaAtras(5);
console.log(cuenta);
// 