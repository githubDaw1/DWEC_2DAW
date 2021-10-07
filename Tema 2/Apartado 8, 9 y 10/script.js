let p1 = new Punto(5, 5);
let p2 = new Punto(10, 10);
let texto;

function devolver() {
  texto = "Hola";
}

function multiplicar (param) {
  return (param * 2);
}

function multiplicar(x, y) {
  return (x * y);
}

const persons = [
  {name: "John", age: 35},
  {name: "Anne", age: 24},
  {name: "Tom", age: 41},
  {name: "Andrew", age: 55},
  {name: "Mary", age: 18},
];

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

console.log(devolver());
console.log(multiplicar(4));
console.log(multiplicar(2, 3));
console.log (Punto.distancia(p1, p2));
console.log (p1.devuelveXporY());
console.log (p1.coordX);
console.log (Punto.distancia(p1, p2));
const overThirty = persons.filter(person => person.age > 30);
console.log(overThirty);
console.log(division(numero1, numero2));