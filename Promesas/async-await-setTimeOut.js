// Aplicando promesas con async, await, setTimeOut

async function funcionConPromesaAwaitSetTimeout(){
    let miPromesa = new Promise( resolved => {
        console.log('Inicio de funcion');
        setTimeout(() => resolved('Mi promesa con await y timeout'), 3000);
    });
// No podemos utilizae la palabra await si no esta dentro de una funcion marcada con async
    console.log(await miPromesa); // Si esta linea de codigo que contiene la palabra await no se ha terminado de ejecutar entonces las demás lineas de codigo por debajo de ella tampoco lo harán
    console.log('Fin de funcion');
}

funcionConPromesaAwaitSetTimeout();