// config-bc1166.js — Configuración central BC1166 Remodelaciones
// Cargar SIEMPRE antes que servicios.js y detalle-servicio.js

// ===== OPTIMIZAR IMAGEN CLOUDINARY =====
function optimizarImagen(url, ancho = 800) {
  if (!url) return "";
  return url.replace("/upload/", `/upload/w_${ancho},f_auto,q_auto/`);
}

const BC1166_CONFIG = {

  // ⚠️ Reemplazar con el endpoint real del Google Sheets cuando esté listo
  // Por ahora apunta al mismo JSON de Portal33 para pruebas visuales
  TRABAJOS_ENDPOINT: "https://script.google.com/macros/s/AKfycbyjwA8PvQpuKFcSR5D4o_NrP-Mg9C73lATGeC64I7s2wA2ZWcF8Htx1ez2LJhatHMSrOQ/exec",

  WHATSAPP_NUMBER: "573114831846",

  WHATSAPP_MSG_DEFAULT: "Hola, quiero cotizar un servicio de reparación locativa",

  // Fallback si no hay foto
  IMAGEN_FALLBACK: "img/sin-imagen.png"
};
