/* Ex.5 Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que 
capturi qualsevol possible error utilitzant un bloc try/catch.*/

function mainex5() {
  // Promesa anterior
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });

  // Función asíncrona Ex4. con await para el resultado de la promesa
  async function resultAsyncAwait() {
    try {
      const result = await promesa;
      console.log(result);
    } catch (error) {
      console.error("Error al obtener el resultado:", error);
    }
  }

  // Llamar a la función asíncrona
  resultAsyncAwait();
}
