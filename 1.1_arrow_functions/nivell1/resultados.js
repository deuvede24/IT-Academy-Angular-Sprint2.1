function mainex1() {
  //convertiremos la function add(a, b) {return a + b;} en tipo flecha
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  const add = (a, b) => a + b;

  document.getElementById("resultado").innerHTML = add(n1, n2);
}
