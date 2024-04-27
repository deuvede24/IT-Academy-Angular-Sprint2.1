
function mainex1(){
//convertiremos la function add(a, b) {return a + b;} en tipo flecha
let a = Number (document.getElementById("num1").value);
let b = Number (document.getElementById("num1").value);

const add = (a,b)=> a + b;
document.getElementById.innerHTML("resultado")=add(a,b);
}