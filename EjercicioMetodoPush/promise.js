/***
 * sintaxisis de una promesa
 *
 */
let miPromesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) {
    resolve("operacion de exito");
  } else {
    reject("hubo un error");
  }
});
miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("**Ejercicio de practica**");

let miPromesa2 = new Promise((resolve, reject) => {
  let exito2 = false; // Aquí puedes cambiar a false para probar el rechazo.

  setTimeout(() => {
    if (exito2) {
      resolve("Tarea completada exitosamente.");
    } else {
      reject("Hubo algún error en la aplicación.");
    }
  }, 2000);
});

miPromesa2
  .then((resultado) => {
    console.log(resultado); // Si la promesa se resuelve
  })
  .catch((error) => {
    console.error(error); // Si la promesa se rechaza
  });

console.log("***Segundo ejercicio***");
let estadoPeticion = true;
let miPromesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estadoPeticion) {
      resolve("Petición exitosa"); // Si la petición es exitosa, se resuelve.
    } else {
      reject("Petición fallida"); // Si la petición falla, se rechaza.
    }
  }, 2000);
})
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("+++++++ejercicio 3++++++");
// Simulamos la lectura de un archivo
let leerArchivo = new Promise((resolve, reject) => {
  let exito = true; // Cambia a false para simular un error en la lectura del archivo

  setTimeout(() => {
    if (exito) {
      resolve("Contenido del archivo leído con éxito."); // Simula contenido leído
    } else {
      reject("Error al leer el archivo.");
    }
  }, 2000); // Simulamos una demora en la lectura del archivo
});

// Promesa para procesar el contenido del archivo
let procesarContenido = (contenido) => {
  return new Promise((resolve, reject) => {
    let exitoProcesado = true; // Cambia a false para simular un error en el procesamiento

    setTimeout(() => {
      if (exitoProcesado) {
        resolve(contenido.toUpperCase()); // Simula un procesamiento (convertir a mayúsculas)
      } else {
        reject("Error al procesar el contenido.");
      }
    }, 1000); // Simulamos una demora en el procesamiento
  });
};

// Cadena de promesas
leerArchivo
  .then((contenido) => {
    console.log("Archivo leído:", contenido); // Imprime el contenido del archivo
    return procesarContenido(contenido); // Llama a la promesa para procesar el contenido
  })
  .then((contenidoProcesado) => {
    console.log("Contenido procesado:", contenidoProcesado); // Imprime el contenido procesado
  })
  .catch((error) => {
    console.error(error); // Maneja cualquier error
  });
