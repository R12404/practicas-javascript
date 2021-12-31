// Agregando más propiedades o atributos a nuestros objetos 
let persona = {
    nombre: "Ricardo",
    direccion: "Enrrique Segobiano"
}

// Agregar propiedades en javascript ess muy sencillo 
// Se hace de la siguiente manera

// Primero se llama al objeto, despues se pone un punto y se da el nombre de la nueva propiedad o atributo  y por ultimo se le agrega el valor 
persona.telefono = '12213313';

// Verificación 
console.log(persona);

// Eliminar una propiedad ya existente 

delete persona.telefono;

console.log( persona );