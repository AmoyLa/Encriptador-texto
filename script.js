/*/********* FUNCION DE ENCRIPTAR ***************/

function encriptar()
{
    let frase=document.getElementById("textoEncriptado").value.toLowerCase();
   

   let textoEncriptado = frase.replace(/e/img,"enter");
    textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    textoEncriptado = textoEncriptado.replace(/u/img,"ufat");
  
   document.getElementById("textoDesencriptado").innerHTML=textoEncriptado;

   document.getElementById("bontonCopiar").style.display="inherit";

    
    ocultar();
  frase.value ="";    
}

//*********************************************************FUNCION DE DESENCRIPTAR************************************************************/

function desencriptar()
{
    let frase=document.getElementById("textoEncriptado").value.toLowerCase();

   let textoEncriptado = frase.replace(/enter/img,"e");
    textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    textoEncriptado = textoEncriptado.replace(/ufat/img,"u");
  
   document.getElementById("textoDesencriptado").innerHTML=textoEncriptado;

   ocultar();    
}

//*********************************************************FUNCION DE COPIAR************************************************************/
function copiar()
{
    let contenido = document.querySelector("#textoDesencriptado");
  contenido.select();
    document.execCommand("Copy");

}

/*/*//*******************************************************FUNCIÓN DE OCULTAR EL LA IMAGEN***************************************************************************** */
  function ocultar()
{
   let ocultarImagen=document.getElementById("imagenOculta");

    ocultarImagen.style.display="none";

} 