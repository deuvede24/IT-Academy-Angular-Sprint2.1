function mainex1() {
  //convertiremos la function add(a, b) {return a + b;} en tipo flecha
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  document.getElementById("resultado1").innerHTML = add(n1, n2);
}

const add = (a, b) => a + b;

function mainex2() {
  document.getElementById("resultado2").innerHTML = random();
}
const random = () => Math.floor(Math.random() * 101);

function mainex3() {
  const nombre = document.getElementById("name").value;
  const persona = new Person(nombre);
  persona.greet();
}

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}`); //saludo por consola
    document.getElementById("resultado3").innerHTML = `Hola, ${this.name}`; //saludo en pantalla
  };
}
