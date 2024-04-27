function mainex5() {
  let msg = document.getElementById("message").value;

  const imprimirMensaje = (msg) => {
    // función flecha setTimeout para esperar 3 segundos antes de imprimir el mensaje
    setTimeout(() => {
      console.log(msg);
    }, 3000);
  };
  imprimirMensaje(msg);
}
