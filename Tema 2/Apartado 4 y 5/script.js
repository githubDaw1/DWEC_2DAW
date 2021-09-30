// I/O alert, console.log, confirm y prompt
alert("Hola mundo");

console.log("Otro hola mundo");

let respuesta = confirm ("¿Desea cancelar la suscripción?");
alert ("Usted ha contestado que " + respuesta);

// Operadores aritméticos
function operadoresAritmeticos(num1, num2) {
  /* let num1 = 3;
  let num2 = 5; */
  console.log (num1 + " + " + num2 + " = " + (num2 += num1)); // 8
  console.log (num1 + " - " + num2 + " = " + (num2 -= num1)); // 2
  console.log (num1 + " * " + num2 + " = " + (num2 *= num1)); // 15
  console.log (num1 + " / " + num2 + " = " + (num2 /= num1)); // 1
  console.log (num1 + " % " + num2 + " = " + (num2 %= num1)); // 2
}

// Asignación
let num1 = 5;
let num2 = 8;
let resultado1;
let resultado2;

resultado1 = ((num1+num2) * 200) / 100;
resultado2 = resultado1 % 3;
resultado1 = ++num1;
resultado2 = num2++;
resultado1 = --num1;
resultado2 = num2--;
resultado1 = -resultado2;

// Comparación
let a = 4;
let b = 5;
let c = "5";

console.log("El resultado de la expresión: " + (a == c));
console.log("El resultado de la expresión: " + (a === c));
console.log("El resultado de la expresión: " + (a != c));
console.log("El resultado de la expresión: " + (a !== c));
console.log("El resultado de la expresión: " + (a == b));
console.log("El resultado de la expresión: " + (a != b));
console.log("El resultado de la expresión: " + (a > b));
console.log("El resultado de la expresión: " + (a < b));
console.log("El resultado de la expresión: " + (a >= b));
console.log("El resultado de la expresión: " + (a <= b));

// Operadores lógicos
console.log ("El resultado de la expresión: " + (false && false));
console.log("El resultado de la expresión: " + (false && true));
console.log("El resultado de la expresión: " + (true && false));
console.log("El resultado de la expresión: " + (true && true));
console.log("El resultado de la expresión: " + (false || false));
console.log("El resultado de la expresión: " +  (false || true));
console.log("El resultado de la expresión: " + (true || false));
console.log("El resultado de la expresión: " + (true || true));
console.log("El resultado de la expresión: " + (!false));