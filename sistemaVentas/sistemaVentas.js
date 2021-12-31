// Creando la clase Producto

class Producto {
    static contadorProductos = 0;

    constructor(nombreProducto, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombreProducto = nombreProducto;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombreProducto(){
        return this._nombreProducto
    }

    set nombreProducto( nombreProducto ){
        this._nombreProducto = nombreProducto;
    }

    get precio(){
        return this._precio;
    }

    set precio( precio ){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto},
            nombre: ${this._nombreProducto},
            precio: $${this._precio}`;
    }
}


class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        // this._contadorProductoAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProductos(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); //El metodo push nos permite agregar elementos a un arreglo
            // this._productos[this._contadorProductoAgregados++] = producto; //Esta es otra forma de agregar elementos a un arreglo
        }
        else{
            console.log('No se pueden agregar más productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){//De esta manera iteramos cada uno de los elementos de un arreglo
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += `
            ` + 
            producto.toString() + `
            `;
        }

        console.log(`Orden: ${this._idOrden} 
        total: $${this.calcularTotal()},
        productos: ${productosOrden}`);
    }

}

let producto1 = new Producto('Pantalon', 100);
let producto2 = new Producto('Camisa', 100);
let producto3 = new Producto('Falda', 100);
let producto4 = new Producto('Silla', 100);
let producto5 = new Producto('Cadena', 100);
let producto6 = new Producto('Paragua', 100);
console.log(producto1.toString());

let orden1 = new Orden();

orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.agregarProductos(producto3);
orden1.agregarProductos(producto4);
orden1.agregarProductos(producto5);

orden1.mostrarOrden();

orden1.agregarProductos(producto6);
