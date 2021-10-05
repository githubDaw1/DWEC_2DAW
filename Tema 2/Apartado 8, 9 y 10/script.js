let p1 = new Punto(5, 5);
let p2 = new Punto(10, 10);

function devolver() {
  let texto = "Hola";
}

function multiplicar (param) {
  return (param * 2)
}

function multiplicar(x, y) {
  return (x * y);
}

console.log(devolver());
console.log(multiplicar(4));
console.log(multiplicar(2, 3));
console.log (p1.devuelveXporY());
console.log (p1.coordX);
console.log (Punto.distancia(p1, p2));