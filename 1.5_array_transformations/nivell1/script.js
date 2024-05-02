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

  console.log("El resultado del arrayPares es: " + arrayMayor);
}

function mainex4() {
  const array = [13, 7, 8, 21];
  const arraySumaTotal = array.reduce((counter, numero) => counter + numero, 0);

  console.log("El resultado del arraySumaTotal es: " + arraySumaTotal);
}
