let miArray = new Array();

miArray[0] = "HOLA";

let arrayReconstruido = JSON.parse(JSON.stringify(miArray));

alert(arrayReconstruido[0]);

document.cookie = "username = John Smith; expires = Thu, 18 Dec 2013 12:00:00 UTC; path = /";

function setCookie(cname, cvalue, exdays) {

  let d = new Date();
  let expires = "expires = " + d.toUTCString();

  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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