(function () {
  let headerLoaded = false;

  async function loadHeader() {
    if (headerLoaded) return;
    headerLoaded = true;

    try {
      const response = await fetch("modules/header.html");
      if (!response.ok) throw new Error("Error cargando header");

      const html = await response.text();

      // Insertar al inicio del body
      document.body.insertAdjacentHTML("afterbegin", html);

      // Notificar que el header ya está listo
      document.dispatchEvent(new Event("headerListo"));

    } catch (error) {
      console.error("Header Loader:", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadHeader);
  } else {
    loadHeader();
  }
})();
