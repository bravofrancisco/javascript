// let productos = [];

// const crearProducto = (nombre, precio) => {
//   const producto = { nombre, precio };
//   productos.push(producto);
//   console.log("Producto agregado:", producto);
// };

// const leerProductos = () => {
//   if (productos.length === 0) {
//     console.log("No hay productos para mostrar.");
//     return;
//   }
//   console.log("Lista de productos:");
//   console.table(productos); // Muestra los productos en una tabla
// };

// const actualizarProducto = (indice, nuevoNombre, nuevoPrecio) => {
//   const producto = productos[indice];
//   if (producto) {
//     producto.nombre = nuevoNombre;
//     producto.precio = nuevoPrecio;
//     console.log(
//       `Producto actualizado: ${producto.nombre} - $${producto.precio}`
//     );
//   } else {
//     console.log("Producto no encontrado.");
//   }
// };

// const eliminarProducto = (indice) => {
//   const producto = productos[indice];
//   if (producto) {
//     productos.splice(indice, 1); // Elimina el producto en la posición especificada
//     console.log("Producto eliminado:", producto);
//   } else {
//     console.log("Producto no encontrado.");
//   }
// };

// // Ejemplo de uso
// crearProducto("Laptop", 900);
// crearProducto("Smartphone", 1900);
// crearProducto("Auriculares", 90);

// leerProductos();

// actualizarProducto(0, "Laptop Gaming", 1200);

// leerProductos();

// eliminarProducto(1);

// leerProductos();

//version mejorada
// let productos = [];

// const validarPrecio = (precio) => {
//   if (isNaN(precio) || precio <= 0) {
//     console.log("El precio debe ser un número positivo.");
//     return false;
//   }
//   return true;
// };

// const crearProducto = (nombre, precio) => {
//   if (!nombre || typeof nombre !== "string") {
//     console.log("El nombre del producto no es válido.");
//     return;
//   }

//   if (!validarPrecio(precio)) return;

//   const producto = { nombre, precio };
//   productos.push(producto);
//   console.log("Producto agregado:", producto);
// };

// const leerProductos = () => {
//   if (productos.length === 0) {
//     console.log("No hay productos para mostrar.");
//     return;
//   }
//   console.log("Lista de productos:");
//   console.table(productos); // Muestra los productos en una tabla
// };

// const actualizarProducto = (nombre, nuevoNombre, nuevoPrecio) => {
//   const indice = productos.findIndex((p) => p.nombre === nombre);

//   if (indice !== -1) {
//     if (nuevoNombre) productos[indice].nombre = nuevoNombre;
//     if (nuevoPrecio && validarPrecio(nuevoPrecio))
//       productos[indice].precio = nuevoPrecio;
//     console.log(
//       `Producto actualizado: ${productos[indice].nombre} - $${productos[indice].precio}`
//     );
//   } else {
//     console.log("Producto no encontrado.");
//   }
// };

// const eliminarProducto = (nombre) => {
//   const indice = productos.findIndex((p) => p.nombre === nombre);

//   if (indice !== -1) {
//     const productoEliminado = productos.splice(indice, 1);
//     console.log("Producto eliminado:", productoEliminado[0]);
//   } else {
//     console.log("Producto no encontrado.");
//   }
// };

// // Ejemplo de uso
// crearProducto("Laptop", 900);
// crearProducto("Smartphone", 1900);
// crearProducto("Auriculares", 90);

// leerProductos();

// actualizarProducto("Laptop", "Laptop Gaming", 1200);

// leerProductos();

// eliminarProducto("Smartphone");

// leerProductos();

//segunda version
// class ProductoManager {
//   constructor() {
//     this.productos = [];
//   }

//   // Validación del precio
//   validarPrecio(precio) {
//     if (isNaN(precio) || precio <= 0) {
//       console.log("El precio debe ser un número positivo.");
//       return false;
//     }
//     return true;
//   }

//   // Crear un producto
//   crearProducto(nombre, precio) {
//     if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
//       console.log("El nombre del producto no es válido.");
//       return;
//     }

//     if (!this.validarPrecio(precio)) return;

//     const producto = { nombre, precio };
//     this.productos.push(producto);
//     console.log("Producto agregado:", producto);
//   }

//   // Leer todos los productos
//   leerProductos() {
//     if (this.productos.length === 0) {
//       console.log("No hay productos para mostrar.");
//       return;
//     }
//     console.log("Lista de productos:");
//     console.table(this.productos); // Muestra los productos en una tabla
//   }

//   // Actualizar un producto
//   actualizarProducto(nombre, nuevoNombre, nuevoPrecio) {
//     const producto = this.productos.find((p) => p.nombre === nombre);

//     if (producto) {
//       if (nuevoNombre && nuevoNombre.trim() !== "")
//         producto.nombre = nuevoNombre;
//       if (nuevoPrecio && this.validarPrecio(nuevoPrecio))
//         producto.precio = nuevoPrecio;

//       console.log(
//         `Producto actualizado: ${producto.nombre} - $${producto.precio}`
//       );
//     } else {
//       console.log("Producto no encontrado.");
//     }
//   }

//   // Eliminar un producto
//   eliminarProducto(nombre) {
//     const indice = this.productos.findIndex((p) => p.nombre === nombre);

//     if (indice !== -1) {
//       const productoEliminado = this.productos.splice(indice, 1);
//       console.log("Producto eliminado:", productoEliminado[0]);
//     } else {
//       console.log("Producto no encontrado.");
//     }
//   }
// }

// // Ejemplo de uso
// const manager = new ProductoManager();

// manager.crearProducto("Laptop", 900);
// manager.crearProducto("Smartphone", 1900);
// manager.crearProducto("Auriculares", 90);

// manager.leerProductos();

// manager.actualizarProducto("Laptop", "Laptop Gaming", 1200);

// manager.leerProductos();

// manager.eliminarProducto("Smartphone");

// manager.leerProductos();

// tercera version
// class ProductoManager {
//     constructor() {
//       this.productos = [];
//     }

//     // Validación del precio
//     validarPrecio(precio) {
//       if (isNaN(precio) || precio <= 0) {
//         throw new Error("El precio debe ser un número positivo.");
//       }
//     }

//     // Validar que el nombre del producto sea único
//     validarNombreUnico(nombre) {
//       if (this.productos.some((producto) => producto.nombre === nombre)) {
//         throw new Error(`El producto con el nombre "${nombre}" ya existe.`);
//       }
//     }

//     // Crear un producto
//     crearProducto(nombre, precio) {
//       try {
//         if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
//           throw new Error("El nombre del producto no es válido.");
//         }

//         this.validarNombreUnico(nombre);
//         this.validarPrecio(precio);

//         const producto = { nombre, precio };
//         this.productos.push(producto);
//         console.log("Producto agregado:", producto);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }

//     // Leer todos los productos
//     leerProductos() {
//       try {
//         if (this.productos.length === 0) {
//           throw new Error("No hay productos para mostrar.");
//         }
//         console.log("Lista de productos:");
//         console.table(this.productos);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }

//     // Actualizar un producto
//     actualizarProducto(nombre, nuevoNombre, nuevoPrecio) {
//       try {
//         const producto = this.productos.find(p => p.nombre === nombre);

//         if (!producto) {
//           throw new Error("Producto no encontrado.");
//         }

//         if (nuevoNombre && nuevoNombre.trim() !== "") {
//           this.validarNombreUnico(nuevoNombre);
//           producto.nombre = nuevoNombre;
//         }

//         if (nuevoPrecio) this.validarPrecio(nuevoPrecio);
//         if (nuevoPrecio) producto.precio = nuevoPrecio;

//         console.log(`Producto actualizado: ${producto.nombre} - $${producto.precio}`);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }

//     // Eliminar un producto
//     eliminarProducto(nombre) {
//       try {
//         const indice = this.productos.findIndex(p => p.nombre === nombre);

//         if (indice === -1) {
//           throw new Error("Producto no encontrado.");
//         }

//         const productoEliminado = this.productos.splice(indice, 1);
//         console.log("Producto eliminado:", productoEliminado[0]);
//       } catch (error) {
//         console.error(error.message);
//       }
//     }

//     // Guardar los productos en el almacenamiento local (persistencia)
//     guardarProductos() {
//       try {
//         localStorage.setItem("productos", JSON.stringify(this.productos));
//         console.log("Productos guardados en almacenamiento local.");
//       } catch (error) {
//         console.error("Error al guardar productos:", error);
//       }
//     }

//     // Cargar los productos desde el almacenamiento local
//     cargarProductos() {
//       try {
//         const productosGuardados = localStorage.getItem("productos");
//         if (productosGuardados) {
//           this.productos = JSON.parse(productosGuardados);
//           console.log("Productos cargados desde almacenamiento local.");
//         }
//       } catch (error) {
//         console.error("Error al cargar productos:", error);
//       }
//     }
//   }

//   // Ejemplo de uso
//   const manager = new ProductoManager();

//   manager.crearProducto("Laptop", 900);
//   manager.crearProducto("Smartphone", 1900);
//   manager.crearProducto("Auriculares", 90);

//   manager.leerProductos();

//   manager.actualizarProducto("Laptop", "Laptop Gaming", 1200);

//   manager.leerProductos();

//   manager.eliminarProducto("Smartphone");

//   manager.leerProductos();

// Guardar y cargar productos desde almacenamiento local
//manager.guardarProductos();
//manager.cargarProductos();

//4 version mejorado
class ProductoManager {
  constructor() {
    this.productos = new Map(); // Usar Map para optimizar búsquedas y eliminaciones
    this.logs = []; // Para auditar acciones
    this.historialAcciones = []; // Pila para deshacer acciones
  }

  // Generar un UUID para identificar productos de manera única
  generarUUID() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }

  // Log de auditoría
  logAccion(accion, producto) {
    const fecha = new Date().toISOString();
    this.logs.push({ fecha, accion, producto });
    console.log(`[LOG] ${fecha} - ${accion}:`, producto);
  }

  // Validar el precio: debe ser un número positivo
  validarPrecio(precio) {
    if (isNaN(precio) || precio <= 0) {
      throw new Error("El precio debe ser un número positivo.");
    }
  }

  // Validar el nombre: debe ser un string no vacío y no tener caracteres especiales
  validarNombre(nombre) {
    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
      throw new Error("El nombre del producto no es válido.");
    }
    const regex = /^[a-zA-Z0-9\s]+$/; // Acepta solo letras, números y espacios
    if (!regex.test(nombre)) {
      throw new Error(
        "El nombre del producto contiene caracteres no permitidos."
      );
    }
  }

  // Validar que el nombre del producto sea único
  validarNombreUnico(nombre) {
    if (this.productos.has(nombre)) {
      throw new Error(`El producto con el nombre "${nombre}" ya existe.`);
    }
  }

  // Crear un producto
  crearProducto(nombre, precio, categoria) {
    try {
      this.validarNombre(nombre);
      this.validarNombreUnico(nombre);
      this.validarPrecio(precio);

      const id = this.generarUUID(); // Generar un ID único
      const producto = { id, nombre, precio, categoria };
      this.productos.set(id, producto); // Usar el ID como clave en lugar del nombre

      // Registrar la acción en el log
      this.logAccion("Producto creado", producto);

      // Guardar el estado actual para deshacerlo
      this.historialAcciones.push({ accion: "crear", producto });
    } catch (error) {
      console.error(error.message);
    }
  }

  // Leer todos los productos
  leerProductos() {
    try {
      if (this.productos.size === 0) {
        throw new Error("No hay productos para mostrar.");
      }
      console.log("Lista de productos:");
      console.table(Array.from(this.productos.values())); // Muestra todos los productos en forma de tabla
    } catch (error) {
      console.error(error.message);
    }
  }

  // Actualizar un producto
  actualizarProducto(id, nuevoNombre, nuevoPrecio, nuevaCategoria) {
    try {
      // Verificar si el producto con el id existe
      const producto = this.productos.get(id);

      if (!producto) {
        // Si el producto no existe, lanzamos un error
        throw new Error("Producto no encontrado.");
      }

      const productoAnterior = { ...producto }; // Copia del estado anterior para deshacer

      // Si se proporciona un nuevo nombre y es diferente, actualizar
      if (nuevoNombre && nuevoNombre !== producto.nombre) {
        this.validarNombreUnico(nuevoNombre); // Validamos que el nuevo nombre sea único
        producto.nombre = nuevoNombre; // Actualizamos el nombre
      }

      // Si se proporciona un nuevo precio, actualizar
      if (nuevoPrecio) {
        this.validarPrecio(nuevoPrecio); // Validamos el nuevo precio
        producto.precio = nuevoPrecio; // Actualizamos el precio
      }

      // Si se proporciona una nueva categoría, actualizar
      if (nuevaCategoria) {
        producto.categoria = nuevaCategoria; // Actualizamos la categoría
      }

      // Registrar la acción en el log
      this.logAccion("Producto actualizado", producto);

      // Guardar el estado anterior para deshacerlo
      this.historialAcciones.push({
        accion: "actualizar",
        productoAnterior,
        producto,
      });
    } catch (error) {
      console.error(error.message); // Mostrar el error si hay algún problema
    }
  }

  eliminarProducto(id) {
    try {
      const producto = this.productos.get(id); // Buscar por ID en lugar de nombre
      if (!producto) {
        throw new Error("Producto no encontrado.");
      }

      // Eliminar el producto del Map usando el ID
      this.productos.delete(id);

      // Registrar la acción en el log
      this.logAccion("Producto eliminado", producto);

      // Guardar el estado anterior para deshacerlo
      this.historialAcciones.push({ accion: "eliminar", producto });
    } catch (error) {
      console.error(error.message);
    }
  }

  // Deshacer la última acción
  deshacer() {
    if (this.historialAcciones.length === 0) {
      console.log("No hay acciones para deshacer.");
      return;
    }

    const ultimaAccion = this.historialAcciones.pop();
    switch (ultimaAccion.accion) {
      case "crear":
        this.productos.delete(ultimaAccion.producto.id); // Usar ID para eliminar
        console.log(
          "Se deshizo la creación del producto:",
          ultimaAccion.producto
        );
        break;
      case "actualizar":
        const producto = ultimaAccion.producto;
        this.productos.set(producto.id, ultimaAccion.productoAnterior); // Restaurar estado anterior
        console.log("Se deshizo la actualización del producto:", producto);
        break;
      case "eliminar":
        this.productos.set(ultimaAccion.producto.id, ultimaAccion.producto); // Restaurar el producto eliminado
        console.log(
          "Se deshizo la eliminación del producto:",
          ultimaAccion.producto
        );
        break;
      default:
        console.log("Acción desconocida para deshacer.");
    }
  }

  // Guardar los productos en el almacenamiento local (persistencia)
  guardarProductos() {
    try {
      localStorage.setItem(
        "productos",
        JSON.stringify(Array.from(this.productos.values()))
      );
      console.log("Productos guardados en almacenamiento local.");
    } catch (error) {
      console.error("Error al guardar productos:", error);
    }
  }

  // Cargar los productos desde el almacenamiento local
  cargarProductos() {
    try {
      const productosGuardados = localStorage.getItem("productos");
      if (productosGuardados) {
        const productosArray = JSON.parse(productosGuardados);
        this.productos = new Map(productosArray.map((p) => [p.id, p])); // Usar ID como clave
        console.log("Productos cargados desde almacenamiento local.");
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  }
}

// Ejemplo de uso
const manager = new ProductoManager();

// Crear productos
manager.crearProducto("Laptop", 900, "Electrónica");
manager.crearProducto("Smartphone", 1900, "Electrónica");
manager.crearProducto("Auriculares", 90, "Accesorios");

// Leer productos
manager.leerProductos();

// Recuperar el producto "Laptop" para obtener su id
const laptop = Array.from(manager.productos.values()).find(
  (p) => p.nombre === "Laptop"
);

// Verificar que se ha encontrado el producto y su id
if (laptop) {
  console.log("Producto encontrado:", laptop); // Esto ayuda a verificar que el producto existe

  // Actualizar el producto "Laptop" a "Laptop Gaming"
  manager.actualizarProducto(laptop.id, "Laptop Gaming", 1200, "Electrónica");
} else {
  console.log("Producto 'Laptop' no encontrado.");
}

// Leer productos después de la actualización
manager.leerProductos();

// Eliminar un producto
manager.eliminarProducto("Smartphone");

// Leer productos después de la eliminación
manager.leerProductos();

// Deshacer acciones
manager.deshacer(); // Deshace eliminación
manager.deshacer(); // Deshace actualización

// Leer productos después de deshacer
manager.leerProductos();
