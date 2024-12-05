/**
 * let persona = {
  clave1: valor1,
  clave2: valor2,
  // ...
};

 */
let persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log("¡Hola, " + this.nombre + "!");
  },
};

persona.saludar();

console.log(persona.nombre); // "Juan"
console.log(persona["edad"]); // 30

//modificar las propiedades de un objeto
persona.edad = 31;
console.log(persona.edad);

persona["ocupacion"] = "ingeniero en javascript";
console.log(persona["ocupacion"]);

//Agregar nuevas propiedades a un objeto
persona.direccion = "Madrid";
console.log(persona.direccion);

//Eliminar una propiedad de un objeto
delete persona.direccion;
console.log(persona.direccion);

//Objetos con metodos
persona.saludar();

//Objetos anidados

let person = {
  nombre: "FB",
  direccion: {
    calle: "Mario",
    ciudad: "Chile",
  },
};
console.log(person.direccion.calle);

//iterando sobre un objetos
let person2 = {
  nombre: "FB",
};
for (let clave in person2) {
  console.log(clave + " : " + person2[clave]);
}

/**
 * 12. Métodos importantes para trabajar con objetos
JavaScript proporciona algunos métodos útiles para trabajar con objetos:

Object.keys(obj): Devuelve un array con las claves (propiedades) de un objeto.
Object.values(obj): Devuelve un array con los valores de las propiedades de un objeto.
Object.entries(obj): Devuelve un array de arrays, donde cada sub-array contiene un par clave-valor.
 */
let persona3 = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "desarrollador"
  };
  
  console.log(Object.keys(persona3));    // ["nombre", "edad", "ocupacion"]
  console.log(Object.values(persona3));  // ["Juan", 30, "desarrollador"]
  console.log(Object.entries(persona3)); // [["nombre", "Juan"], ["edad", 30], ["ocupacion", "desarrollador"]]