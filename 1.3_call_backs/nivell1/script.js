//Ex.1
function mainex1() {
  function processar(num, doble) {
    doble(num);
  }
  function doble(n) {
    console.log("Resultado del Ex.1= " + n * 2);
  }
  processar(8, doble);
}



//Ex.2
function mainex2() {
  function calcular(num1, num2, sumar) {
    sumar(num1, num2);
  }
  function sumar(a, b) {
    console.log("Resultado del Ex.2= " + (a + b));
  }
  calcular(1, 2, sumar);
}
