'use strict';

// variable global para almacenar captcha
let captchaN;

// listener para escuchar el envio del form
let nodoForm = document.getElementById("formContacto");
nodoForm.addEventListener("submit", validar);

//crea la función "generar captcha" al cargar el sitio
window.onload = generarCaptcha();

//genera un captcha numérico aleatorio
function generarCaptcha() {
  let randomcaptcha = document.getElementById('captcha-number');
  captchaN = Math.floor((Math.random() * 100000) + 1);
  randomcaptcha.innerHTML = captchaN;
}

//valida el evento (si el captcha se ingregó correctamente)
function validar(e) {

//comprueba si el valor generado del captcha es igual al ingresado por el usuario
  if (document.getElementById("captchaInput").value != captchaN) {
   document.getElementById('captcha-wrong').innerHTML = "El Captcha no coincide. Intente nuevamente.";
    e.preventDefault(); // no envia form
  }
  
}