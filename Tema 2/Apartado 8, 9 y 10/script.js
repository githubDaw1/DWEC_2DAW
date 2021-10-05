var texto;

function devolver1() {
  texto = "Hola";
}

function devolver2() {
  texto = "Adios";
}

function multiplicar (param) {
  console.log(param * 2)
}

function multiplicar(x, y) {
  console.log(x * y);
}

console.log(devolver1());
console.log(devolver2());
console.log(multiplicar1(4));
console.log(multiplicar(2, 3));