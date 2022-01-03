class Ingreso extends Dato {
    static ingresoId = 0;

    constructor(description, value){
        super(description, value);
        this._id = ++Ingreso.ingresoId;
    }

    get id(){
        return this._id;
    }
}