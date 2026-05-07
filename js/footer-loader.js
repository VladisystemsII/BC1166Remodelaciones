// FOOTER LOADER - BC1166 CORE

(function () {
  let footerLoaded = false;

  async function loadFooter() {
    if (footerLoaded) return;
    footerLoaded = true;

    try {
      const response = await fetch("modules/footer.html");
      if (!response.ok) throw new Error("Error cargando footer");

      const html = await response.text();

      // Insertar antes del cierre del body
      document.body.insertAdjacentHTML("beforeend", html);

      // Evento de confirmación
      document.dispatchEvent(new Event("footer:loaded"));

    } catch (error) {
      console.error("Footer Loader:", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadFooter);    
  } else {
    loadFooter();
  }
})();