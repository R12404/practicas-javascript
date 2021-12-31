const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Carla', 'Ramirez'),
    new Persona('Juana', 'Juarez')
];

function mostrarPersonas(){
    console.log('Se esta ejecutando el metodo mostrar personas');

    let texto = '';

    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        console.log(persona);
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];

    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if(nombre.value != '' && apellido.value != ''){
        const personaNueva = new Persona(nombre.value, apellido.value);
    
        console.log(personaNueva);
        personas.push(personaNueva);

        mostrarPersonas()
    }

    else{
        // alert('No hay información que agregar')
        console.log('No hay información que agregar')
    }
    
}
