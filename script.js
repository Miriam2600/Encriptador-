const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

let resizeBrowser = () =>  {
    widthBrowser = window.outerWidth}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
   
}

function encriptar(stringEncriptada){
let matrizCodigo= [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i=0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll  (matrizCodigo[i][0], matrizCodigo[i][1])


    }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar (textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
   
}


function desencriptar(stringDesencriptada){
    let matrizCodigo= [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])    
    
        }
        }
        return stringDesencriptada
    }

    
    function btnCopiar() {
        const mensaje = document.querySelector(".mensaje");
        mensaje.select(); 
        mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles
    
        try {
            document.execCommand('copy');
            alert("Texto copiado al portapapeles");
        } catch (err) {
            console.error('Error al intentar copiar el texto: ', err);
            mensaje.value = " ";
            textArea.value= "";
        }
    }

    

   
    