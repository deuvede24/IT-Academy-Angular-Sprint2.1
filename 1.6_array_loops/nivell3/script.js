/* for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): 
let noms = ['Anna', 'Bernat', 'Clara']*/

function mainex6() {
  let noms = ["Anna", "Bernat", "Clara"];
  for (let [index, name] of noms.entries()) { //utilizamos nom.entries para obtener no solo el valor si o el index
    console.log("Index " + index + " " + name);
  }
}
