/* ==========================================================================
   1. SISTEMA MULTI-IDIOMA (ESPAÑOL, INGLÉS, ALEMÁN)

   Este archivo solo contiene los textos y la función que los aplica al DOM.
   Se carga ANTES que horario.js y app.js. El arranque de la tarjeta está
   en app.js (no aquí), para que el orden sea siempre el mismo.
   ========================================================================== */

const TRANSLATIONS = {
  es: {
    slogan: "Un paraíso en Bolnuevo",
    howToGet: "¿Cómo llegar?",
    reviewTitle: "Opiniones en Google",
    reviewDesc: "Ver reseñas y fotos del bar",
    btnSchedule: "Ver Horarios y Ubicación",
    titleSchedule: "🕒 Horario de Apertura",
    daysSunThu: "Domingo a Jueves:",
    daysFriSat: "Viernes y Sábados:",
    timeSunThu: "16:00 - 23:00",
    timeFriSat: "16:00 - 00:00",
    locationDesc: "Cerca del Cámping Bolnuevo, Iglesia y acceso desde el Puerto. CP: 30877 Bolnuevo (Mazarrón).",
    footer: "Bar El Jardín • Bolnuevo • Tarjeta Digital Interactiva",
    qrDesc: "Escanea con la cámara del móvil para abrir la tarjeta",
    qrClose: "Cerrar",
    toastCopy: "¡Enlace copiado al portapapeles!",
    toastError: "Error al copiar enlace",
    open: "Abierto",
    closed: "Cerrado"
  },
  en: {
    slogan: "A paradise in Bolnuevo",
    howToGet: "How to get there?",
    reviewTitle: "Google Reviews",
    reviewDesc: "Check reviews and photos",
    btnSchedule: "View Opening Hours & Location",
    titleSchedule: "🕒 Opening Hours",
    daysSunThu: "Sunday to Thursday:",
    daysFriSat: "Friday & Saturday:",
    timeSunThu: "4:00 PM - 11:00 PM",
    timeFriSat: "4:00 PM - 12:00 AM",
    locationDesc: "Near Bolnuevo Camping, Church and direct access from the Port. Postal Code: 30877 Bolnuevo (Mazarrón).",
    footer: "Bar El Jardín • Bolnuevo • Interactive Digital Card",
    qrDesc: "Scan with your phone camera to open the digital card",
    qrClose: "Close",
    toastCopy: "Link copied to clipboard!",
    toastError: "Error copying link",
    open: "Open",
    closed: "Closed"
  },
  de: {
    slogan: "Ein Paradies in Bolnuevo",
    howToGet: "Anfahrt & Wegbeschreibung",
    reviewTitle: "Google-Bewertungen",
    reviewDesc: "Rezensionen & Fotos ansehen",
    btnSchedule: "Öffnungszeiten & Standort",
    titleSchedule: "🕒 Öffnungszeiten",
    daysSunThu: "Sonntag bis Donnerstag:",
    daysFriSat: "Freitag und Samstag:",
    timeSunThu: "16:00 - 23:00 Uhr",
    timeFriSat: "16:00 - 00:00 Uhr",
    locationDesc: "In der Nähe vom Campingplatz Bolnuevo, Kirche und Hafenzufahrt. PLZ: 30877 Bolnuevo (Mazarrón).",
    footer: "Bar El Jardín • Bolnuevo • Interaktive Visitenkarte",
    qrDesc: "Mit der Handykamera scannen, um die Karte zu öffnen",
    qrClose: "Schließen",
    toastCopy: "Link in die Zwischenablage kopiert!",
    toastError: "Fehler beim Kopieren des Links",
    open: "Geöffnet",
    closed: "Geschlossen"
  }
};

/* Almacenamiento a prueba de bloqueos.
   localStorage lanza una excepción si el navegador lo tiene bloqueado (modo
   privado de Safari, cookies bloqueadas, navegadores dentro de apps como
   Instagram). Sin este try/catch, la excepción en la primera línea mataba
   todo el script: la tarjeta se quedaba en "Consultando..." para siempre,
   sin QR y sin desplegable. Si falla, se usa español y no se recuerda el
   idioma, pero todo lo demás funciona. */
const ALMACEN = {
  leer(clave) {
    try {
      return localStorage.getItem(clave);
    } catch {
      return null;
    }
  },
  guardar(clave, valor) {
    try {
      localStorage.setItem(clave, valor);
    } catch {
      /* sin persistencia: la tarjeta funciona igual */
    }
  }
};

// Idioma recordado del visitante. Si no hay nada guardado, español.
let currentLang = ALMACEN.leer("bareljardin_lang") || "es";

function changeLanguage(lang) {
  currentLang = lang;
  ALMACEN.guardar("bareljardin_lang", lang);

  // El idioma real del documento: lo usan los lectores de pantalla para
  // pronunciar bien y los buscadores para indexar en el idioma correcto.
  document.documentElement.lang = lang;

  // Actualizar estilos activos de las banderas y su estado accesible
  ['es', 'en', 'de'].forEach(l => {
    const boton = document.getElementById(`btn-${l}`);
    const activo = l === lang;
    boton.classList.toggle("is-active", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  // Actualizar textos en la interfaz
  const t = TRANSLATIONS[lang];
  document.getElementById("txt-slogan").textContent = t.slogan;
  document.getElementById("txt-howToGet").textContent = t.howToGet;
  document.getElementById("txt-reviewTitle").textContent = t.reviewTitle;
  document.getElementById("txt-reviewDesc").textContent = t.reviewDesc;
  document.getElementById("txt-btnSchedule").textContent = t.btnSchedule;
  document.getElementById("txt-titleSchedule").textContent = t.titleSchedule;
  document.getElementById("txt-daysSunThu").textContent = t.daysSunThu;
  document.getElementById("txt-daysFriSat").textContent = t.daysFriSat;
  document.getElementById("txt-timeSunThu").textContent = t.timeSunThu;
  document.getElementById("txt-timeFriSat").textContent = t.timeFriSat;
  document.getElementById("txt-locationDesc").textContent = t.locationDesc;
  document.getElementById("txt-footer").textContent = t.footer;
  document.getElementById("txt-qrDesc").textContent = t.qrDesc;
  document.getElementById("txt-qrClose").textContent = t.qrClose;

  // Actualizar estado abierto/cerrado con el nuevo idioma
  calcularEstadoBar();

  // Si la traducción cambia el alto de la tarjeta, reajustar el fondo
  if (fondoIniciado) congelarFondo();
}
