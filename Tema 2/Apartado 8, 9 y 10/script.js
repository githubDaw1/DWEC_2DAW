let p1 = new Punto(5, 5);
let p2 = new Punto(10, 10);

function devolver() {
  return "Hola";
}

function multiplicar (param) {
  return (param * 2);
}

function multiplicar(x, y) {
  return (x * y);
}

let numero = prompt("Introduce un numero: ");

function cuentaAtras (numero) {

  if (numero == 0) {
    return '0';
  } else {
    return cuentaAtras(numero - 1) + ", " + numero;
  }
}

numero = prompt("Introduce un numero: ");
console.log(cuentaAtras(numero));

let numero1 = prompt("Introduce un numero: ");
let numero2 = prompt("Introduce un numero: ");

function division (numero1, numero2) {

  if ((numero1 % numero2) == 0) {
    return ((numero1 / numero2), 0);
  } else {
    numero1 = prompt("Introduce un numero: ");
    numero2 = prompt("Introduce un numero: ");
    division(numero1, numero2);
  }
}

let patron = /^\d{2}\/\d{2}\/\d{4}$/;
let fecha =  "09/01/2006";

console.log(devolver());
console.log(multiplicar(4));
console.log(multiplicar(2, 3));
console.log (Punto.distancia(p1, p2));
console.log (p1.devuelveXporY());
console.log (p1.coordX);
console.log (Punto.distancia(p1, p2));
console.log(persons.filter(person => person.age > 30));
console.log(division(numero1, numero2));
console.log(patron.test(fecha));