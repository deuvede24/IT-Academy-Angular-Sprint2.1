//Ex.
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

//Ex.4
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
