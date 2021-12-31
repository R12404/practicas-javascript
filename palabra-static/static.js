// Static es utilizada para realizar metodos que se asocien a una clase exclusivamente, es decir, no se asociarà con los objetos de esta clase 
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

    get apellido(){
        return this._apellido
    }

    set apellido( apellido ){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde metodo static");
    }

    static saludar2(persona){
        console.log(persona.nombre)
    }
}

class Empleado extends Persona{ //A través de la palabra extends ya estamos heredando las propiedades de la clase padre
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //Llamando al constructor de la clase padre, para ello tambien debemos proporcionar las propiedades de clase padre como parametros de la clase hija
        this._departamento = departamento;
    }

    get departamento(){
        return this._nombre;
    }

    set departamento( departamento ){
        this._departamento = departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');

let empleado1 = new Empleado("Pedro", "Roncallo", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);  

// persona1.saludar(); //No es posible llamar un metodo static desde un objeto

Persona.saludar();
Persona.saludar2(persona1); //Un metodo static puede recibir parametros   