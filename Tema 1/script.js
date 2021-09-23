function init () {

  document.getElementById ("pulsador").addEventListener("click", function (e) {
    cambiarTexto();
    console.log (e.clientX + ", " + e.clientY);
  });
}

function cambiarTexto() {
  document.getElementById ("texto").innerHTML = "<p style='color:black'><h1>¡Hola mundo!</h1></p>"
}