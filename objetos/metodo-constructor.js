// Funcion constructor de objetos de tipo persona 
// Creador de objetos de tipo persona 
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

// Agregando más propiedades al constructor
Persona.prototype.telefono = "44332211"

// Utilizacion del contructor de objetos de tipo persona 
let padre = new Persona('Juan', 'Perez', 'Jperez@mail.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Monica', 'Lara', 'mlara@mail.com');
console.log(madre);
console.log(madre.nombreCompleto());
console.log(madre.telefono);

// cambiando valores de las propiedades de un objeto 
padre.nombre = "Carlos";
console.log(padre['nombre']);

