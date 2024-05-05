/*Ex3. Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: 
un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.*/

function esperarISaludar(nombre, callback) {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function saludar(nombre) {
  alert("Hola, " + nombre);
  console.log("Hola, " + nombre);
}

function saludarAsincrono() {
  let nombre = document.getElementById("nom").value;
  esperarISaludar(nombre, saludar);
}

/*Ex.4 Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una 
funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.*/
const arrayElements = [1, 2, 3, 4, 5];
function processarElements(array, callback) {
  //Uso de forEach para iterar sobre cada elemento del array
  /*array.forEach((element) => {
    callback(element);
  });*/

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    callback(element);
  }
}
function mostrarElements(elemento) {
  console.log("Elemento: " + (elemento + 2));
}
function mainex24() {
  processarElements(arrayElements, mostrarElements);
}
