// console.log('Hola si estoy funcionando')

const ingresos = [
    new Ingreso('Salario', 2000),
    new Ingreso('Venta coche', 3200)
];

const egresos = [
    new Egreso('Renta departamento', 1000),
    new Egreso('Ropa', 300)
];


let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

let totalIngresos = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.value;
    }

    return totalIngreso;
};

let totalEgresos = () => {
    let totalEgreso = 0;

    for(let egreso of egresos){
        totalEgreso += egreso.value;
    }

    return totalEgreso;
};
// Esta funcion tipo flecha refrescara el presupuesto disponible (principal) cada vez que se cargue la pagina 
let cargarCabecero = () => {
    let presupuestoTotal = (parseInt(totalIngresos()) - parseInt(totalEgresos()));
    let totalPorcentajeEgresos = (totalEgresos() / totalIngresos());

    document.getElementById('presupuesto').innerHTML = ` ${formatoMoneda(presupuestoTotal)}`;
    document.getElementById('porcentaje').innerHTML = `${formatoPorcentaje(totalPorcentajeEgresos)}`;
    document.getElementById('ingresos').innerHTML = `${formatoMoneda(totalIngresos())}`;
    document.getElementById('egresos').innerHTML = `${formatoMoneda(totalEgresos())}`;
};

// Aqui estamos usando el formato de moneda aplicando el concepto de internacionalizacion
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-ES', {style: 'currency', currency: 'EUR', minimumFractionDigits: 2});
}

const formatoPorcentaje = (valor) => {
   return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits: 2})
}

const cargarIngresos = () => {
    let ingresosHTML = '';

    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}


const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.description}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.value)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})" ></ion-icon>
            </button>
        </div>
    </div>
</div>`;

    return ingresoHTML;
};

const eliminarIngreso = (id) => {
    // el metodo findIndex nos regresa el indice del objeto que proporcionamos
    // Aqui estamos haciendo una comparacion por cada objeto dentro de nuestro arreglo de ingresos si el id del objeto es igual al que se proporciona en la funcion entonces lo eliminará de el arreglo
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
// el metodo splice nos permite eliminar un objeto de un arreglo a través de su indice, primero proporcionamos el indice y luego cuantos elementos se eliminaran
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();   
}

let cargarEgresos = () => {
    let egresosHTML = '';

    for(let egreso of egresos){
        egresosHTML += crearEgreso(egreso);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

let crearEgreso = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.description}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.value)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.value/totalEgresos())}</div>
        <div class="elemento_eliminar"> 
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;

    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex( egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}


let agregarDato = () => {
    let forma = document.forms['forma'];

    let tipo = forma['tipo'];
    let description = forma['descripcion'];
    let valor = forma['valor'];

    if(description.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(description.value, Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        }
        else if(tipo.value = 'egreso'){
            egresos.push(new Egreso(description.value, +valor.value))
            cargarCabecero();
            cargarEgresos();
        }
    }
}