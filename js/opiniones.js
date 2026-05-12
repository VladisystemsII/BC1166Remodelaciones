document.addEventListener("DOMContentLoaded", function () {

  const urlReal = "https://vladisystemsii.github.io/BC1166Remodelaciones/index.html";
  const mensaje = "Mira esta página de arreglos locativos 👉 " + urlReal;

  const enlaceWA = "https://wa.me/?text=" + encodeURIComponent(mensaje);

  const boton = document.getElementById("btnCompartirWA");

  if (boton) {
    boton.href = enlaceWA;
  }

});