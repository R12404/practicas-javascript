// Creando la clase Persona
class Persona {
    static contadorPersonas = 0;

    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad( edad ){
        this._edad = edad;
    }

    toString(){
        return `${this._nombre} ${this._apellido}`;
    }
}

// Creando la clase hija de Persona llamada Empleado
class Empleado extends Persona {
    constructor ( nombre, apellido, edad, sueldo ){
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    }

    get idempleado(){
        return super.idPersona();
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo( sueldo ){
        this._sueldo = sueldo;
    }

    toString(){
        return 'El empleado: ' + super.toString() + ', tiene un sueldo de: ' + this._sueldo;
    }
}

// Creando clase hija de Persona llamada Cliente
class Cliente extends Persona {
    constructor(nombre, apellido, edad, fechaRegistro ){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return super.idPersona();
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    toString(){
        return 'El cliente: ' + super.toString() + ', se registro el día: ' + this._fechaRegistro;
    }
}


// Prueba clase Persona 

let persona1 = new Persona('Ricardo', 'Morales', 20);
console.log(persona1);

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log(persona2);

let empleado1 = new Empleado('Juan', 'Perez', 23, 3000);
console.log(empleado1);

let empleado2 = new Empleado('Keiner', 'Leal', 45, 4500);
console.log(empleado2);
console.log(empleado2.toString());

let cliente1 = new Cliente('Keiner', 'Leal', 45, new Date());
console.log(cliente1);
console.log(cliente1.toString());

let cliente2 = new Cliente('Mayra', 'Escalona', 45, new Date());
console.log(cliente2);
console.log(cliente2.toString());






