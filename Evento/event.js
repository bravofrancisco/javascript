function saludar() {
  alert("Hola");
}

const boton = document.getElementById("miBoton");
//usamos addeventListener para manejar el evento click
boton.addEventListener("keydown", function () {
  alert("Teclado presinado" + event.key);
});

const lista = document.getElementById("lista");
lista = addEventListener("lista");
if (event.target.tagName === "LI") {
  alert("Hiciste clic en: " + event.target.textContent);
}
