    let numeroSecreto = 0;
    let intentos = 0;
    let listaNumerosSorteados =[];
    let  numeroMaximo = 10;

        function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
    }

    function verificarIntento(){
        let numeroDelUsuario =parseInt(document.getElementById('valorUsuario').value);
        
        if (numeroDelUsuario === numeroSecreto){
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? 'vez': 'veces'}`);
            //activar el boton reinicio   
            document.getElementById('reiniciar').removeAttribute('disabled')
        } else{
            // el usuario no acerto
            if(numeroDelUsuario > numeroSecreto ){
        asignarTextoElemento('p', 'El numero es menor');
            }else{
                asignarTextoElemento('p','El numero es mayor');
    }
    intentos++;
    limpiarCaja();
        return;
        }
    
    }
   
function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario');
   valorCaja.value='';
}

function generarNumeroSecreto() {
    // si el # generado esta incluida en la lista
    let numeroGenerado= Math.floor(Math.random()*10)+1;

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya  se sortearon todos los numeros posibles')
    }else {
//si el numero genrado esta incluido en la lista
    
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }
    else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

    function condicionesIniciales(){

        asignarTextoElemento('h1','Juego del número secreto');
        asignarTextoElemento('p','Indica un numero del 1 al 10');
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;
    
    }
function reiniciarJuego() {
    //limpiar  caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el # aletorio
    //inicializar el nuevo juego
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
