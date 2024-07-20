let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto)


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intentos)   

    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero es menor");
        } else {
            asignarTextoElemento("p","El numero es mayor");
        }
        intentos++;
        limpiarCaja();
                 
    } 

    return
}

function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();
    // Indicar mensaje de inicio
    condicionesIniciales();
    // Generar el numero aleaorio
    // inicializar el numero de intentos
    // deshabilitar el boton de "Nuevo juego"
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    

    
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados)    
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }  else{ 
        // Si el numero generado esta incluido en la lista 

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return numeroGenerado();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
    }

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto!!!");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
