document.getElementById("mensajes").onclick = function mensajes() {
  console.log("Esto es un texto en la consola");
  alert("Esto es un texto en la ventana");
  prompt("Introduzca algo de texto: ");
  confirm("Quieres continuar: ");
}

document.getElementById("variables").onclick = function variables() {

  ejemplo = 3; // Equivale a declararla como var

  if (ejemplo === 3) {
    var variable1 = 1;
    // let variable2 = 2;
  }

  console.log(variable1);
  // console.log(variable2);
}

document.getElementById("tipos").onclick = function tipos() {

  let edad = 23;
  let incremento = 4;
  const nombre = "Rosa García";

  console.log(typeof incremento === "number");
  console.log(nombre + " dentro de " + incremento + " años tendrá " +
  (edad + incremento));
}

document.getElementById("coercion").onclick = function coercion() {

  let numero = 5;
  let a = "2";
  let b = 5;
  let x = "10";
  let y = 9;
  let z = "9"

  console.log(numero);
  console.log(numero.toString());
  console.log(typeof a + " " + typeof b); // muestra: string number
  console.log(a + b); // Muestra 25
  console.log(x < y); // Muestra false
  console.log(x < z); // Muestra true
}

document.getElementById("ternario").onclick = function operadorTernario() {

  let altura;
  console.log(altura ? true : false); // muestra false.

  /*
  if (altura) { // Al no estar definido, muestra: false.
    console.log("true");
  } else {
    console.log("false");
  } */
}

document.getElementById("uni").onclick = function uni() {

  let arr = ["1", "10", "100", "1000"];

  for (let i = 0; i < arr.length && (arr[i] < 500); i++) {
    console.log(i);
  }
}

document.getElementById("bidi").onclick = function bidi() {

  var activities = [["Work", 9], ["Eat", 1], ["Commute", 2],
                    ["Play Game", 1], ["Sleep", 7]];
  var innerArrayLength = activities[0].length;

  for (let i = 0; i < activities.length; i++) {
    for (let j = 0; j < innerArrayLength; j++) {
      console.log("[ " + i + ", " + j + " ] = " + activities[i][j]);
    }
  }
}

document.getElementById("clonacion").onclick = function clonacion() {

  let miArrayUnidimensional = {miVector};
  let miOtroUnidimensional = Object.assign({}, miVector);
  let miArrayBidimensional = JSON.parse(JSON.stringify(activities));

  console.table(miArrayUnidimensional);
  console.log("HACIENDO USO DE Object.assign: ");
  console.table(miOtroUnidimensional);
  console.log("ARRAY CON EL QUE VAMOS A TRABAJAR: " + activities);
  console.log("HACIENDO USO DE 'JSON'. LA FORMA PREFERIDA");
  console.table(miArrayBidimensional);
}

document.getElementById("conversion").onclick = function conversion() {

  let num = "100";
  let num2 = "100.13";
  let num3 = 11;
  let n = parseInt(num);
  let n2 = parseFloat(num2);
  let n3 = num3.toString();

  console.log("Práctica 3.7");
  console.log(num + ", " + n + ", " + num2 + ", " + n2 + ", " + num3 + ", " + n3);
}

document.getElementById("constante").onclick = function constante() {

  const PI = 3.1416;
  const miArray = [1, 2, 3];

  console.log("Práctica 3.8");
  console.log(PI);
  console.log(miArray[0]);

  miArray[0] = 4;
  console.log(miArray[0]);
}

document.getElementById("estricto").onclick = function estricto() {

  console.log("Práctica 3.9");

  /*
  "use strict";
  pi = 3.14;

  funcionPrueba();

  function funcionPrueba() {piBIS = 3.14;} */

  pi = 3.14;
  funcionPrueba();

  function funcionPrueba() {
    console.log(pi);
    "use strict";
    let piNew = 3.141592;
    console.log(piNew);
  }
}