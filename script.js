const campo_texto = document.querySelector("#texto-encriptado")
const campo_mensaje = document.querySelector("#textoEncriptador");

const matriz_code = [
    ["e","enter"], //indice 0
    ["i","imes"],  //indice 1
    ["a","ai"],    //indice 2
    ["o","ober"],  //indice 3
    ["u","ufat"]   //indice 4
]

function btnEncriptador(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value=texto;
    
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function btnDesencriptador(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value=texto
}

function desencriptar(fraseEncriptada){
    for(let i=0; i<matriz_code.length;i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseEncriptada;

}


function mensajeCopiado(){
    const mensaje = document.getElementById("textoEncriptador");

    mensaje.select();

    document.execCommand("copy");
    
    if(document.execCommand("copy")==true){
        document.getElementById("btnCopiar").innerHTML = "Texto copiado"
    }

}

function eliminarTexto(){
    document.getElementById("texto-encriptado").value="";
}