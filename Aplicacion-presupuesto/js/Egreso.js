class Egreso extends Dato {
    static egresoId = 0;

    constructor(description, value){
        super(description, value);
        this._id = ++Egreso.egresoId;
    }

    get id(){
        return this._id;
    }
}