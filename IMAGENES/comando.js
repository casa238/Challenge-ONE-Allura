var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".muneco");
var h3 = document.querySelector(".ningun-msg");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector(".texto-resultado");
var elemento = document.querySelector(".texto-resultado");

document.querySelector(".btn-copiar").addEventListener("click",()=>{
  copyToClipBoard(elemento);
  
})


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function copyToClipBoard(elemento){
  var inputOculto = document.createElement("input");
  inputOculto.setAttribute("value",elemento.innerText);

  document.body.appendChild(inputOculto);
  inputOculto.select();

  document.execCommand("copy");

}


function encriptar(){
    ocultarObjetos();
    resultado.textContent = encriptarTexto(recuperarTexto()); 
}

function desencriptar(){
  ocultarObjetos();
  resultado.textContent = desencriptarTexto(recuperarTexto()); 
}

function recuperarTexto(){
    var area = document.querySelector(".text-area");
    return area.value;    
}

function ocultarObjetos(){
     muneco.classList.add("ocultar");
     h3.classList.add("ocultar");
     parrafo.classList.add("ocultar");
     
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal ="";
    
    for(var i=0; i<texto.length; i++){
      if(texto[i] =="a") {
          textoFinal = textoFinal + "ai";
      }
      else if(texto[i] =="e") {
        textoFinal = textoFinal + "enter";
      }
      else if(texto[i] =="i") {
        textoFinal = textoFinal + "imes";
      }
      else if(texto[i] =="o") {
        textoFinal = textoFinal + "ober";
      }
      else if(texto[i] =="u") {
        textoFinal = textoFinal + "ufat";
      }
      else {
        textoFinal = textoFinal + texto[i];
      }         
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal ="";
  
  for(var i=0; i<texto.length; i++){
    if(texto[i] =="a") {
        textoFinal = textoFinal + "a";
        i=i+1;
    }
    else if(texto[i] =="e") {
      textoFinal = textoFinal + "e";
      i=i+4;
    }
    else if(texto[i] =="i") {
      textoFinal = textoFinal + "i";
      i=i+3;
    }
    else if(texto[i] =="o") {
      textoFinal = textoFinal + "o";
      i=i+3;
    }
    else if(texto[i] =="u") {
      textoFinal = textoFinal + "u";
      i=i+3;
    }
    else {
      textoFinal = textoFinal + texto[i];
    }         
  }
  return textoFinal;
}
