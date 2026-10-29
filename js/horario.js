/* ==========================================================================
   2. CÁLCULO EN TIEMPO REAL (Mantiene la lógica interna 24h española):
      - Domingo a Jueves: 16:00 a 23:00
      - Viernes y Sábados: 16:00 a 00:00 (24h)
      (Hora Peninsular Española)

   Solo decide si el bar está abierto y pinta el badge. El arranque (cuándo
   se llama por primera vez y cada cuánto se repite) está en app.js.
   ========================================================================== */

const HORARIOS = {
  0: [{ abre: 16, cierra: 23 }], // Domingo
  1: [{ abre: 16, cierra: 23 }], // Lunes
  2: [{ abre: 16, cierra: 23 }], // Martes
  3: [{ abre: 16, cierra: 23 }], // Miércoles
  4: [{ abre: 16, cierra: 23 }], // Jueves
  5: [{ abre: 16, cierra: 24 }], // Viernes: hasta 00:00
  6: [{ abre: 16, cierra: 24 }]  // Sábado: hasta 00:00
};

let isBarOpen = false;

/* La hora de Madrid con Intl.DateTimeFormat + formatToParts, que es la API
   pensada exactamente para esto: devuelve las partes ya convertidas a la zona
   horaria indicada. El método anterior (toLocaleString + new Date) construía
   una fecha a partir de un texto y dependía de cómo cada navegador
   interpretase ese formato. */
const FORMATO_MADRID = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Madrid",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23"
});

/* Día de la semana (0 = domingo) y hora en Madrid, ahora mismo. */
function ahoraEnMadrid() {
  const partes = {};
  for (const parte of FORMATO_MADRID.formatToParts(new Date())) {
    partes[parte.type] = parte.value;
  }

  // El día se calcula con la fecha ya convertida a Madrid y en UTC, para que
  // la zona horaria del visitante no influya en el resultado.
  const diaSemana = new Date(
    Date.UTC(Number(partes.year), Number(partes.month) - 1, Number(partes.day))
  ).getUTCDay();

  return {
    diaSemana,
    horas: Number(partes.hour),
    minutos: Number(partes.minute)
  };
}

function calcularEstadoBar() {
  const { diaSemana, horas, minutos } = ahoraEnMadrid();
  const horaActualDecimal = horas + (minutos / 60);

  isBarOpen = false;
  const turnosHoy = HORARIOS[diaSemana];

  if (turnosHoy) {
    for (const turno of turnosHoy) {
      if (horaActualDecimal >= turno.abre && horaActualDecimal < turno.cierra) {
        isBarOpen = true;
        break;
      }
    }
  }

  actualizarBadge(isBarOpen);
}

function actualizarBadge(abierto) {
  const badge = document.getElementById("badgeEstado");
  const texto = document.getElementById("badgeTexto");
  const t = TRANSLATIONS[currentLang];

  badge.classList.toggle("is-open", abierto);
  texto.textContent = abierto ? t.open : t.closed;
}
