# Bar El Jardín — Bolnuevo

Tarjeta de presentación digital del **Bar El Jardín** (Urbanización Playasol 2, Avda. Antonio Segado del Olmo 19, 30877 Bolnuevo — Mazarrón, Murcia).

**Web:** https://bareljardin-bolnuevo.netlify.app/

## Qué hace

- Dice en 5 segundos si el bar está **abierto ahora**, calculado con la hora de Madrid.
- Horarios, cómo llegar (Google Maps), opiniones, Instagram y Facebook.
- **Tres idiomas**: español, inglés y alemán, con el elegido recordado.
- **QR** de la propia tarjeta, para compartirla o imprimirla.
- Se puede **instalar en el móvil** como si fuera una app.
- Todo el contenido se carga desde el propio dominio: **ningún tercero**.

## Estructura

```
index.html          la tarjeta
css/styles.css      todo el diseño y las fuentes (@font-face)
js/i18n.js          traducciones y cambio de idioma
js/horario.js       cálculo de abierto/cerrado
js/app.js           interfaz, QR, accesibilidad y arranque
js/vendor/          librería del QR, autohospedada
assets/img/         logo, palmera, fondo y la imagen para compartir
assets/icons/       favicon e iconos de instalación
assets/fonts/       Inter y Cinzel en .woff2 + licencias OFL
```

## Cómo verlo en local

Lo más rápido: abrir `index.html` con doble clic. Funciona casi todo, pero el
navegador avisará de CORS en el `preload` de la fuente y en el manifest, porque
en `file://` no se permiten. Para verlo limpio, con un servidor local:

```bash
python3 -m http.server 8080
# y abrir http://localhost:8080
```

## Cómo se publica

Netlify sirve **la raíz del repositorio tal cual, sin build**. Dos archivos lo configuran:

- `netlify.toml` — indica qué se publica.
- `_headers` — aplica las **cabeceras de seguridad**: política CSP estricta
  (`script-src 'self'`, sin `unsafe-inline`), `nosniff`, `Referrer-Policy`,
  `Permissions-Policy` y caché de un año para los assets.

## Documentación del proyecto

- [`AGENTS.md`](AGENTS.md) — reglas de trabajo, stack permitido y convenciones.
- [`TAREAS.md`](TAREAS.md) — las 16 tareas del proyecto y su estado.
- [`HISTORIAL.md`](HISTORIAL.md) — registro de cada tarea completada.

## Tecnología

HTML, CSS y JavaScript nativos. **Sin frameworks, sin build y sin dependencias**:
los archivos se publican tal cual.
