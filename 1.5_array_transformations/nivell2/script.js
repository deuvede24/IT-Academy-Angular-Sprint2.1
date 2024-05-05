/* Ex.1 Donat un array "", crea una funció en una sola línia que faci el següent:

Filtra els nombres majors o iguals a 10.
Multiplica cada nombre filtrat per 2.
Calcula la suma dels nombres filtrats i multiplicats per 2.
La funció ha de retornar el resultat de la suma.*/

function mainex5() {
  const array = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

  const arrayResults = (array) =>
    array
      .filter((numero) => numero >= 10)
      .map((numero) => numero * 2)
      .reduce((counter, numero) => counter + numero, 0);

  console.log("El array resultante es: " + arrayResults(array));
}

