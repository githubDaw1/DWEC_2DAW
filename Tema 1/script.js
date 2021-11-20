function init() {
  document.getElementById("pulsador").onclick = function (e) {cambiarTexto();}
}

function cambiarTexto() {
  document.getElementById("texto").innerHTML = "<p style='color:black'><h1>¡Hola mundo!</h1></p>";
}