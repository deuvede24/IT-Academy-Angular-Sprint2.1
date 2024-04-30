function mainex1() {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [6, 7, 8, 9, 10];

  const array3 = [...array1, ...array2];
  console.log("Array resultado:", array3);
}

function mainex2() {
  function sum(...numbers) {
    /*utilizamos reduce para sumar todos los valores entre sí. 
    total es el varlo acumulado y num el valor del elemento actual 
    a sumar y el 0 indica inicializmaos el total con este valor.*/
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log("La suma de los elementos es:" + sum(1, 2, 3, 4, 5, 6));
}
