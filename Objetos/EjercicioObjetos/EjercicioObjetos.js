//Ejercicio simples
let animales = {
  nombre: "ramona",
  apellido: "rona",
};
console.log(animales.nombre);
console.log(animales["apellido"]);

animales.nombre = "ramoncita";
console.log(animales.nombre);

//agregar una propiedad
animales.caracteristica = "gatito";
console.log(animales.caracteristica);

console.log(animales);

//eliminar propiedades
delete animales.caracteristica;
console.log(animales);

/**Ejemplo mas completos */
console.log("Ejercicios completos");
/**
 * Imaginemos que estamos creando un objeto que representa a un libro. Este objeto tendrá propiedades como el título, autor, año de publicación y un método para mostrar la información del libro.
 */
let libro = {
  titulo: "programacion",
  autor: "francisco",
  año: 2024,
  mostrar() {
    console.log("el Titulo" + " : " + this.titulo);
    console.log("el autor" + " : " + this.autor);
    console.log("el año" + " :" + this.año);
  },
};
//Accediendo a las propiedades
console.log(libro.titulo);

//llamado al metodo
libro.mostrar();

/**
 * 2. Ejemplo de un objeto con propiedades anidadas
Ahora vamos a hacer un objeto más complejo, como una persona, que tiene una propiedad anidada dirección (un objeto dentro de otro objeto). Además, vamos a agregar un método para mostrar la dirección completa.
 */
let person4 = {
  nombre: "Ana",
  edad: 28,
  direccion: {
    calle: "Avenida Principal 123",
    ciudad: "Barcelona",
    pais: "España",
  },
  mostrarDireccion() {
    console.log(
      `${this.direccion.calle}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    );
  },
};

//Accediendo a las propiedades
console.log(person4.direccion.ciudad);

//Llamado al metodo
person4.mostrarDireccion();

/**
 * 3. Ejemplo de agregar y eliminar propiedades dinámicamente
En este caso, vamos a crear un objeto que represente un producto. Luego, agregaremos nuevas propiedades y eliminaremos algunas.
 */

let producto = {
  nombre: "Laptop",
  precio: 1200,
  stock: 25,
};

producto.color = "red";
producto.marca = "Samsung";

//accediendo a las propiedades
console.log("**aÑADIR PROPIEDADES*");

console.log(producto.color);
console.log(producto.marca);

//Eliminar una propiedad
console.log("*Eliminar propiedades*");

delete producto.color;
console.log(producto.color);

/**
 * 4. Ejemplo de iterar sobre las propiedades de un objeto
Supongamos que tenemos un objeto que representa una película con varias propiedades. Queremos iterar sobre todas sus propiedades y mostrarlas.

 */

let pelicula = {
  titulo: "Inception",
  director: "Christopher Nolan",
  año: 2010,
  genero: "Ciencia Ficción",
};

//iterar propiedades usando for
for (let i in pelicula) {
  console.log(`${i}: ${pelicula[i]}`);
}

/**
 * 6. Ejemplo con objetos y funciones
A continuación, se muestra un ejemplo donde un objeto tiene propiedades y métodos que realizan tareas más complejas, como calcular el IMC (índice de masa corporal) de una persona.
 */
let persona5 = {
  nombre: "Carlos",
  peso: 80, // en kg
  altura: 1.75, // en metros

  // Método para calcular el IMC
  calcularIMC() {
    let imc = this.peso / (this.altura * this.altura);
    console.log(`El IMC de ${this.nombre} es ${imc.toFixed(2)}`);
  },
};
//llamada al metodo
persona5.calcularIMC();
