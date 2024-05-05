/* Exercici 1
Map: Teniu un array de números [1, 2, 3, 4]. 
Crea una nova array que contingui el quadrat de cada número.

Exercici 2
Filter: Teniu una array de números [1, 2, 3, 4]. 
Crea una nova array que només contingui els números parells.

Exercici 3
Find: Teniu una array de números [1, 10 , 8, 11]. 
Utilitza la funció find per a trobar el primer número que és major a 10.

Exercici 4
Reduce: Teniu una array de números [13, 7, 8, 21]. 
Fes servir la funció reduce per a calcular la suma total dels números.*/

function mainex1() {
  const array = [1, 2, 3, 4];
  const arrayCuadrado = array.map((numero) => numero * numero);

  console.log("El resultado del arrayCuadrado es: " + arrayCuadrado);
}

function mainex2() {
  const array = [1, 2, 3, 4];
  const arrayPares = array.filter((numero) => numero % 2 === 0);

  console.log("El resultado del arrayPares es: " + arrayPares);
}

function mainex3() {
  const array = [1, 10, 8, 11];
  const arrayMayor = array.find((numero) => numero > array[1]);

  console.log("El resultado del primer numero >10 es: " + arrayMayor);
}

function mainex4() {
  const array = [13, 7, 8, 21];
  const arraySumaTotal = array.reduce((counter, numero) => counter + numero, 0);

  console.log("El resultado del arraySumaTotal es: " + arraySumaTotal);
}
