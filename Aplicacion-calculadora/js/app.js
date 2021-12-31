function sumar(){
    let suma = 0;

    let formulario = document.forms['forma'];

    let operando1 = formulario['operandoA'];
    let operando2 = formulario['operandoB'];

    suma = parseInt(operando1.value) + parseInt(operando2.value);

    if(isNaN(suma))
        suma = 'La operación no incluye números';
    
        document.getElementById('resultado').innerHTML = `Resultado: ${suma}`;

        console.log(`Resultado: ${suma}`);
}