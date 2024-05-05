/*Ex.1Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: 
un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, 
passant el nombre com a paràmetre.*/


function mainex1() {
  function processar(num, doble) {
    doble(num);
  }
  function doble(n) {
    console.log("Resultado del Ex.1= " + n * 2);
  }
  processar(8, doble);
}


/*E2.Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres:
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb 
els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.*/

function mainex2() {
  function calcular(num1, num2, sumar) {
    sumar(num1, num2);
  }
  function sumar(a, b) {
    console.log("Resultado del Ex.2= " + (a + b));
  }
  calcular(1, 2, sumar);
}
