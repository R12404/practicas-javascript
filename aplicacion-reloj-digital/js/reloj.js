const mostrarReloj = () => {
    let fecha = new Date;

    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora}: ${minutos}: ${segundos}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];//La funcion getDay retornará un valor númerico del dia de la semana el cual se pasara como indice a la variable de días
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();

    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes} ${anio}`;
    // El metodo classLista nos regresa una lista de todas las clases que se estan aplicando a este elemento html
    //toggle funciona como un interruptor, es decir si esta aplicado el estilo lo va a quitar y si no está lo va a agregar  
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);