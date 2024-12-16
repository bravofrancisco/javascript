document.addEventListener("DOMContentLoaded", () => {
  const manager = new ProductoManager();

  // Selección de elementos del DOM
  const formularioProducto = document.getElementById("formularioProducto");
  const tablaProductos = document.querySelector("#tablaProductos tbody");
  const btnDeshacer = document.getElementById("btnDeshacer");
  const logAcciones = document.getElementById("logAcciones");

  // Función para actualizar la tabla de productos
  function actualizarTablaProductos() {
    tablaProductos.innerHTML = "";
    manager.productos.forEach((producto) => {
      const row = tablaProductos.insertRow();
      row.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.categoria}</td>
                <td>
                    <button class="update" data-id="${producto.id}">Actualizar</button>
                    <button class="delete" data-id="${producto.id}">Eliminar</button>
                </td>
            `;
    });

    // Añadir eventos a los botones de acción (Actualizar y Eliminar)
    document.querySelectorAll(".update").forEach((button) => {
      button.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        const producto = manager.productos.get(id); // Usar id para obtener el producto
        if (producto) {
          const nuevoNombre = prompt("Nuevo nombre:", producto.nombre);
          if (!nuevoNombre || nuevoNombre.trim() === "") {
            alert("El nombre no puede estar vacío.");
            return;
          }

          const nuevoPrecio = parseFloat(
            prompt("Nuevo precio:", producto.precio)
          );
          if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
            alert("El precio no es válido.");
            return;
          }

          const nuevaCategoria = prompt("Nueva categoría:", producto.categoria);
          if (!nuevaCategoria || nuevaCategoria.trim() === "") {
            alert("La categoría no puede estar vacía.");
            return;
          }

          manager.actualizarProducto(
            id,
            nuevoNombre,
            nuevoPrecio,
            nuevaCategoria
          );
          actualizarTablaProductos();
          actualizarLogAcciones();
        } else {
          console.error("Producto no encontrado.");
        }
      });
    });

    document.querySelectorAll(".delete").forEach((button) => {
      button.addEventListener("click", (event) => {
        const id = event.target.dataset.id;
        if (!manager.productos.has(id)) {
          alert("Producto no encontrado.");
          return;
        }
        manager.eliminarProducto(id); // Usar id para eliminar el producto
        actualizarTablaProductos();
        actualizarLogAcciones();
      });
    });
  }

  // Función para actualizar el log de acciones
  function actualizarLogAcciones() {
    logAcciones.innerHTML = "";
    manager.logs.forEach((log) => {
      const li = document.createElement("li");
      li.textContent = `${log.fecha} - ${log.accion}: ${JSON.stringify(
        log.producto
      )}`;
      logAcciones.appendChild(li);
    });
  }

  // Función para manejar la creación de un producto
  document.getElementById("btnCrearProducto").addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;

    if (!nombre || nombre.trim() === "") {
      alert("El nombre del producto no puede estar vacío.");
      return;
    }

    if (isNaN(precio) || precio <= 0) {
      alert("El precio debe ser un número positivo.");
      return;
    }

    if (!categoria || categoria.trim() === "") {
      alert("La categoría no puede estar vacía.");
      return;
    }

    manager.crearProducto(nombre, precio, categoria);
    actualizarTablaProductos();
    actualizarLogAcciones();

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("categoria").value = "";
  });

  // Función para deshacer la última acción
  btnDeshacer.addEventListener("click", () => {
    if (manager.historialAcciones.length === 0) {
      alert("No hay acciones para deshacer.");
      return;
    }
    manager.deshacer();
    actualizarTablaProductos();
    actualizarLogAcciones();
  });

  // Cargar productos si existen en el almacenamiento local
  try {
    manager.cargarProductos();
  } catch (error) {
    console.error("Error al cargar los productos:", error);
  }
  actualizarTablaProductos();
  actualizarLogAcciones();
});
