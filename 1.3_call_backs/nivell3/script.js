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

function mainex5() {
    let caracteres = document.getElementById("cadena").value;
    function processarCadena(caracteres, convertirCadena) {
        let mayusculas =caracteres.toUpperCase();
        convertirCadena(mayusculas);
    }

    function mostrarMayusculas(cadenaMayusculas){
        console.log("El texto en mayúsculas es: " + cadenaMayusculas);
    }
    processarCadena(caracteres, mostrarMayusculas);
}


