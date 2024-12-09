/**
 * Ejemplo 1: Procesar una cola de impresora
Problema: Tienes una cola de documentos que deben ser impresos. Cada documento que llega a la cola se agrega al final, pero el primero en la cola es el primero en ser impreso. Usa el método shift() para procesar el primer documento de la cola.
 */
function procesarDocumento(colaDocumentos) {
  const documentoProcesado = colaDocumentos.shift();
  console.log(`Documento "${documentoProcesado}" ha sido impreso.`);
  return colaDocumentos;
}
let colaDocumentos = ["Factura 1", "Informe2", "Carta 3"];
console.log(procesarDocumento(colaDocumentos));

/**
 * Ejemplo 2: Eliminar la primera tarea de un proyecto
Problema: Tienes una lista de tareas pendientes para un proyecto. Cada vez que completas una tarea, se elimina de la lista. Usa shift() para eliminar la primera tarea de la lista al completarla.
 */
// Función que elimina la primera tarea completada
function completarTarea(tareas) {
  tareas.shift(); // Elimina la primera tarea
  return tareas;
}

// Ejemplo de uso
let tareas = [
  "Diseñar la interfaz",
  "Codificar el backend",
  "Realizar pruebas",
];
console.log(completarTarea(tareas)); // ['Codificar el backend', 'Realizar pruebas']


/**
 * Ejemplo 3: Manejo de una cola de atención en un centro de llamadas
Problema: En un centro de atención telefónica, los clientes llegan a la cola para ser atendidos. Cuando un cliente es atendido, se elimina de la cola. Usa el método shift() para atender al primer cliente de la cola
 */
// Función que atiende al primer cliente en la cola
function atenderCliente(colaClientes) {
    const clienteAtendido = colaClientes.shift();  // Elimina al primer cliente
    console.log(`Cliente ${clienteAtendido} ha sido atendido.`);
    return colaClientes;
}

// Ejemplo de uso
let colaClientes = ['Juan', 'Pedro', 'Ana'];
console.log(atenderCliente(colaClientes));  // 'Cliente Juan ha sido atendido.'


/**
 * // Función que elimina el primer artículo comprado
function comprarArticulo(listaCompras) {
    listaCompras.shift();  // Elimina el primer artículo
    return listaCompras;
}

// Ejemplo de uso
let listaCompras = ['Leche', 'Pan', 'Huevos', 'Fruta'];
console.log(comprarArticulo(listaCompras));
 */

/**
 * Ejemplo 5: Eliminar el primer comentario de una lista de comentarios
Problema: Tienes una lista de comentarios de usuarios en una página web. Cuando un moderador revisa un comentario, se elimina de la lista. Usa shift() para eliminar el primer comentario de la lista.
 */
// Función que elimina el primer comentario
function eliminarComentario(comentarios) {
    comentarios.shift();  // Elimina el primer comentario
    return comentarios;
}

// Ejemplo de uso
let comentarios = ['Buen trabajo', 'Muy útil', 'No me gusta'];
console.log(eliminarComentario(comentarios));  // ['Muy útil', 'No me gusta']
