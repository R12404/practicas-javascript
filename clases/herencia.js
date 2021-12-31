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
}

// De esta manera aplicamos el concepto de herencia 
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

// Creando objeto de la clase hija (clase empleado)

let empleado1 = new Empleado("Pedro", "Roncallo", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);


// Definiendo un metodo en la clase padre para heredarlo en la clase hija 
console.log(empleado1.nombreCompleto());