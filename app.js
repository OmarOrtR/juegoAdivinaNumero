//La forma de conectar hmtl con JS es document "puente"
//querySelector = capturarlo y llevarlo de HTML a JS como un OBJETO

let parrafo = document.querySelector('p');

// Eventos
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

//Funciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // es un objeto
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    //value = para que se reciba el valor que se ingresa al input
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) { // Verifica el mismo tipo de dato
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else { // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Selecciona el número entre 1 y ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function reiniciarJuego() {
    //limpiarCaja
    limpiarCaja();
    //Indicar Mensaje de numeros
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();