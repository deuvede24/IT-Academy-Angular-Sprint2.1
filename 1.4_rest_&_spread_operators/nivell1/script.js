/* Exercici 1
Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

Exercici 2
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest 
per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.*/

function mainex1() {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];

  const array3 = [...array1, ...array2];
  console.log("Array resultado:", array3);
}

function mainex2() {
  function sum(...numbers) {
    /*utilizamos reduce para sumar todos los valores entre sí. 
    total es el varor acumulado y num el valor del elemento actual 
    a sumar y el 0 indica inicializmaos el total con este valor.*/
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log("La suma de los elementos es:" + sum(1, 2, 3, 4, 5, 6));
}
