/* ==========================================================================
   3. MODAL QR, DESPLEGABLE DE HORARIOS Y ACCIONES

   Toda la interacción de la tarjeta. Los botones se enlazan aquí con
   addEventListener (en el HTML no queda ningún onclick), que es lo que
   permite aplicar después una CSP estricta.
   ========================================================================== */

function toggleInfoSection() {
  const drawer = document.getElementById("infoDrawer");
  const icon = document.getElementById("chevronIcon");
  const boton = document.getElementById("btnSchedule");

  // toggle() devuelve true cuando acaba de añadir "hidden" (es decir, al cerrar)
  const cerrado = drawer.classList.toggle("hidden");

  icon.classList.toggle("is-open", !cerrado);
  boton.setAttribute("aria-expanded", String(!cerrado));

  // Al cerrar el desplegable la tarjeta vuelve a su alto original:
  // se recalcula el fondo con ese alto
  if (cerrado) congelarFondo();
}

let qrGenerated = false;
function openQrModal() {
  const modal = document.getElementById("qrModal");

  // La librería del QR se carga con defer: si aún no ha llegado,
  // se abre el modal en cuanto el navegador la tenga lista
  if (!qrGenerated && typeof QRCode === "undefined") {
    window.addEventListener("load", openQrModal, { once: true });
    return;
  }

  modal.classList.remove("hidden");

  if (!qrGenerated) {
    const qrContainer = document.getElementById("qrcodeCanvas");
    qrContainer.innerHTML = "";
    const currentUrl = window.location.href.startsWith("http") ? window.location.href : "https://maps.google.com/?q=Avda.+Antonio+Segado+del+Olmo,+19,+30877+Bolnuevo,+Murcia";

    new QRCode(qrContainer, {
      text: currentUrl,
      width: 180,
      height: 180,
      colorDark: "#1c1917",
      colorLight: "#fafaf9",
      correctLevel: QRCode.CorrectLevel.M
    });
    qrGenerated = true;
  }
}

function closeQrModal() {
  document.getElementById("qrModal").classList.add("hidden");
}

function copyCardLink() {
  const tempInput = document.createElement("input");
  tempInput.value = window.location.href;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    showToast(TRANSLATIONS[currentLang].toastCopy);
  } catch (e) {
    showToast(TRANSLATIONS[currentLang].toastError);
  }
  document.body.removeChild(tempInput);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2500);
}

/* ==========================================================================
   4. FONDO ESTÁTICO (SIN "ZOOM" AL DESPLEGAR EL HORARIO)

   La capa del fondo ocupa la tarjeta completa. Cuando se abre el
   desplegable, la tarjeta crece en alto y la imagen, al ser
   object-fit: cover + height: 100%, tenía que reescalarse para seguir
   cubriendo: eso era el "zoom".

   Solución: se mide la altura de la tarjeta CON el desplegable cerrado
   y se fija en la capa del fondo. La tarjeta puede crecer libremente,
   la imagen ya no cambia de tamaño.
   ========================================================================== */

let fondoIniciado = false;

function congelarFondo() {
  const capa = document.getElementById("bgLayer");
  const tarjeta = document.querySelector("main");
  const cajon = document.getElementById("infoDrawer");
  if (!capa || !tarjeta || !cajon) return;

  // Con el desplegable abierto la tarjeta está más alta: no se mide
  if (!cajon.classList.contains("hidden")) return;

  const alto = tarjeta.clientHeight;
  if (!alto) return;

  capa.style.height = alto + "px";
  fondoIniciado = true;
}

/* ==========================================================================
   5. ARRANQUE

   Único punto de entrada. Los tres archivos se cargan con defer, en el
   orden i18n.js → horario.js → app.js, así que aquí ya existen todas las
   funciones. Se ejecuta en DOMContentLoaded: antes de eso el DOM no está
   garantizado.
   ========================================================================== */

function prepararFondo() {
  // Primer cálculo + repeticiones (las fuentes web pueden terminar de
  // aplicarse después y cambiar el alto real de la tarjeta)
  congelarFondo();
  requestAnimationFrame(function () {
    congelarFondo();
    requestAnimationFrame(congelarFondo);
  });
  window.addEventListener("load", congelarFondo);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(congelarFondo);
  }

  // Si la tarjeta cambia de alto por cualquier motivo (imágenes, idioma,
  // textos), se vuelve a congelar. Mientras el desplegable está abierto
  // la función sale sin hacer nada.
  if (window.ResizeObserver) {
    new ResizeObserver(congelarFondo).observe(document.querySelector("main"));
  }

  // Al girar el móvil o cambiar el tamaño de la ventana
  let fondoResizeRaf;
  window.addEventListener("resize", function () {
    cancelAnimationFrame(fondoResizeRaf);
    fondoResizeRaf = requestAnimationFrame(congelarFondo);
  });
  window.addEventListener("orientationchange", function () {
    setTimeout(congelarFondo, 350);
  });
}

function enlazarEventos() {
  // Banderas de idioma
  document.getElementById("btn-es").addEventListener("click", () => changeLanguage("es"));
  document.getElementById("btn-en").addEventListener("click", () => changeLanguage("en"));
  document.getElementById("btn-de").addEventListener("click", () => changeLanguage("de"));

  // Barra superior: copiar enlace y abrir el QR
  document.getElementById("copyBtn").addEventListener("click", copyCardLink);
  document.getElementById("qrBtn").addEventListener("click", openQrModal);

  // Desplegable de horarios
  document.getElementById("btnSchedule").addEventListener("click", toggleInfoSection);

  // Cerrar el modal: la ✕ y el botón "Cerrar"
  document.getElementById("qrCloseIcon").addEventListener("click", closeQrModal);
  document.getElementById("txt-qrClose").addEventListener("click", closeQrModal);

  // Clic en el fondo oscuro del modal
  const modal = document.getElementById("qrModal");
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeQrModal();
  });
}

function iniciar() {
  enlazarEventos();

  // Idioma inicial (también pinta el badge de abierto/cerrado)
  changeLanguage(currentLang);
  setInterval(calcularEstadoBar, 60000);

  prepararFondo();
}

document.addEventListener("DOMContentLoaded", iniciar);
