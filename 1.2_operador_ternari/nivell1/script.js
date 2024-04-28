function mainex1() {
  let age = document.getElementById("edad").value;
  document.getElementById("resultado1").innerHTML = potConduir(age);
}

function potConduir(age) {
  let mensaje = age >= 18 ? "Pots conduir" : "No pots conduir";
  return mensaje;
}

function mainex2() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  let mensaje = n1 > n2 ? "Número 1 es más grande" : "Número 2 es más grande";

  document.getElementById("resultado2").innerHTML = mensaje;
}
