/* =======================================
   BC1166 REMODELACIONES — articulo.js
   Módulo: Vista de artículo individual
   ======================================= */

/**
 * ─────────────────────────────────────────
 * CONFIGURACIÓN — misma que blog.js
 * Cuando tengas tu Sheet: cambia MODO a 'sheets'
 * y pega la URL en SHEETS_URL
 * ─────────────────────────────────────────
 */
const ARTICULO_CONFIG = {
  MODO: 'demo',   // 'demo' | 'sheets'
  SHEETS_URL: '', // misma URL que en blog.js
  WA_NUMBER: '573000000000',
  WA_MSG_BASE: 'Hola%2C%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20',
  SITE_URL: 'https://bc1166.com',
};

/* ─── Artículos demo (mismo dataset que blog.js) ─── */
const ARTICULOS_DEMO = [
  {
    id: '1',
    slug: 'cuanto-cuesta-remodelar-cocina-bogota',
    titulo: '¿Cuánto cuesta remodelar una cocina en Bogotá en 2025?',
    resumen: 'Desglosamos los precios reales por metro cuadrado, materiales y mano de obra para que sepas qué esperar antes de llamar a un contratista.',
    contenido: '## ¿Por qué varían tanto los precios?\n\nUna remodelación de cocina en Bogotá puede costar desde $8 millones hasta $45 millones dependiendo de varios factores clave.\n\n## Factores que determinan el precio\n\n- **Tamaño del espacio**: El precio por m² varía entre $800.000 y $2.500.000\n- **Materiales seleccionados**: Importados vs nacionales puede duplicar el presupuesto\n- **Mano de obra**: Maestros certificados cobran entre $120.000 y $180.000 por día\n- **Instalaciones**: Plomería y electricidad pueden representar hasta el 30% del total\n\n## ¿Cómo ahorrar sin sacrificar calidad?\n\nLa clave está en definir dónde invertir y dónde economizar. Los muebles de cocina representan el mayor gasto — aquí conviene no escatimar. En cambio, los pisos pueden ser en porcelanato nacional de buena calidad a la mitad del precio del importado.\n\n> **Consejo BC1166**: Siempre pide un presupuesto itemizado. Un presupuesto global sin detalle es señal de alerta.',
    fecha: '15/04/2025',
    categoria: 'Costos',
    imagen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    activo: 'TRUE',
  },
  {
    id: '2',
    slug: 'tendencias-diseno-interior-2025',
    titulo: 'Las 7 tendencias de diseño interior que dominan en Bogotá',
    resumen: 'Desde el minimalismo cálido hasta el uso de materiales naturales, te mostramos qué está pidiendo el mercado bogotano este año.',
    contenido: '## El minimalismo cálido llegó para quedarse\n\nLejos del minimalismo frío de años anteriores, los bogotanos están apostando por espacios limpios pero con texturas naturales, maderas y tonos tierra.\n\n## Las 7 tendencias del año\n\n1. **Arcos y formas curvas** en vanos de puertas y nichos\n2. **Madera clara** en pisos, muebles y revestimientos\n3. **Verde salvia y terracota** como colores protagonistas\n4. **Concreto aparente** en paredes y mesones\n5. **Iluminación empotrada** con temperaturas cálidas\n6. **Plantas de interior** como elemento decorativo estructural\n7. **Multifuncionalidad** — espacios que trabajan doble\n\n## ¿Cuál aplica para tu apartamento?\n\nNo todas las tendencias funcionan igual en todos los espacios. Los arcos quedan increíbles en apartamentos de más de 80m², pero pueden achicar espacios pequeños.\n\n> Nuestro equipo puede asesorarte sobre qué tendencias tienen sentido para tu espacio específico.',
    fecha: '02/04/2025',
    categoria: 'Tendencias',
    imagen: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    activo: 'TRUE',
  },
  {
    id: '3',
    slug: 'como-remodelar-bano-pequeno',
    titulo: 'Cómo remodelar un baño pequeño y que parezca el doble de grande',
    resumen: 'Trucos de arquitectura, selección de baldosas y distribución inteligente para maximizar cada centímetro de tu baño en apartamento.',
    contenido: '## El error más común en baños pequeños\n\nLa mayoría instala baldosas pequeñas creyendo que "llenan menos" el espacio. Es el error opuesto: las piezas grandes, bien colocadas, hacen que el baño parezca más amplio.\n\n## Estrategias que realmente funcionan\n\n**1. Una sola baldosa de piso a techo**\nEliminar la división visual entre pared y piso amplía el espacio visualmente hasta un 40%.\n\n**2. Ducha sin puerta o con vidrio transparente**\nLas mamparas con divisiones fragmentan el espacio. Un vidrio limpio de piso a techo transforma el baño.\n\n**3. Sanitario suspendido**\nLibera 15-20 cm de piso visual que hacen una diferencia enorme.\n\n**4. Espejo de pared completa**\nNo el espejo pequeño sobre el lavabo — un espejo de toda la pared duplica visualmente el espacio.\n\n## Colores recomendados\n\nBlancos, grises claros y beige son los más efectivos. Si quieres un toque de color, úsalo solo en un muro de acento.\n\n> Un baño bien remodelado puede aumentar el valor del inmueble entre un 5% y un 12%.',
    fecha: '20/03/2025',
    categoria: 'Baños',
    imagen: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
    activo: 'TRUE',
  },
  {
    id: '4',
    slug: 'pisos-para-remodelacion-cual-elegir',
    titulo: 'Pisos para remodelación: porcelanato, madera o vinílico ¿cuál elegir?',
    resumen: 'Comparamos los tres materiales más populares en proyectos de remodelación en Bogotá: durabilidad, precio, instalación y mantenimiento.',
    contenido: '## Los tres materiales más solicitados en BC1166\n\nEn nuestros proyectos del último año, el 45% de los clientes eligió porcelanato, el 35% vinílico y el 20% madera.\n\n## Porcelanato\n\n**Ventajas**: Durabilidad excepcional, resistente a humedad, fácil limpieza.\n**Desventajas**: Frío al tacto, instalación más compleja.\n**Precio en Bogotá**: $45.000 - $180.000/m²\n**Ideal para**: Cocinas, baños, zonas de alto tráfico.\n\n## Piso Vinílico (LVT)\n\n**Ventajas**: Cálido al tacto, muy fácil instalación, excelente relación calidad-precio.\n**Desventajas**: No tolera calor extremo, puede decolorarse.\n**Precio en Bogotá**: $35.000 - $95.000/m²\n**Ideal para**: Habitaciones, salas, oficinas en casa.\n\n## Madera Natural\n\n**Ventajas**: Calidez inigualable, aumenta el valor del inmueble.\n**Desventajas**: Sensible a humedad, requiere mantenimiento periódico.\n**Precio en Bogotá**: $85.000 - $250.000/m²\n**Ideal para**: Habitaciones principales, salas de estar.\n\n> ¿No sabes cuál elegir? Cuéntanos tu proyecto y te recomendamos el material ideal para cada espacio.',
    fecha: '10/03/2025',
    categoria: 'Materiales',
    imagen: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80',
    activo: 'TRUE',
  },
  {
    id: '5',
    slug: 'iluminacion-led-remodelacion',
    titulo: 'Iluminación LED en remodelaciones: guía práctica para cada espacio',
    resumen: 'Temperatura de color, potencia, ubicación estratégica. Todo lo que necesitas saber para iluminar cocina, sala y habitaciones con LED.',
    contenido: '## Por qué la iluminación transforma más que cualquier otro elemento\n\nPuedes tener los mejores materiales del mundo, pero una iluminación mal diseñada arruina el resultado. Y al contrario: una buena iluminación puede hacer que un espacio económico se vea premium.\n\n## Temperatura de color: la decisión más importante\n\n- **2700K - 3000K (luz cálida)**: Habitaciones, salas, zonas de descanso\n- **3500K - 4000K (luz neutra)**: Cocinas, baños, home office\n- **5000K+ (luz fría)**: Garajes, zonas de trabajo técnico\n\nError frecuente: mezclar temperaturas distintas en el mismo espacio.\n\n## Tipos de luminaria por espacio\n\n**Cocina**: Downlights empotrados + iluminación bajo muebles altos.\n**Sala**: Combinación de luz general + lámparas decorativas.\n**Habitación**: Luz general tenue + puntos de luz en cabecera.\n**Baño**: Iluminación frontal al espejo — nunca desde arriba.\n\n## Presupuesto orientativo\n\nUna iluminación bien diseñada para un apartamento de 3 habitaciones en Bogotá cuesta entre $3.5M y $8M instalada.',
    fecha: '01/03/2025',
    categoria: 'Tendencias',
    imagen: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&q=80',
    activo: 'TRUE',
  },
  /* {
    id: '6',
    slug: 'proyecto-apartamento-chapinero',
    titulo: 'Caso real: remodelación completa de apartamento en Chapinero',
    resumen: 'Antes y después de un apartamento de 65m² en Chapinero. Presupuesto, tiempos, decisiones y aprendizajes del proyecto.',
    contenido: '## El proyecto\n\nApartamento de 65m² en Chapinero Alto, construido en los años 90. El cliente quería actualizarlo completamente manteniendo un presupuesto controlado.\n\n## El diagnóstico inicial\n\nAl inspeccionar el apartamento encontramos:\n\n- Instalaciones eléctricas de los 90 que necesitaban renovación completa\n- Pisos de baldosa rota en cocina y baño\n- Cocina con muebles originales en madera deteriorada\n- Humedad en el baño principal\n\n## Decisiones clave del proyecto\n\n**Lo que priorizamos:**\n- Renovación eléctrica completa (seguridad no negociable)\n- Pisos nuevos en toda la unidad con vinílico gris claro\n- Remodelación completa del baño con ducha de vidrio\n- Cocina nueva en laminado blanco con mesón en cuarzo\n\n**Lo que dejamos para después:**\n- Pintura de los cuartos (el cliente la haría por su cuenta)\n- Cambio de ventanas (no era urgente)\n\n## El resultado\n\nEl proyecto se ejecutó en **28 días** con un presupuesto total de **$42 millones**. El apartamento se arrendó 3 semanas después de la entrega a un valor **35% superior** al anterior.\n\n> ¿Tienes un proyecto similar? Cuéntanos y hacemos el diagnóstico sin costo.',
    fecha: '15/02/2025',
    categoria: 'Proyectos',
    imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
    activo: 'TRUE',
  }, */

  {
  id: '6',
  slug: 'consejos-cuando-remodelar-tu-propiedad',
  titulo: 'Consejos: cuándo remodelar tu propiedad',
  resumen: 'Guía práctica para identificar el momento correcto para remodelar una propiedad y tomar decisiones inteligentes.',
  contenido: '## ¿Cuándo deberías remodelar tu propiedad?\n\nRemodelar es una decisión estratégica, no emocional. Hacerlo en el momento correcto puede ahorrarte dinero y aumentar el valor del inmueble.\n\n## Consejos clave\n\n- Evalúa primero el estado real de la estructura antes de invertir\n- Prioriza seguridad: electricidad y tuberías van primero\n- No remodeles por estética si hay problemas ocultos\n- Haz mejoras que aumenten el valor del inmueble, no solo lo visual\n- Evita remodelaciones parciales sin planificación general\n\n## Señales claras de que debes remodelar\n\n- Humedades en paredes o techos\n- Instalaciones antiguas o peligrosas\n- Espacios poco funcionales\n- Acabados deteriorados\n- Dificultad para arrendar o vender\n\n## Momento ideal para remodelar\n\n- Antes de vender o arrendar\n- Después de muchos años sin mantenimiento\n- Cuando necesitas adaptar el espacio a nuevas necesidades\n\n## Recomendación\n\nSiempre inicia con un diagnóstico. La remodelación sin diagnóstico genera sobrecostos y errores de ejecución.\n\n> Primero se entiende el problema, luego se interviene la propiedad.',
  fecha: '15/02/2025',
  categoria: 'Consejos',
  imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
  activo: 'TRUE',
  },
];

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', iniciarArticulo);

async function iniciarArticulo() {
  mostrarCargando(true);

  const params = new URLSearchParams(window.location.search);
  const slug   = params.get('slug');
  const id     = params.get('id');

  if (!slug && !id) {
    mostrarCargando(false);
    mostrarError(true);
    return;
  }

  try {
    let articulos;

    if (ARTICULO_CONFIG.MODO === 'sheets' && ARTICULO_CONFIG.SHEETS_URL) {
      articulos = await fetchDeSheets();
    } else {
      await new Promise(r => setTimeout(r, 300));
      articulos = ARTICULOS_DEMO;
    }

    const art = articulos.find(a => {
      if (slug) return a.slug === slug;
      if (id)   return String(a.id) === String(id);
      return false;
    });

    if (!art || String(art.activo).toUpperCase() !== 'TRUE') {
      mostrarCargando(false);
      mostrarError(true);
      return;
    }

    renderArticulo(art);
    actualizarSEO(art);
    mostrarCargando(false);
    mostrarContenedor(true);

  } catch (err) {
    console.error('[BC1166 Artículo]', err);
    mostrarCargando(false);
    mostrarError(true);
  }
}

/* ─── Fetch Google Sheets ─── */
async function fetchDeSheets() {
  const res = await fetch(ARTICULO_CONFIG.SHEETS_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const entries = json.feed?.entry || [];

  return entries.map(entry => {
    const get = key => {
      const cell = entry[`gsx$${key.toLowerCase()}`];
      return cell ? cell.$t.trim() : '';
    };
    return {
      id:        get('id'),
      slug:      get('slug'),
      titulo:    get('titulo'),
      resumen:   get('resumen'),
      contenido: get('contenido'),
      fecha:     get('fecha'),
      categoria: get('categoria'),
      imagen:    get('imagen'),
      activo:    get('activo'),
    };
  });
}

/* ─── Render Artículo ─── */
function renderArticulo(art) {
  // Tag categoría
  const tagEl = document.getElementById('articuloTag');
  if (tagEl && art.categoria) {
    tagEl.innerHTML = `<span class="article-tag">${escapar(art.categoria)}</span>`;
  }

  // Imagen
  const fotoWrap = document.getElementById('articuloFotoWrap');
  const foto     = document.getElementById('articuloFoto');
  if (fotoWrap && foto && art.imagen) {
    foto.src   = art.imagen;
    foto.alt   = art.titulo || 'Imagen del artículo';
    foto.onerror = () => { fotoWrap.style.display = 'none'; };
    fotoWrap.style.display = 'block';
  }

  // Fecha
  const fechaEl = document.getElementById('articuloFecha');
  if (fechaEl) fechaEl.textContent = formatearFecha(art.fecha);

  // Título (h1)
  const tituloEl = document.getElementById('articuloTitulo');
  if (tituloEl) tituloEl.textContent = art.titulo || '';

  // Resumen
  const resumenEl = document.getElementById('articuloResumen');
  if (resumenEl) resumenEl.textContent = art.resumen || '';

  // Contenido markdown
  const contenidoEl = document.getElementById('articuloContenido');
  if (contenidoEl) contenidoEl.innerHTML = markdownToHTML(art.contenido || '');

  // CTA WhatsApp personalizado
  const ctaBtn = document.querySelector('.article-cta-btn');
  if (ctaBtn && art.titulo) {
    const msg = ARTICULO_CONFIG.WA_MSG_BASE + encodeURIComponent(art.titulo);
    ctaBtn.href = `https://wa.me/${ARTICULO_CONFIG.WA_NUMBER}?text=${msg}`;
  }
}

/* ─── SEO dinámico ─── */
function actualizarSEO(art) {
  const titulo      = art.titulo  || 'Artículo | BC1166 Remodelaciones';
  const descripcion = art.resumen || 'Artículos y consejos de remodelación en Bogotá. BC1166 Remodelaciones.';
  const imagen      = art.imagen  || `${ARTICULO_CONFIG.SITE_URL}/img/og-blog.jpg`;
  const url         = `${ARTICULO_CONFIG.SITE_URL}/articulo.html?slug=${encodeURIComponent(art.slug || art.id)}`;
  const fechaISO    = parsearFechaISO(art.fecha);

  document.title = `${titulo} | BC1166 Remodelaciones Bogotá`;

  setMeta('name',     'description',      descripcion);
  setMeta('property', 'og:title',         titulo);
  setMeta('property', 'og:description',   descripcion);
  setMeta('property', 'og:image',         imagen);
  setMeta('property', 'og:url',           url);
  setMeta('name',     'twitter:title',    titulo);
  setMeta('name',     'twitter:description', descripcion);
  setMeta('name',     'twitter:image',    imagen);

  // Canonical
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;

  // Schema.org Article
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': titulo,
    'description': descripcion,
    'image': imagen,
    'url': url,
    'datePublished': fechaISO,
    'inLanguage': 'es-CO',
    'author': {
      '@type': 'Organization',
      'name': 'BC1166 Remodelaciones',
      'url': ARTICULO_CONFIG.SITE_URL,
    },
    'publisher': {
      '@type': 'LocalBusiness',
      'name': 'BC1166 Remodelaciones',
      'url': ARTICULO_CONFIG.SITE_URL,
      'logo': `${ARTICULO_CONFIG.SITE_URL}/img/logo.png`,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bogotá',
        'addressCountry': 'CO',
      },
    },
    ...(art.categoria && { 'articleSection': art.categoria }),
  };

  const schemaEl = document.getElementById('schemaArticle');
  if (schemaEl) schemaEl.textContent = JSON.stringify(schema, null, 2);
}

/* ─── Markdown → HTML (parser ligero) ─── */
function markdownToHTML(md) {
  if (!md) return '';

  // Saltos de línea literales del Sheet
  md = md.replace(/\\n/g, '\n');

  const lines  = md.split('\n');
  const output = [];
  let inUl = false, inOl = false;

  const closeList = () => {
    if (inUl) { output.push('</ul>'); inUl = false; }
    if (inOl) { output.push('</ol>'); inOl = false; }
  };

  const parseInline = str =>
    str
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g,     '<em>$1</em>')
      .replace(/_(.+?)_/g,       '<em>$1</em>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Encabezados
    if (/^### (.+)/.test(line)) {
      closeList();
      output.push(`<h3>${parseInline(line.slice(4))}</h3>`);
      continue;
    }
    if (/^## (.+)/.test(line)) {
      closeList();
      output.push(`<h2>${parseInline(line.slice(3))}</h2>`);
      continue;
    }
    if (/^# (.+)/.test(line)) {
      closeList();
      output.push(`<h2>${parseInline(line.slice(2))}</h2>`);
      continue;
    }

    // Blockquote
    if (/^> (.+)/.test(line)) {
      closeList();
      output.push(`<blockquote>${parseInline(line.slice(2))}</blockquote>`);
      continue;
    }

    // HR
    if (/^---$/.test(line)) {
      closeList();
      output.push('<hr />');
      continue;
    }

    // Lista no ordenada
    if (/^[-*] (.+)/.test(line)) {
      if (!inUl) { if (inOl) { output.push('</ol>'); inOl = false; } output.push('<ul>'); inUl = true; }
      output.push(`<li>${parseInline(line.replace(/^[-*] /, ''))}</li>`);
      continue;
    }

    // Lista ordenada
    if (/^\d+\. (.+)/.test(line)) {
      if (!inOl) { if (inUl) { output.push('</ul>'); inUl = false; } output.push('<ol>'); inOl = true; }
      output.push(`<li>${parseInline(line.replace(/^\d+\. /, ''))}</li>`);
      continue;
    }

    // Línea vacía
    if (line.trim() === '') {
      closeList();
      continue;
    }

    // Párrafo normal
    closeList();
    output.push(`<p>${parseInline(line)}</p>`);
  }

  closeList();
  return output.join('\n');
}

/* ─── Helpers ─── */
function formatearFecha(str) {
  if (!str) return '';
  try {
    let d;
    if (str.includes('/')) {
      const [day, month, year] = str.split('/');
      d = new Date(`${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`);
    } else {
      d = new Date(str);
    }
    return d.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch { return str; }
}

function parsearFechaISO(str) {
  if (!str) return '';
  try {
    if (str.includes('/')) {
      const [day, month, year] = str.split('/');
      return `${year}-${month.padStart(2,'0')}-${day.padStart(2,'0')}`;
    }
    return str;
  } catch { return ''; }
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

function escapar(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function mostrarCargando(v) {
  const el = document.getElementById('articuloLoading');
  if (el) el.style.display = v ? 'flex' : 'none';
}
function mostrarError(v) {
  const el = document.getElementById('articuloError');
  if (el) el.style.display = v ? 'block' : 'none';
}
function mostrarContenedor(v) {
  const el = document.getElementById('articuloContainer');
  if (el) el.style.display = v ? 'block' : 'none';
}
