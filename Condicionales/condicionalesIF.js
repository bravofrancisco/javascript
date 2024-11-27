/**
 * Sintaxis if
 */
let isStudent = true;
if (isStudent) {
  console.log(" es estudiante existe");

  // Bloque de código a ejecutar si la condición es verdadera
}
/**
 * if...else
Aquí, si la condición del if es falsa, se ejecutará el bloque de código dentro de else.
 */
if (condición) {
  // Bloque de código si la condición es verdadera
} else {
  // Bloque de código si la condición es falsa
}

/**
 * if...else if...else
Este tipo de if se utiliza cuando hay más de dos condiciones a evaluar. Puedes agregar varios bloques else if para evaluar distintas condiciones antes de llegar al bloque else.
 */
if (condición1) {
  // Bloque de código si condición1 es verdadera
} else if (condición2) {
  // Bloque de código si condición2 es verdadera
} else {
  // Bloque de código si ninguna de las condiciones anteriores es verdadera
}

/**
 * Condiciones compuestas con && (AND) y || (OR)
&& (AND): La condición será verdadera solo si todas las condiciones son verdaderas.
 */
if (condición1 && condición2) {
  // Bloque de código si ambas condiciones son verdaderas
}

/**
 * || (OR): La condición será verdadera si al menos una de las condiciones es verdadera.
 */
if (condición1 || condición2) {
  // Bloque de código si al menos una condición es verdadera
}

/**
 * f con múltiples condiciones usando if anidados
Este tipo de if permite evaluar condiciones dentro de otro if. Es útil cuando necesitas evaluar más de una condición de forma jerárquica.
 */
if (condición1) {
    if (condición2) {
        // Bloque de código si ambas condiciones son verdaderas
    }
}

/**
 * if con negación usando ! (NOT)
Puedes usar el operador ! para negar una condición, lo que invierte su valor lógico.
 */
if (!condición) {
    // Bloque de código si la condición es falsa
}