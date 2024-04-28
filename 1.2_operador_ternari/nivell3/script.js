//Función flecha que admite un array de número y mediante un loop for lo imprime por consola
const parOimpar = () => {
  const arrayDeNumeros = [1, 2, 3, 4, 5];
  let resultPantalla = "";
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    let number = arrayDeNumeros[i];
    let signo = arrayDeNumeros[i] % 2 === 0 ? "Par" : "Impar";
    console.log("El número" + number + "es: " + signo);

    resultPantalla+= "<p>El número " + number + " es: " + signo + "</p>";
  }
  document.getElementById("resultado").innerHTML = " " + resultPantalla;

};
