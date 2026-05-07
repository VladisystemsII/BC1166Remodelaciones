/* =======================================
   BC1166 REMODELACIONES — detalle-servicio.js
   Lee la URL del Sheet desde config.js (SHEETS_SERVICIOS_URL)
   y llena los IDs estáticos del HTML.

   Parámetro esperado en URL: ?id=3
   Columnas del Sheet:
     id | titulo | categoria | zona | estado
     duracion | materiales | m2 | descripcion
     foto1 | foto2 | foto3 | foto4 | foto5
     activo | wa_numero
   ======================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Leer ?id= de la URL ── */
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');

  if (!id) {
    mostrarError('No se especificó el trabajo a mostrar.');
    return;
  }

  /* ── URL del Sheet desde config.js ── */
  /* config.js debe exponer: window.APP_CONFIG.SHEETS_SERVICIOS_URL */
  const sheetUrl = window?.APP_CONFIG?.SHEETS_SERVICIOS_URL;

  if (!sheetUrl) {
    mostrarError('URL del Sheet no configurada. Revisa config.js');
    return;
  }

  cargarServicio(sheetUrl, id);
});

/* ══════════════════════════════════════
   FETCH Y RENDER
══════════════════════════════════════ */
async function cargarServicio(sheetUrl, idBuscado) {
  try {
    const res  = await fetch(sheetUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    const entries = json.feed?.entry || [];
    if (entries.length === 0) {
      mostrarError('No se encontraron trabajos en el Sheet.');
      return;
    }

    /* Parsear filas */
    const servicios = entries.map(parsearFila);

    /* Buscar por id */
    const servicio = servicios.find(s => String(s.id) === String(idBuscado));

    if (!servicio || String(servicio.activo).toUpperCase() !== 'TRUE') {
      mostrarError('Trabajo no encontrado o no disponible.');
      return;
    }

    renderServicio(servicio);

  } catch (err) {
    console.error('[BC1166 detalle-servicio]', err);
    mostrarError('Error al cargar el trabajo. Intenta de nuevo.');
  }
}

/* ══════════════════════════════════════
   PARSEAR FILA DEL SHEET
══════════════════════════════════════ */
function parsearFila(entry) {
  const get = key => {
    const cell = entry[`gsx$${key.toLowerCase()}`];
    return cell ? cell.$t.trim() : '';
  };
  return {
    id:          get('id'),
    titulo:      get('titulo'),
    categoria:   get('categoria'),
    zona:        get('zona'),
    estado:      get('estado'),
    duracion:    get('duracion'),
    materiales:  get('materiales'),
    m2:          get('m2'),
    descripcion: get('descripcion'),
    foto1:       get('foto1'),
    foto2:       get('foto2'),
    foto3:       get('foto3'),
    foto4:       get('foto4'),
    foto5:       get('foto5'),
    activo:      get('activo'),
    wa_numero:   get('wa_numero'),
  };
}

/* ══════════════════════════════════════
   RENDER — llena los IDs del HTML
══════════════════════════════════════ */
function renderServicio(s) {

  /* Ocultar carga, mostrar contenido */
  document.getElementById('mensajeCarga').style.display    = 'none';
  document.getElementById('contenidoServicio').style.display = 'block';

  /* ── Categoría ── */
  setText('trabajoCategoria', s.categoria);

  /* ── Título (h1) ── */
  setText('trabajoTitulo', s.titulo);

  /* ── Zona ── */
  setText('trabajoZona', s.zona);

  /* ── Estado ── */
  const estadoEl = document.getElementById('trabajoEstado');
  if (estadoEl) {
    const ok = /terminado|finalizado|entregado/i.test(s.estado);
    estadoEl.className  = `ds-estado-badge ${ok ? 'terminado' : 'en-proceso'}`;
    estadoEl.textContent = ok ? '✓ Trabajo terminado' : '⏳ En proceso';
  }

  /* ── Características ── */
  setText('trabajoM2',      s.m2       || '—');
  setText('trabajoDuracion', s.duracion || '—');
  setText('trabajoTipo',    s.categoria || '—');

  /* ── Descripción (Markdown) ── */
  const descEl = document.getElementById('trabajoDescripcion');
  if (descEl) {
    descEl.innerHTML = window.marked
      ? marked.parse(s.descripcion || '')
      : s.descripcion || '';
  }

  /* ── Sidebar ── */
  setText('sideCategoria', s.categoria  || '—');
  setText('sideZona',      s.zona       || '—');
  setText('sideDuracion',  s.duracion   || '—');
  setText('sideM2',        s.m2 ? `${s.m2} m²` : '—');
  setText('sideMateriales', s.materiales || '—');
  setText('sideCodigo',    s.id ? `BC-${String(s.id).padStart(3,'0')}` : '—');

  /* ── Galería ── */
  const fotos = [s.foto1, s.foto2, s.foto3, s.foto4, s.foto5].filter(Boolean);
  renderGaleria(fotos, s.titulo);

  /* ── Botón WhatsApp ── */
  const numero = s.wa_numero || window?.APP_CONFIG?.WA_NUMBER || '573114831846';
  const msg    = `Hola%2C%20vi%20el%20trabajo%20%22${encodeURIComponent(s.titulo)}%22%20y%20quiero%20cotizar%20algo%20similar`;
  const btnWa  = document.getElementById('btnWhatsapp');
  if (btnWa) {
    btnWa.onclick = () => window.open(`https://wa.me/${numero}?text=${msg}`, '_blank');
  }

  /* ── SEO dinámico ── */
  actualizarSEO(s);
}

/* ══════════════════════════════════════
   GALERÍA INTERACTIVA
══════════════════════════════════════ */
function renderGaleria(fotos, altBase) {
  const imgPrincipal    = document.getElementById('imgPrincipal');
  const fotoPrincipal   = document.getElementById('fotoPrincipal');
  const thumbsContainer = document.getElementById('thumbnailsContainer');

  if (!imgPrincipal || fotos.length === 0) return;

  /* Foto principal */
  imgPrincipal.src = fotos[0];
  imgPrincipal.alt = altBase || 'Foto del trabajo';
  imgPrincipal.style.transition = 'opacity 0.15s ease';
  imgPrincipal.onerror = () => { fotoPrincipal.style.background = '#eee'; };

  /* Thumbnails — solo si hay más de 1 foto */
  if (fotos.length <= 1 || !thumbsContainer) return;

  thumbsContainer.innerHTML = '';

  fotos.forEach((url, i) => {
    const thumb = document.createElement('div');
    thumb.className = `ds-thumb${i === 0 ? ' active' : ''}`;

    const img   = document.createElement('img');
    img.src     = url;
    img.alt     = `Miniatura ${i + 1}`;
    img.loading = 'lazy';
    img.onerror = () => { thumb.style.display = 'none'; };

    thumb.appendChild(img);
    thumbsContainer.appendChild(thumb);

    thumb.addEventListener('click', () => {
      imgPrincipal.style.opacity = '0';
      setTimeout(() => {
        imgPrincipal.src           = url;
        imgPrincipal.alt           = `${altBase || 'Foto'} ${i + 1}`;
        imgPrincipal.style.opacity = '1';
      }, 150);
      document.querySelectorAll('.ds-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

/* ══════════════════════════════════════
   SEO DINÁMICO
══════════════════════════════════════ */
function actualizarSEO(s) {
  const titulo = s.titulo || 'Detalle de trabajo — BC1166 Remodelaciones';
  const desc   = `${s.categoria || 'Remodelación'} en ${s.zona || 'Bogotá'}. ${s.duracion ? `Duración: ${s.duracion}.` : ''} BC1166 Remodelaciones Bogotá.`;
  const img    = s.foto1 || '';

  document.title = `${titulo} — BC1166 Remodelaciones Bogotá`;
  setMeta('name',     'description',    desc);
  setMeta('property', 'og:title',       titulo);
  setMeta('property', 'og:description', desc);
  if (img) setMeta('property', 'og:image', img);
}

/* ══════════════════════════════════════
   HELPERS
══════════════════════════════════════ */
function setText(id, valor) {
  const el = document.getElementById(id);
  if (el) el.textContent = valor || '';
}

function setMeta(attr, name, content) {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function mostrarError(msg) {
  const carga = document.getElementById('mensajeCarga');
  if (carga) carga.innerHTML = `
    <div style="text-align:center; padding:60px 20px;">
      <p style="font-family:var(--font-title); color:var(--bc-gray-dark); font-size:0.95rem;">${msg}</p>
      <a href="servicios.html" style="color:var(--bc-purple); font-weight:600; margin-top:16px; display:inline-block;">
        ← Volver a servicios
      </a>
    </div>`;
}
