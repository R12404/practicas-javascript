// Creación de metodos get y set 
// No es posible crear objetos antes de declarar la clase 
// No se aplica el concepto de hoisting 
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan','Perez');
console.log(persona1.nombre);

persona1.nombre = 'Ricardo';
console.log(persona1.nombre);