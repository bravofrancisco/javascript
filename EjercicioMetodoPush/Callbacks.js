function saludar(nombre) {
  console.log("Hola" + nombre);
}
function procesarNombre(callback) {
  let nombre = "juan";
  callback(nombre);
}
console.log(saludar);

function mostrarMensaje() {
  console.log("Hola despues de 2 segundo");
}
setTimeout(mostrarMensaje, 2000);

function greeting(callback){
    let name ='francisco';
    callback(name)
}

