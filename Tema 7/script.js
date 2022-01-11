let miArray = new Array();

miArray[0] = "HOLA";

let arrayReconstruido = JSON.parse(JSON.stringify(miArray));

alert(arrayReconstruido[0]);

document.cookie = "username = John Smith; expires = Thu, 18 Dec 2013 12:00:00 UTC; path = /";

// Modificar cookie
function setCookie(cname, cvalue, exdays) {

  let d = new Date();
  let expires = "expires = " + d.toUTCString();

  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Obtener cookie
function getCookie(cname) {

  let name = cname + "=";
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {

    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

// Borrar cookie
function deleteCookie(cname) {
  document.cookie = cname + '=; expires = Thu, 01 Jan 1970 00:00:01 GMT;path = /';
}

// Comprobar la cookie
function checkCookie() {

  let user = getCookie("username");

  if (user != "") {
    alert("Welcome again " + user);
  } else {

    user = prompt("Please enter your name:", "");

    if (user !== "" && user !== null) {
      setCookie("username", user, 365);
    }
  }
}

let miArray = [1, 2 , 3];
let miArray2;

// Guardamos en localStorage el array con stringify
localStorage.setItem("valorArray", JSON.stringify(miArray));

//Recuperamos el texto y lo convertimos de nuevo a array con parse
miArray2 = JSON.parse(localStorage.getItem("valorArray"));