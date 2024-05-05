/* Ex6. Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els 
resultats a la consola.*/

function mainex6() {
  // Promesa 2 seconds
  const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, món");
    }, 2000);
  });
  // Promesa 2 seconds
  const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bybye, món");
    }, 3000);
  });

  Promise.all([promesa2, promesa3]).then((values) => {
    console.log(values);
  });
}
