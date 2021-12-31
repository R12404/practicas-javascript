// El uso de etiquetas nos permite ir a una parte del codigo que deseemos
inicio:
for(let contador = 0; contador <= 10; contador++){
    if ( contador % 2 !== 0){
        continue inicio;
    }
    else {
        console.log(contador);
    }
}