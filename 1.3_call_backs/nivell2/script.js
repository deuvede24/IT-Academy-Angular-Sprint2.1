
function esperarISaludar(nombre,callback){
setTimeout(() => {
    callback(nombre);
  }, 2000);
}

function saludar(nombre) {
    alert("Hola, " + nombre);
    console.log("Hola, " + nombre)
}

function saludarAsincrono() {
    let nombre = document.getElementById("nom").value;
    esperarISaludar (nombre, saludar);
}

