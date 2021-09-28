function variables(){

  ejemplo = 3; // Equivale a declararla fuera de la funcion como var
  let variable2;

  if (ejemplo === 3){
    var variable1 = 1;
    variable2 = 2;
  }

  console.log(variable1); // variable1 existe en este lugar
  console.log(variable2); // variable2 no existe en este lugar
}

function tipos(){

  let edad = 23;
  let nueva_edad;
  let incremento = 4;
  const nombre = "Rosa García";

  console.log(typeof incremento === "number")
  nueva_edad = edad + incremento;
  console.log(nombre + " tras "+ incremento +" años tendrá "+
  nueva_edad);
}