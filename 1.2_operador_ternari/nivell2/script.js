function mainex31() {
  let num = Number(document.getElementById("num").value);
  let signo = num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Cero";
  document.getElementById("resultado31").innerHTML = signo;
}


function mainex32() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let n3 = Number(document.getElementById("num3").value);

  function trobarMaxim(a, b, c) {
    let max = a > b && a > c ? a : b > a && b > c ? b : c;
    return max;
  }

  document.getElementById("resultado32").innerHTML =
    "El máxmo es: " + trobarMaxim(n1, n2, n3);
}
