/* =======================================
   BC1166 REMODELACIONES — blog.js
   Módulo: Listado del blog
   ======================================= */

/**
 * ─────────────────────────────────────────
 * CONFIGURACIÓN
 * Cuando tengas tu Google Sheet publicada:
 *   1. Cambia MODO a 'sheets'
 *   2. Pega la URL en SHEETS_URL
 *
 * Para publicar el Sheet como JSON:
 *   Archivo → Compartir → Publicar en la web
 *   → Hoja 1 → JSON → Copiar URL
 * ─────────────────────────────────────────
 */
const BLOG_CONFIG = {
  MODO: 'demo',   // 'demo' | 'sheets'
  SHEETS_URL: '', // pega aquí tu URL de Google Sheets cuando esté lista
  WA_NUMBER: '573000000000',
};

/* ─── Artículos de demostración ─── */
const ARTICULOS_DEMO = [
  {
    id: '1',
    slug: 'cuanto-cuesta-remodelar-cocina-bogota',
    titulo: '¿Cuánto cuesta remodelar una cocina en Bogotá en 2025?',
    resumen: 'Desglosamos los precios reales por metro cuadrado, materiales y mano de obra para que sepas qué esperar antes de llamar a un contratista.',
    contenido: '## ¿Por qué varían tanto los precios?\n\nUna remodelación de cocina en Bogotá puede costar desde $8 millones hasta $45 millones dependiendo de varios factores clave.\n\n## Factores que determinan el precio\n\n- **Tamaño del espacio**: El precio por m² varía entre $800.000 y $2.500.000\n- **Materiales seleccionados**: Importados vs nacionales puede duplicar el presupuesto\n- **Mano de obra**: Maestros certificados cobran entre $120.000 y $180.000 por día\n- **Instalaciones**: Plomería y electricidad pueden representar hasta el 30% del total\n\n## Tabla de referencia de costos 2025\n\nUna cocina básica de 6m² oscila entre $8M y $15M. Una cocina media entre $15M y $28M. Una cocina premium puede superar los $35M.\n\n## ¿Cómo ahorrar sin sacrificar calidad?\n\nLa clave está en definir dónde invertir y dónde economizar. Los muebles de cocina representan el mayor gasto — aquí conviene no escatimar. En cambio, los pisos pueden ser en porcelanato nacional de buena calidad a la mitad del precio del importado.',
    fecha: '15/04/2025',
    categoria: 'Costos',
    imagen: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    activo: 'TRUE',
  },
  {
    id: '2',
    slug: 'tendencias-diseno-interior-2025',
    titulo: 'Las 7 tendencias de diseño interior que dominan en Bogotá',
    resumen: 'Desde el minimalismo cálido hasta el uso de materiales naturales, te mostramos qué está pidiendo el mercado bogotano este año.',
    contenido: '## El minimalismo cálido llegó para quedarse\n\nLejos del minimalismo frío de años anteriores, los bogotanos están apostando por espacios limpios pero con texturas naturales, maderas y tonos tierra.\n\n## Las 7 tendencias del año\n\n1. **Arcos y formas curvas** en vanos de puertas y nichos\n2. **Madera clara** en pisos, muebles y revestimientos\n3. **Verde salvia y terracota** como colores protagonistas\n4. **Concreto aparente** en paredes y mesones\n5. **Iluminación empotrada** con temperaturas cálidas\n6. **Plantas de interior** como elemento decorativo estructural\n7. **Multifuncionalidad** — espacios que trabajan doble\n\n## ¿Cuál aplica para tu apartamento?\n\nNo todas las tendencias funcionan igual en todos los espacios. Los arcos quedan increíbles en apartamentos de más de 80m², pero pueden achicar espacios pequeños.',
    fecha: '02/04/2025',
    categoria: 'Tendencias',
    imagen: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    activo: 'TRUE',
  },
  {
    id: '3',
    slug: 'como-remodelar-bano-pequeno',
    titulo: 'Cómo remodelar un baño pequeño y que parezca el doble de grande',
    resumen: 'Trucos de arquitectura, selección de baldosas y distribución inteligente para maximizar cada centímetro de tu baño en apartamento.',
    contenido: '## El error más común en baños pequeños\n\nLa mayoría de las personas remodelaciones instalan baldosas pequeñas creyendo que "llenan menos" el espacio. Es el error opuesto: las piezas grandes, bien colocadas, hacen que el baño parezca más amplio.\n\n## Estrategias que realmente funcionan\n\n**1. Una sola baldosa de piso a techo**\nEliminar la división visual entre pared y piso amplía el espacio visualmente hasta un 40%.\n\n**2. Ducha sin puerta o con vidrio transparente**\nLas mamparas con divisiones fragmentan el espacio. Un vidrio limpio de piso a techo transforma el baño.\n\n**3. Sanitario suspendido**\nLibera 15-20 cm de piso visual que hacen una diferencia enorme.\n\n**4. Espejo de pared completa**\nNo el espejo pequeño sobre el lavabo — un espejo de toda la pared duplica visualmente el espacio.\n\n## Colores recomendados\n\nBlancos, grises claros y beige son los más efectivos. Si quieres un toque de color, úsalo solo en un muro de acento.',
    fecha: '20/03/2025',
    categoria: 'Baños',
    imagen: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    activo: 'TRUE',
  },
  {
    id: '4',
    slug: 'pisos-para-remodelacion-cual-elegir',
    titulo: 'Pisos para remodelación: porcelanato, madera o vinílico ¿cuál elegir?',
    resumen: 'Comparamos los tres materiales más populares en proyectos de remodelación en Bogotá: durabilidad, precio, instalación y mantenimiento.',
    contenido: '## Los tres materiales más solicitados en BC1166\n\nEn nuestros proyectos del último año, el 45% de los clientes eligió porcelanato, el 35% vinílico y el 20% madera. Aquí te explicamos por qué.\n\n## Porcelanato\n\n**Ventajas**: Durabilidad excepcional, resistente a humedad, fácil limpieza, amplia variedad de diseños.\n**Desventajas**: Frío al tacto, instalación más compleja, peso considerable.\n**Precio en Bogotá**: $45.000 - $180.000/m² (material + instalación)\n**Ideal para**: Cocinas, baños, zonas de alto tráfico.\n\n## Piso Vinílico (LVT)\n\n**Ventajas**: Cálido al tacto, muy fácil instalación, excelente relación calidad-precio, resistente.\n**Desventajas**: No tolera calor extremo, puede decolorarse con el tiempo.\n**Precio en Bogotá**: $35.000 - $95.000/m²\n**Ideal para**: Habitaciones, salas, oficinas en casa.\n\n## Madera Natural\n\n**Ventajas**: Calidez inigualable, aumenta el valor del inmueble, durable si se cuida.\n**Desventajas**: Sensible a humedad, requiere mantenimiento periódico, mayor costo.\n**Precio en Bogotá**: $85.000 - $250.000/m²\n**Ideal para**: Habitaciones principales, salas de estar, estudios.',
    fecha: '10/03/2025',
    categoria: 'Materiales',
    imagen: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
    activo: 'TRUE',
  },
  {
    id: '5',
    slug: 'iluminacion-led-remodelacion',
    titulo: 'Iluminación LED en remodelaciones: guía práctica para cada espacio',
    resumen: 'Temperatura de color, potencia, ubicación estratégica. Todo lo que necesitas saber para iluminar cocina, sala y habitaciones con LED.',
    contenido: '## Por qué la iluminación transforma más que cualquier otro elemento\n\nPuedes tener los mejores materiales del mundo, pero una iluminación mal diseñada arruina el resultado. Y al contrario: una buena iluminación puede hacer que un espacio económico se vea premium.\n\n## Temperatura de color: la decisión más importante\n\n- **2700K - 3000K (luz cálida)**: Habitaciones, salas, zonas de descanso\n- **3500K - 4000K (luz neutra)**: Cocinas, baños, home office\n- **5000K+ (luz fría)**: Garajes, zonas de trabajo técnico\n\nError frecuente: mezclar temperaturas distintas en el mismo espacio.\n\n## Tipos de luminaria por espacio\n\n**Cocina**: Downlights empotrados en el techo + iluminación bajo muebles altos. Mínimo 300 lux en la zona de trabajo.\n\n**Sala**: Combinación de luz general + lámparas de pie o colgantes como foco decorativo.\n\n**Habitación**: Luz general tenue + puntos de luz en cabecera para leer.\n\n**Baño**: Iluminación frontal al espejo (no desde arriba — genera sombras en el rostro).\n\n## Presupuesto orientativo\n\nUna iluminación bien diseñada para un apartamento de 3 habitaciones en Bogotá cuesta entre $3.5M y $8M instalada.',
    fecha: '01/03/2025',
    categoria: 'Tendencias',
    imagen: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80',
    activo: 'TRUE',
  },
  /*{
    id: '6',
    slug: 'proyecto-apartamento-chapinero',
    titulo: 'Caso real: remodelación completa de apartamento en Chapinero',
    resumen: 'Antes y después de un apartamento de 65m² en Chapinero. Presupuesto, tiempos, decisiones y aprendizajes del proyecto.',
    contenido: '## El proyecto\n\nApartamento de 65m² en Chapinero Alto, construido en los años 90. El cliente quería actualizarlo completamente manteniendo un presupuesto controlado.\n\n## El diagnóstico inicial\n\nAl inspeccionar el apartamento encontramos instalaciones eléctricas de los 90 que necesitaban renovación completa, pisos de baldosa rota en cocina y baño, cocina con muebles originales en madera deteriorada y paredes con humedad en el baño principal.\n\n## Decisiones clave del proyecto\n\n**Lo que priorizamos:**\n- Renovación eléctrica completa (seguridad no negociable)\n- Pisos nuevos en toda la unidad con vinílico gris claro\n- Remodelación completa del baño con ducha de vidrio\n- Cocina nueva en laminado blanco con mesón en cuarzo\n\n**Lo que dejamos para después:**\n- Pintura de los cuartos (el cliente la haría por su cuenta)\n- Cambio de ventanas (no era urgente)\n\n## Presupuesto final\n\nEl proyecto se ejecutó en 28 días con un presupuesto total de $42 millones, dentro del rango acordado.\n\n## El resultado\n\nEl apartamento pasó de verse de los años 90 a parecer completamente nuevo. El cliente lo arrendó 3 semanas después de la entrega a un valor 35% superior al anterior.',
    fecha: '15/02/2025',
    categoria: 'Proyectos',
    imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
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

/* ─── Estado ─── */
let todosLosArticulos = [];
let categoriaActiva   = 'todos';

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', iniciarBlog);

async function iniciarBlog() {
  mostrarCargando(true);

  try {
    let articulos;

    if (BLOG_CONFIG.MODO === 'sheets' && BLOG_CONFIG.SHEETS_URL) {
      articulos = await fetchDeSheets();
    } else {
      await new Promise(r => setTimeout(r, 350));
      articulos = ARTICULOS_DEMO;
    }

    todosLosArticulos = articulos.filter(a => String(a.activo).toUpperCase() === 'TRUE');

    if (todosLosArticulos.length === 0) {
      mostrarCargando(false);
      mostrarVacio(true);
      return;
    }

    renderFiltros(todosLosArticulos);
    renderGrid(todosLosArticulos);
    mostrarCargando(false);

  } catch (err) {
    console.error('[BC1166 Blog]', err);
    mostrarCargando(false);
    mostrarError(true);
  }
}

/* ─── Fetch Google Sheets JSON ─── */
async function fetchDeSheets() {
  const res = await fetch(BLOG_CONFIG.SHEETS_URL);
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

/* ─── Render Filtros ─── */
function renderFiltros(articulos) {
  const container = document.getElementById('blogFilters');
  if (!container) return;

  const categorias = [...new Set(
    articulos.map(a => a.categoria).filter(Boolean)
  )].sort();

  const btnTodos = container.querySelector('[data-cat="todos"]');
  if (btnTodos) btnTodos.addEventListener('click', () => filtrarPorCategoria('todos'));

  categorias.forEach(cat => {
    const btn        = document.createElement('button');
    btn.className    = 'blog-filter';
    btn.dataset.cat  = cat;
    btn.textContent  = cat;
    btn.addEventListener('click', () => filtrarPorCategoria(cat));
    container.appendChild(btn);
  });
}

/* ─── Filtrar ─── */
function filtrarPorCategoria(cat) {
  categoriaActiva = cat;
  document.querySelectorAll('.blog-filter').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  const filtrados = cat === 'todos'
    ? todosLosArticulos
    : todosLosArticulos.filter(a => a.categoria === cat);
  renderGrid(filtrados);
  mostrarVacio(filtrados.length === 0);
}

/* ─── Render Grid ─── */
function renderGrid(articulos) {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = '';
  articulos.forEach((art, i) => grid.appendChild(crearTarjeta(art, i)));
}

/* ─── Crear Tarjeta ─── */
function crearTarjeta(art, index) {
  const card       = document.createElement('article');
  card.className   = 'blog-card';
  card.style.animationDelay = `${index * 70}ms`;

  const url      = `articulo.html?slug=${encodeURIComponent(art.slug || art.id)}`;
  const fechaFmt = formatearFecha(art.fecha);

  card.innerHTML = `
    <a href="${url}" aria-label="Leer: ${escapar(art.titulo)}">
      <div class="blog-card-img">
        ${art.imagen
          ? `<img src="${escapar(art.imagen)}"
                  alt="${escapar(art.titulo)}"
                  loading="lazy"
                  onerror="this.parentElement.innerHTML='<div class=\\'blog-card-img-ph\\'></div>'" />`
          : `<div class="blog-card-img-ph" aria-hidden="true"></div>`
        }
      </div>
    </a>
    <div class="blog-card-body">
      ${art.categoria ? `<span class="card-tag">${escapar(art.categoria)}</span>` : ''}
      <p class="blog-card-date">${fechaFmt}</p>
      <h2 class="blog-card-titulo">
        <a href="${url}">${escapar(art.titulo)}</a>
      </h2>
      <p>${escapar(art.resumen)}</p>
      <a href="${url}" class="blog-card-link">Leer más →</a>
    </div>
  `;

  return card;
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

function escapar(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function mostrarCargando(v) {
  const el = document.getElementById('blogLoading');
  if (el) el.style.display = v ? 'flex' : 'none';
}
function mostrarError(v) {
  const el = document.getElementById('blogError');
  if (el) el.style.display = v ? 'block' : 'none';
}
function mostrarVacio(v) {
  const el = document.getElementById('blogEmpty');
  if (el) el.style.display = v ? 'block' : 'none';
}
