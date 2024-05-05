/* Ex6. Every / Some: Usa every i some per a determinar si tots o alguns dels elements 
de l'array [11, 12, 13, 14] són majors que 10, respectivament*/

function mainex6() {
  const array = [11, 12, 13, 14, 9];

  const everyMayorDiez = array.every((numero) => numero > 10); //Todos los elementos son >10
  console.log("El array resultante es: " + everyMayorDiez);


  const someMayorDiez = array.some((numero) => numero > 10);
  console.log("El array resultante es: " + someMayorDiez); //Al menso 1 elemento es >10
}
