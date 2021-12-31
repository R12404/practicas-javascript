// las clases ennjavascript deben iniciarse con mayusculas para diferenciarla y como buena practica

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Creando instancias de la clase Persona

let persona1 = new Persona('Juan', 'Perez');
console.log( persona1 );

let perssona2 = new Persona('Carlos', 'Lara');
console.log( persona2 )