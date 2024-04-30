function mainex3() {
  const objecte1 = [1, 2, 3, 4, 5];
  const objecte2 = [...objecte1];

  // ¿los arrays tienen el mismo contenido?
  alert(JSON.stringify(objecte1) === JSON.stringify(objecte2)); // true

  // ¿los arrays son iguales?
  alert(objecte1 === objecte2); // false (no es la misma referencia)

  objecte1.push(6);
  alert("Object1 modificado: " + objecte1); // 1, 2, 3, 4, 5, 6
  alert("Object2 igual: " + objecte2); // 1, 2, 3, 4, 5,

  console.log("Object1 modificado: " + objecte1);
  console.log("Object2 igual: " + objecte2);
}

function mainex4() {
  const [name, surname, ...rest] = [
    "Sandra",
    "Roberts",
    "President",
    " of her country",
  ];

  let e1 = name;
  let e2 = name;
  let eRest = rest;

  alert(name); // Sandra
  alert(surname); // Roberts
  alert(rest); //resto del contenido

  console.log("el contenido del elemento 1 es: " + e1);
  console.log("el contenido del elemento 2 es: " + e2);
  console.log("el contenido del resto de elementos es: " + eRest);
}
