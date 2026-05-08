// config-bc1166.js — Configuración central BC1166 Remodelaciones
// Cargar SIEMPRE antes que servicios.js

// ===== OPTIMIZAR IMAGEN CLOUDINARY =====
function optimizarImagen(url, ancho = 800) {
  if (!url) return '';
  return url.replace('/upload/', `/upload/w_${ancho},f_auto,q_auto/`);
}

const BC1166_CONFIG = {

  TRABAJOS_ENDPOINT: "https://script.google.com/macros/s/AKfycbxnKTt9koeJQBqOm1AK-1eiw8ATIFhnQit1SleQi6q7aPXWc2aED0DPytlwH7p24N-m/exec",

  WHATSAPP_NUMBER: "573114831846",

  WHATSAPP_MSG_DEFAULT: "Hola, quiero cotizar un servicio de reparación locativa",

  IMAGEN_FALLBACK: "img/sin-imagen.png"
};
