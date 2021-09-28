function variables(){

  let ejemplo = 3; // Equivale a declararla fuera de la funcion como var

  if (ejemplo === 3){
    var variable1 = 1;
    let variable2 = 2;
  }

  console.log(variable1); // variable1 existe en este lugar
  console.log(variable2); // variable2 no existe en este lugar
}

function tipos(){

  let edad = 23;
  let incremento = 4;
  const nombre = "Rosa García";
  let nueva_edad = edad + incremento;

  console.log(typeof incremento === "number")
  console.log(nombre + " tras "+ incremento +" años tendrá " + nueva_edad);
}

function coercion() {

  let numero = 5;
  console.log (numero);
  console.log (numero.toString());
}

function ternario(){

  let altura; // variable no definida. por defecto, vale 0

  if (altura) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function arrayUni () {

  let arr = ["1", "10", "100", "1000"];

  for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    console.log(i);
  }
}

function arrayBidi () {

  // Esto es una array bidimensional
  let activities = [['Work', 9], ['Eat', 1], ['Commute', 2], ['Play Game', 1], ['Sleep', 7]];

  // Lo recorremos con dos bucles "for" anidados
  for (let i = 0; i < activities.length; i++) {
    for (let j = 0; j < activities[i].length; j++) {
      console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
  }
}