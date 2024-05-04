/* Exercici 4
for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.*/

function mainex4() {
  let obj = { nom: "Ona", edat: 25, ciutat: "Barcelona" };

  for (datos in obj) {
    if (obj.hasOwnProperty(datos))
      // no hace falta pero es para verificar que los datos no seas heredados
      console.log(datos + ": " + obj[datos]);
  }
}

/*for-of amb break: Teniu una array de números. 
Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle:
let numeros = [1, 2, 3, 4, 5, 6];*/

function mainex5() {
  let numeros = [1, 2, 3, 4, 5, 6];
  for (const num of numeros) {
    console.log("Muestro hasta el número 5: " + num);
    if (num === 5) {
      break; //detengo el bucle cuando num = 5
    }
  }
}
