// script.js

document.getElementById("imcForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Validaciones simples del lado del cliente
    if (!nombre || !edad || !sexo || !peso || !altura) {
        showMessage("Por favor, completa todos los campos.", "error");
        return;
    }

    // Enviar los datos al backend
    try {
        const response = await fetch("http://localhost:3000/api/personas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                edad,
                sexo,
                peso,
                altura,
            }),
        });

        if (!response.ok) {
            throw new Error("Error al calcular el IMC");
        }

        const data = await response.json();
        const imc = data.imc.toFixed(2);  // Redondeamos el IMC a dos decimales

        showMessage(`IMC Calculado: ${imc}`, "success");
    } catch (error) {
        showMessage(error.message, "error");
    }
});

// Función para mostrar mensajes en la interfaz
function showMessage(message, type) {
    const mensajeElement = document.getElementById("mensaje");
    const resultadoElement = document.getElementById("resultado");
    const imcElement = document.getElementById("imc");

    if (type === "error") {
        mensajeElement.style.color = "red";
    } else {
        mensajeElement.style.color = "green";
    }

    mensajeElement.textContent = message;
    imcElement.textContent = "";
    resultadoElement.style.display = "block";
}
