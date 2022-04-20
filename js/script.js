

var letra;
var letras;
var codificado = [];
var decodificado = [];
var resultado;

function invisible(id){

  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function visible(id){

    document.getElementById(id).style.display= 'block' ;


}

function saltoLinea(){

    document.write("<br>");

}

function imprimir(texto){

    document.write(texto);

}


function encriptar(){
  letra = document.getElementById("texto").value; 
  if( letra !="" ) {

    for(var i = 0; i < letra.length; i++){
      if(letra[i] == "i"){

        codificado[i] = "imes";
      
      }else if(letra[i] == "a"){

        codificado[i] = "ai";

      }else if(letra[i] == "o"){

        codificado[i] = "ober";

      }else if(letra[i] == "e"){

        codificado[i] = "enter";

      }else if(letra[i] == "u"){

        codificado[i] = "ufat";

      }else{

        codificado[i] = letra[i];
      }
    
    }

  invisible("informacion");
 
  resultado = codificado.join('');
  document.getElementById("texto-codificado").value = "";
  document.getElementById("texto-codificado").value = resultado;
  visible("texto-codificado");
  visible("copiar-boton")
  document.getElementById("texto").value = "";   
  }
}

function desencriptar(){

  letra = document.getElementById("texto").value;
  if (letra !=""){

    letra = letra.replace(/imes/g, "i");
    letra = letra.replace(/ai/g, "a");
    letra = letra.replace(/ober/g, "o");
    letra = letra.replace(/enter/g, "e");
    letra = letra.replace(/ufat/g,"u");

    
    document.getElementById("texto-codificado").value = "";
    document.getElementById("texto-codificado").value = letra;
    visible("texto-codificado");
    visible("copiar-boton")
    document.getElementById("texto").value = "";   
  }
}
  function copiar(){

    var copyText = document.getElementById("texto-codificado");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value);

    alert("Texto copiado: " + copyText.value);
  }



