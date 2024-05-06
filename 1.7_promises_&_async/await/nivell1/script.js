function main() {
  /* //Ex1.Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 200);
  });*/

  //Función que retorna una promesa
  function crearPromesa() {
    return new Promise((resolve, reject) => {
      // Simular una espera de 2 segundos antes de resolver la promesa
      setTimeout(() => {
        resolve("Hola, món");
      }, 2000); //= 2 segundos
    });
  }

  // Llamar a la función que crea la promesa
  const promesa = crearPromesa();

  //Ex2.Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.
  promesa.then((resultado) => {
    console.log("El resultado de mi promesa es: " + resultado);
  });

  //Ex3.Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
  const promesaConReject = (input) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === "Hola") {
          resolve("Hola");
        } else {
          reject('Error: Input no es "Hola"');
        }
      }, 2000); // Espera de 2 segundos antes de decidir si es resolve o reject
    });
  };

  promesaConReject("Hola") // Llamada a la función que retorna la promesa
    .then((resultado) => {
      console.log(resultado); // Muestro "Hola" si el input es "Hola"
    })
    .catch((error) => {
      console.error(error); // Muestro mensaje de error si el input no es "Hola"
    });

  //Ex.4 Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.
  async function resultAsyncAwait() {
    const result = await promesa;
    console.log(result);
  }

  resultAsyncAwait();
}
