// servicios.js — Carga y renderiza el listado de trabajos BC1166
// Dependencia: config-bc1166.js debe cargarse antes que este script.

// ===== NORMALIZAR URLs DE GOOGLE DRIVE =====
function extraerFileId(url) {
  if (!url || url.trim() === '') return null;
  url = url.trim();

  let m = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (m) return m[1];

  m = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];

  m = url.match(/\/d\/([a-zA-Z0-9_-]{10,})/);
  if (m) return m[1];

  return null;
}

function normalizarFoto(url) {
  if (!url || url.trim() === '') return null;

  // Si es Cloudinary — optimizar automáticamente
  if (url.includes('cloudinary.com')) {
    return optimizarImagen(url, 600);
  }

  // Si es Google Drive — convertir a thumbnail
  const fileId = extraerFileId(url);
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  }

  return url;
}

// ===== SANITIZAR =====
function sanitize(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

// ===== EMOJIS POR CATEGORÍA =====
function emojiCategoria(cat) {
  const mapa = {
    "enchapes":     "🪨",
    "electricidad": "⚡",
    "plomeria":     "🔧",
    "plomería":     "🔧",
    "drywall":      "🧱",
    "pintura":      "🖌️",
    "carpinteria":  "🪚",
    "carpintería":  "🪚"
  };
  return mapa[(cat || "").toLowerCase()] || "🔨";
}

// ===== CARGAR Y RENDERIZAR TRABAJOS =====
async function loadServicios() {
  const loading = document.getElementById("serviciosCargando");
  const grid    = document.getElementById("serviciosGrid");

  try {
    loading.style.display = "flex";
    grid.innerHTML = "";

    const response = await fetch(BC1166_CONFIG.TRABAJOS_ENDPOINT);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const data = await response.json();

    // Filtrar activos
    const activos = data.filter(
      t => String(t["Activo (si/no)"]).toLowerCase() === "si"
    );

    if (activos.length === 0) {
      grid.innerHTML = `
        <p style="text-align:center;color:#6b6b6b;padding:60px 20px;grid-column:1/-1;">
          No hay trabajos disponibles en este momento.
        </p>`;
      return;
    }

    activos.forEach(trabajo => {

      // Primera foto disponible
      let fotoSrc = BC1166_CONFIG.IMAGEN_FALLBACK;
      for (let i = 1; i <= 9; i++) {
        const url = trabajo[`Foto ${i}`];
        if (url && url.trim() !== '') {
          const norm = normalizarFoto(url);
          if (norm) { fotoSrc = norm; break; }
        }
      }

      const codigo     = trabajo["CÓDIGO"]            || "";
      const titulo     = trabajo["Título"]            || trabajo["Titulo"] || "Sin título";
      const categoria  = trabajo["Categoría"]         || trabajo["Categoria"] || "";
      const zona       = trabajo["Barrio/Sector"]     || trabajo["Ciudad"] || "";
      const descripcion= trabajo["Descripción"]       || trabajo["Descripcion"] || "";
      const resumen    = descripcion.length > 100
                         ? descripcion.substring(0, 97) + "…"
                         : descripcion;

      const emoji = emojiCategoria(categoria);

      const card = document.createElement("div");
      card.className = "servicio-card";
      card.innerHTML = `
        <div class="servicio-card-img">
          <img src="${fotoSrc}"
               alt="${sanitize(titulo)} — BC1166 Remodelaciones Bogotá"
               loading="lazy"
               onerror="this.src='${BC1166_CONFIG.IMAGEN_FALLBACK}'">
        </div>
        <div class="servicio-card-body">
          <span class="servicio-card-cat">${emoji} ${sanitize(categoria)}</span>
          <h3>${sanitize(titulo)}</h3>
          ${zona ? `<p class="servicio-card-zona">📍 ${sanitize(zona)}</p>` : ""}
          ${resumen ? `<p class="servicio-card-desc">${sanitize(resumen)}</p>` : ""}
          <button class="btn btn-purple servicio-card-btn"
                  data-codigo="${sanitize(codigo)}">
            Ver trabajo →
          </button>
        </div>
      `;

      // Click → detalle
      card.querySelector(".servicio-card-btn").addEventListener("click", function () {
        const cod = this.getAttribute("data-codigo");
        window.location.href = `detalle-servicio.html?codigo=${encodeURIComponent(cod)}`;
      });

      grid.appendChild(card);
    });

    // Activar filtro de pills si existe
    activarFiltros();

  } catch (err) {
    console.error("❌ Error cargando trabajos:", err);
    grid.innerHTML = `
      <p style="text-align:center;color:#e74c3c;padding:60px 20px;grid-column:1/-1;">
        Error al cargar los trabajos. Intenta más tarde.
      </p>`;
  } finally {
    loading.style.display = "none";
  }
}

// ===== FILTRO POR CATEGORÍA =====
function activarFiltros() {
  const pills   = document.querySelectorAll(".subnav-pill");
  const cards   = document.querySelectorAll(".servicio-card");

  if (!pills.length) return;

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      // Activar pill
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const cat = pill.dataset.cat;

      cards.forEach(card => {
        const cardCat = card.querySelector(".servicio-card-cat")
                            ?.textContent.toLowerCase() || "";
        if (cat === "todos" || cardCat.includes(cat)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", loadServicios);
