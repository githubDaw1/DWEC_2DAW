var num1;
var num2;

alert("Hola mundo");
console.log("Otro hola mundo");

let respuesta = confirm ("¿Desea cancelar la suscripción?");
alert ("Usted ha contestado que " + respuesta);

function operadoresAritmeticos(num1, num2) {

  num1 = 3;
  num2 = 5;

  console.log (num1 + " + " + num2 + " = " + (num2 += num1));
  console.log (num1 + " - " + num2 + " = " + (num2 -= num1));
  console.log (num1 + " * " + num2 + " = " + (num2 *= num1));
  console.log (num1 + " / " + num2 + " = " + (num2 /= num1));
  console.log (num1 + " % " + num2 + " = " + (num2 %= num1));
}

num1 = 5;
num2 = 8;
let resultado1;
let resultado2;

resultado1 = ((num1 + num2) * 200) / 100;
resultado2 = resultado1 % 3;
resultado3 = ++num1;
resultado4 = num2++;
resultado5 = --num1;
resultado6 = num2--;
resultado7 = -resultado2;

let a = 4;
let b = 5;
let c = "5";

console.log("Resultado: " + (a == c));
console.log("Resultado: " + (a === c));
console.log("Resultado: " + (a != c));
console.log("Resultado: " + (a !== c));
console.log("Resultado: " + (a == b));
console.log("Resultado: " + (a != b));
console.log("Resultado: " + (a > b));
console.log("Resultado: " + (a < b));
console.log("Resultado: " + (a >= b));
console.log("Resultado: " + (a <= b));
console.log("Resultado: " + (false && false));
console.log("Resultado: " + (false && true));
console.log("Resultado: " + (true && false));
console.log("Resultado: " + (true && true));
console.log("Resultado: " + (false || false));
console.log("Resultado: " + (false || true));
console.log("Resultado: " + (true || false));
console.log("Resultado: " + (true || true));
console.log("Resultado: " + (!false));