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

function calcularEstadoBar() {
  const ahora = new Date();
  const horaEspanaStr = ahora.toLocaleString("en-US", { timeZone: "Europe/Madrid" });
  const fechaEspana = new Date(horaEspanaStr);

  const diaSemana = fechaEspana.getDay();
  const horas = fechaEspana.getHours();
  const minutos = fechaEspana.getMinutes();
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
