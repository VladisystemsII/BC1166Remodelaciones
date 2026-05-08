// servicios.js — Carga y renderiza trabajos BC1166
// Dependencia: config-bc1166.js debe cargarse antes que este script.

// ===== NORMALIZAR URLs =====
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

function normalizarUrl(url) {
  if (!url || url.trim() === '') return null;
  url = url.trim();
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', '/upload/w_800,f_auto,q_auto/');
  }
  const fileId = extraerFileId(url);
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  }
  return url;
}

function normalizarVideo(url) {
  if (!url || url.trim() === '') return null;
  url = url.trim();
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', '/upload/q_auto,f_auto/');
  }
  return url;
}

// ===== SANITIZAR =====
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

// ===== RENDER FOTOS =====
function renderFotos(activos) {
  const grid = document.getElementById('fotosGrid');
  if (!grid) return;

  const conFoto = activos.filter(t => t['FOTO'] && t['FOTO'].trim() !== '');

  if (conFoto.length === 0) {
    grid.innerHTML = `<div class="foto-item"><div class="foto-ph"><span>📷</span>Sin fotos aún</div></div>`;
    return;
  }

  grid.innerHTML = '';
  conFoto.forEach(t => {
    const src = normalizarUrl(t['FOTO']);
    if (!src) return;
    const codigo = sanitize(t['CODIGO'] || t['Codigo'] || '');
    const item = document.createElement('div');
    item.className = 'foto-item';
    item.innerHTML = `
      <img src="${src}"
           alt="Trabajo BC1166${codigo ? ' · ' + codigo : ''}"
           loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="foto-ph" style="display:none"><span>📷</span>Sin imagen</div>
    `;
    grid.appendChild(item);
  });
}

// ===== RENDER VIDEOS =====
function renderVideos(activos) {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;

  const conVideo = activos.filter(t => t['VIDEO'] && t['VIDEO'].trim() !== '');

  if (conVideo.length === 0) {
    grid.innerHTML = `<div class="video-item"><div class="video-ph"><span>▶️</span>Sin videos aún</div></div>`;
    return;
  }

  grid.innerHTML = '';
  conVideo.forEach(t => {
    const src = normalizarVideo(t['VIDEO']);
    if (!src) return;
    const codigo = sanitize(t['CODIGO'] || t['Codigo'] || '');
    const item = document.createElement('div');
    item.className = 'video-item';
    item.innerHTML = `
      <video class="video-ph" controls preload="none" loading="lazy">
        <source src="${src}" type="video/mp4">
      </video>
      <div class="video-caption">Trabajo BC1166${codigo ? ' · ' + codigo : ''}</div>
    `;
    grid.appendChild(item);
  });
}

// ===== RENDER ANTES/DESPUÉS =====
function renderAntesDespues(activos) {
  const grid = document.getElementById('adGrid');
  if (!grid) return;

  const conAD = activos.filter(t => t['ANTES/DESPUES'] && t['ANTES/DESPUES'].trim() !== '');

  if (conAD.length === 0) {
    grid.innerHTML = `
      <div class="ad-item">
        <div class="ad-header">Sin registros aún</div>
        <div class="ad-cols">
          <div class="ad-col"><div class="ad-ph">📷</div><span class="ad-badge antes">Antes</span></div>
          <div class="ad-col"><div class="ad-ph">✨</div><span class="ad-badge despues">Después</span></div>
        </div>
      </div>`;
    return;
  }

  grid.innerHTML = '';
  conAD.forEach(t => {
    const src = normalizarUrl(t['ANTES/DESPUES']);
    if (!src) return;
    const codigo = sanitize(t['CODIGO'] || t['Codigo'] || '');
    const item = document.createElement('div');
    item.className = 'ad-item';
    item.innerHTML = `
      <div class="ad-header">Trabajo${codigo ? ' · ' + codigo : ''}</div>
      <div class="ad-cols" style="grid-template-columns:1fr;">
        <div class="ad-col" style="aspect-ratio:16/9;">
          <img src="${src}"
               alt="Antes y después${codigo ? ' · ' + codigo : ''} — BC1166"
               loading="lazy"
               onerror="this.style.display='none'">
        </div>
      </div>
    `;
    grid.appendChild(item);
  });
}

// ===== RENDER TESTIMONIOS =====
function renderTestimonios(activos) {
  const grid = document.getElementById('testimoniosGrid');
  if (!grid) return;

  const conTestimonio = activos.filter(t => t['TESTIMONIO'] && t['TESTIMONIO'].trim() !== '');

  if (conTestimonio.length === 0) {
    grid.innerHTML = '';
    return;
  }

  // Ocultar los testimonios hardcodeados y agregar los dinámicos al inicio
  grid.innerHTML = '';
  conTestimonio.forEach(t => {
    const texto = sanitize(t['TESTIMONIO']);
    const codigo = sanitize(t['CODIGO'] || t['Codigo'] || '');

    // Detectar si el testimonio es una URL de imagen
    const esImagen = /\.(jpg|jpeg|png|webp|gif)/i.test(t['TESTIMONIO']) ||
                     t['TESTIMONIO'].includes('cloudinary.com') ||
                     t['TESTIMONIO'].includes('drive.google.com');

    const item = document.createElement('div');
    item.className = 'wa-testimonio';

    if (esImagen) {
      const srcImg = normalizarUrl(t['TESTIMONIO']);
      item.innerHTML = `<img src="${srcImg}" alt="Testimonio cliente BC1166" loading="lazy">`;
    } else {
      item.innerHTML = `
        <div class="wa-bubble">
          <div class="wa-bubble-header">
            <div class="wa-bubble-icon">
              <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.856L.057 23.882a.5.5 0 00.606.63l6.281-1.637A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.031-1.385l-.36-.214-3.733.973.998-3.642-.235-.374A9.799 9.799 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
            </div>
            <div>
              <div class="wa-bubble-nombre">Cliente BC1166${codigo ? ' · ' + codigo : ''}</div>
              <div class="wa-bubble-zona">Bogotá</div>
            </div>
          </div>
          <div class="wa-bubble-texto">${texto}</div>
          <div class="wa-bubble-stars">★★★★★</div>
        </div>
      `;
    }
    grid.appendChild(item);
  });
}

// ===== CARGA PRINCIPAL =====
async function loadServicios() {
  const loading = document.getElementById('serviciosCargando');

  try {
    if (loading) loading.style.display = 'flex';

    const response = await fetch(BC1166_CONFIG.TRABAJOS_ENDPOINT);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const data = await response.json();

    // Filtrar activos — campo ACTIVO (si/no)
    const activos = data.filter(
      t => String(t['ACTIVO'] || t['Activo'] || t['activo'] || '').toLowerCase().trim() === 'si'
    );

    renderFotos(activos);
    renderVideos(activos);
    renderAntesDespues(activos);
    renderTestimonios(activos);

  } catch (err) {
    console.error('❌ Error cargando servicios:', err);
  } finally {
    if (loading) loading.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', loadServicios);
