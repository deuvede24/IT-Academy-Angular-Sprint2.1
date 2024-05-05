/*function mainex5() {
  let caracteres = document.getElementById("cadena").value;

  function convertirCadena(caracteres) {
    let mayusculas = caracteres.toUpperCase();
    console.log("El texto en mayúsculas es: " + mayusculas);
  }
  processarCadena(caracteres, convertirCadena);
}

function processarCadena(caracteres, convertirCadena) {
  convertirCadena(caracteres);
}*/

/*Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters 
i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules 
i llavors invocar la funció de callback amb la cadena transformada.*/
function mainex5() {
  let caracteres = document.getElementById("cadena").value;
  function processarCadena(caracteres, convertirCadena) {
    let mayusculas = caracteres.toUpperCase();
    convertirCadena(mayusculas);
  }

  function mostrarMayusculas(cadenaMayusculas) {
    console.log("El texto en mayúsculas es: " + cadenaMayusculas);
  }
  processarCadena(caracteres, mostrarMayusculas);
}
