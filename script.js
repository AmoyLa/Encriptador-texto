/************************************FUNCIÓN ENCRIPTAR*************************************************/ 


function encriptar() {
  let original = document.getElementById("textoEncriptado").value;

  let frase = document.getElementById("textoEncriptado").value.toLowerCase();

  let caracteresEspacial = document.getElementById("textoEncriptado").value.replace(/[^a-zA-Z\s]/g,"");

  if(original!=frase){
    alert("¡No se acepta Mayúscula!");
  }
  else if(original!=caracteresEspacial){

    alert("¡No se acepta caracteres espaciales!")
  }


  else{

  
  let textoEncriptado = frase.replace(/e/g, "enter");
  textoEncriptado = textoEncriptado.replace(/i/g, "imes");
  textoEncriptado = textoEncriptado.replace(/a/g, "ai");
  textoEncriptado = textoEncriptado.replace(/o/g, "ober");
  textoEncriptado = textoEncriptado.replace(/u/g, "ufat");

  document.getElementById("textoDesencriptado").textContent = textoEncriptado;
  
  document.getElementById("bontonCopiar").style.display = "block";

  ocultar();

  // *******************Limpiar el input*******************************************************
  document.getElementById("textoEncriptado").value = "";
 }
}



/************************************ FUNCIÓN COPIAR  DESENCRIPTAR*************************************************/ 

function desencriptar() {
  let frase = document.getElementById("textoEncriptado").value.toLowerCase();

  let textoEncriptado = frase.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

  document.getElementById("textoDesencriptado").textContent = textoEncriptado;

  ocultar();
  
  // ***************************Limpiar el input********************************
  document.getElementById("textoEncriptado").value = "";
}
/******************************** FUNCIÓN COPIAR************************************************/ 
function copiar() {
  const contenido = document.querySelector("#textoDesencriptado");
  
  //******************** */ Crear un rango de selección**************************************
  const seleccion = document.createRange();
  seleccion.selectNodeContents(contenido);
  
  // ****************Eliminar cualquier selección anterior****************************************
  window.getSelection().removeAllRanges();
  
  //*********************** */ Añadir el nuevo rango de selección*****************
  window.getSelection().addRange(seleccion);
  
  //************ */ Copiar el texto seleccionado**************************************************
  document.execCommand("copy");
  
  //************************ */ Limpiar la selección ***********************************************
  window.getSelection().removeAllRanges();
  alert("Texto copiado 🤗");

  //**********************************/ Limpiar el input **********************
  document.getElementById("textoEncriptado").value = "";
}
/************************************FUNCIÓN OCULTAR IMAGEN********************/
function ocultar() {
  let ocultarImagen = document.getElementById("imagenOculta");
  ocultarImagen.style.display = "none";
}