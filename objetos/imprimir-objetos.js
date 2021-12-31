// Formas de mandar a imprimir nuestros objetos 

let persona = {
    nombre: "Ricardo",
    apellido: "Morales"
}

// Forma 1

console.log(persona); //Forma más común (no funciona si necesitamos verla en un navegador)

// Forma 2
// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

// Forma 3
// Iterar cada una de las propiedades utilizando for in

for( let propiedades in persona){
    console.log(persona[propiedades])
}

// Forma 4
// Values es un objeto que nos regresa nuestro objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray)

// Forma 5
// EL metodo JSON.stringify nos combierte nuestro abjeto a una cadena 
let personaString = JSON.stringify( persona );
console.log(personaString);