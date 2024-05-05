/*Ex1. forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];*/

/*array.forEach((element) => {
    callback(element);
  });*/

function mainex1() {
  let noms = ["Anna", "Bernat", "Clara"];
  noms.forEach((nombre) => {
    console.log("Elementos del array (forEach): " + nombre);
  });
}

/*Ex2. for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: 
let noms = ['Anna', 'Bernat', 'Clara'];*/
function mainex2() {
  let noms = ["Anna", "Bernat", "Clara"];
  for (const nombre of noms) {
    console.log("Elementos del array (forof): " + nombre);
  }
}

/* Ex3. filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. 
let numeros = [1, 2, 3, 4, 5, 6];*/
function mainex3() {
  let numeros = [1, 2, 3, 4, 5, 6];
  const numerosPares = numeros.filter((numero) => numero % 2 === 0);
  {
    console.log(numerosPares);
  }
}
