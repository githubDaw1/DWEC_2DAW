function init () {

  document.getElementById ("pulsador").addEventListener("click", function () {
    cambiarTexto();
  });
}

function cambiarTexto() {
  document.getElementById ("texto").innerHTML = "<p style='color:black'><h1>¡Hola mundo!</h1></p>"
}