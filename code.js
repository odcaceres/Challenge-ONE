
const inputMensaje = document.querySelector("#inputTexto");
const inputResultado = document.querySelector("#textArea");
//botones
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencripar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnLimpiar = document.querySelector("#limpiar");
const btnPegar = document.querySelector("#pegar");

const tarjeta1 = document.querySelector(".num1");

    document.getElementById("textArea").style.display = "none";

function encriptar(){

    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    document.getElementById("imgDercha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    inputResultado.value = mensajeEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textArea").style.display = "show";
    document.getElementById("textArea").style.display = "inherit";
}

function desencriptar(){

    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");

    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

function limpiar(){
    document.getElementById("textArea").style.display = "none";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("texto-mensaje").style.display = "none";
    document.getElementById("imgDercha").style.display = "block";
    document.getElementById("texto").style.display = "show";
    document.getElementById("texto").style.display = "inherit";
    document.getElementById("texto-mensaje").style.display = "show";
    document.getElementById("texto-mensaje").style.display = "inherit";
    inputMensaje.value = "";
}

function pegar(){
    inputMensaje.value = inputResultado.value;
}


btnEncriptar.onclick = encriptar;
btnDesencripar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnLimpiar.onclick = limpiar;
btnPegar.onclick = pegar;
