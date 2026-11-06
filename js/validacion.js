// Validación del formulario de contacto con las clases de Bootstrap
(function () {
  "use strict";
  var formulario = document.getElementById("formContacto");
  var aviso = document.getElementById("avisoEnvio");
  if (!formulario) { return; }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (!formulario.checkValidity()) {
      evento.stopPropagation();
      formulario.classList.add("was-validated");
      return;
    }
    formulario.reset();
    formulario.classList.remove("was-validated");
    aviso.classList.remove("d-none");
    aviso.focus();
  });
})();
