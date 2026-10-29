# AGENTS.md — Bar El Jardín · Tarjeta digital

> **⚠️ LÉEME PRIMERO, SIEMPRE.**
> Antes de tocar una sola línea de este proyecto: leer este archivo completo y después `TAREAS.md`.
> Si algo de aquí contradice una instrucción nueva del usuario, **preguntar antes de actuar**.
> Última actualización: 2026-10-29

---

## 0. Ficha del proyecto

| Campo | Valor |
|---|---|
| **Qué es** | Tarjeta de visita / presentación digital del **Bar El Jardín** |
| **Dónde** | Urbanización Playasol 2 — Avda. Antonio Segado del Olmo, 19 — CP 30877 **Bolnuevo (Mazarrón, Murcia)** |
| **Tipo** | Página web estática de una sola vista (one-page / link-in-bio) |
| **Objetivo** | Que un cliente que escanea un QR (o recibe el enlace por WhatsApp) vea en **5 segundos**: si el bar está abierto, los horarios, cómo llegar, las reseñas, el Instagram y el Facebook — en su idioma |
| **Usuario real** | Cliente del bar, sobre todo en **móvil**. Turistas españoles, ingleses y alemanes |
| **Idiomas** | Español (por defecto), inglés, alemán |
| **Repo** | `bar-jardin` (GitHub). **Toda la gestión de Git es del usuario** |
| **Hosting** | Netlify, despliegue estático, sin build. **Toda el despliegue es del usuario** |
| **Carpeta de trabajo** | `bar-jardin/` — es la raíz del repo y la raíz que publica Netlify |
| **Estado** | Fase 1 — estructura. Ver `TAREAS.md` |

---

## 1. Punto de partida (de dónde venimos)

Versión original en `SUBIR-A-NETLIFY/`:

| Archivo | Peso | Observaciones |
|---|---|---|
| `index.html` | 44,8 KB / 1.343 líneas | CSS (~23 KB) y JS (~9 KB) **inline** |
| `fondo.webp` | 103 KB | 800×1209 px, se usa a `opacity: .14` |
| `logo.png` | 17,2 KB | 1200×501 px |
| `palmera.png` | 2,2 KB | 120×120 px |

Sin `netlify.toml`, sin `_headers`, sin `.gitignore`, sin `README`, sin iconos de instalación.

**Copias duplicadas** (ojo, no editar la equivocada): `index.html` + imágenes en la raíz del workspace, en `SUBIR-A-NETLIFY/` y en `SUBIR-A-NETLIFY.zip`. `originales/` guarda los PNG sin comprimir y **no se publica**.

---

## 2. Mapa del código original

Referencia para orientarse dentro de `SUBIR-A-NETLIFY/index.html`:

| Zona | Líneas | Contenido |
|---|---|---|
| `<head>` | 3–19 | título, `og:*`, favicon, Google Fonts, QRCode.js (CDN) |
| CSS | 21–781 | todo el diseño (variables, tarjeta, topbar, botonera, modal, toast, animaciones) |
| HTML tarjeta | 787–1017 | topbar + banderas, logo, badge de estado, botonera de enlaces, footer |
| Modal QR | 1020–1039 | `#qrModal` |
| Toast | 1042–1044 | `#toast` |
| JS · multi-idioma | 1050–1146 | `TRANSLATIONS`, `changeLanguage()` |
| JS · horario | 1154–1202 | `HORARIOS`, `calcularEstadoBar()`, `actualizarBadge()` |
| JS · UI | 1207–1283 | drawer, modal QR, copiar enlace, toast |
| JS · fondo | 1295–1340 | `congelarFondo()` + observers |

---

## 3. Tecnologías

### Permitido
- **HTML5** semántico.
- **CSS3** nativo, con custom properties (`--stone-900`, `--amber-500`…).
- **JavaScript ES2020+** nativo, sin dependencias.
- **Netlify** para hosting (estático).
- **Git + GitHub** (los maneja el usuario).

### Prohibido sin autorización expresa
- Frameworks: React, Vue, Svelte, Angular.
- Meta-frameworks: Next, Nuxt, **Astro**.
- Bundlers o build: Vite, Webpack, Parcel, esbuild, PostCSS.
- **TypeScript**, JSX, preprocesadores CSS (Sass/Less/Stylus).
- jQuery, Tailwind, Bootstrap, cualquier librería de UI.
- **Cualquier script, fuente o asset servido desde un CDN de terceros.**
- `node_modules` / `npm install` en este proyecto.

> **No hay paso de build.** Los archivos se publican tal cual. Si una tarea parece necesitar un bundler, la tarea está mal planteada: preguntar.

---

## 4. Estructura objetivo

```
bar-jardin/                     ← raíz del repo y raíz publicada
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── i18n.js                 ← traducciones + cambio de idioma
│   ├── horario.js              ← cálculo abierto/cerrado
│   ├── app.js                  ← drawer, QR, copiar, fondo, init
│   └── vendor/                 ← solo lo imprescindible (QR), autohospedado
├── assets/
│   ├── img/                    ← logo.png, palmera.png, fondo.webp, og-image.jpg
│   ├── icons/                  ← favicon, apple-touch-icon, 192/512
│   └── fonts/                  ← woff2 autohospedados + OFL.txt
├── netlify.toml
├── _headers
├── robots.txt
├── 404.html
├── AGENTS.md                   ← este archivo
├── TAREAS.md
├── HISTORIAL.md
├── README.md
└── .gitignore
```

Reglas de estructura:
- **No fragmentar sin motivo.** 3 archivos JS es el máximo razonable. Nada de `utils/`, `components/`, `services/`.
- `index.html` en la **raíz** (nada de `public/` ni `dist/`): es lo menos propenso a error en Netlify.
- Las rutas de assets siempre **relativas** (`assets/img/logo.png`), nunca absolutas desde la raíz del dominio.

---

## 5. Flujo obligatorio de trabajo (REGLA 1 y REGLA 2)

Este ciclo **no se salta nunca**. Cada tarea, una vuelta completa.

1. **Leer** este `AGENTS.md` y `TAREAS.md`. Elegir **la siguiente tarea pendiente** por orden (si conviene cambiar el orden, justificarlo).
2. **Marcar** la tarea como 🔧 *En curso* en `TAREAS.md`.
3. **Implementar solo esa tarea.** Prohibido colar cambios de otras tareas en el mismo trabajo.
4. **Informar** al usuario con:
   - qué se ha hecho,
   - qué archivos se han tocado,
   - **cómo comprobarlo paso a paso**, en lenguaje claro,
   - y la pregunta literal: **«¿Todo OK?»**
5. **Parar y esperar.** No se avanza a la siguiente tarea bajo ningún concepto.
6. Cuando el usuario responde **«sí»**:
   - marcar **✅ Completada** en `TAREAS.md`,
   - añadir la entrada correspondiente en `HISTORIAL.md`,
   - indicar **qué subir a GitHub** (rama propuesta, mensaje de commit y archivos) y **cuándo hacerlo**.
7. Si el usuario dice que algo falla: volver al paso 3, corregir y repetir el paso 4. La tarea **no** se marca ✅.

Estados posibles en `TAREAS.md`: `⏳ Pendiente` · `🔧 En curso` · `👀 Esperando tu OK` · `✅ Completada` · `⛔ Bloqueada`.

---

## 6. Reglas de documentación (REGLA 3)

### `TAREAS.md`
- Lista viva de tareas, agrupadas por fases, con dependencias explícitas.
- **Solo una tarea en 🔧 En curso** a la vez.
- Una tarea pasa a ✅ **únicamente** con el «sí» del usuario.

### `HISTORIAL.md` — registro obligatorio

> **RECORDAR SIEMPRE:** al terminar una tarea y recibir el «sí», se registra en `HISTORIAL.md`. Sin excepciones.

Cada entrada lleva **obligatoriamente** estos 4 puntos:

1. **¿Qué he realizado?** — en una o dos frases, sin jerga innecesaria.
2. **¿Por qué?** — el problema que resolvía o el beneficio.
3. **¿Dónde verlo en el código?** — rutas y líneas concretas (`js/app.js:120`).
4. **¿Cómo comprobar que funciona?** — pasos reproducibles.

Formato:

```markdown
## AAAA-MM-DD · Tn — Título de la tarea

**Estado:** ✅ Completada
**Rama:** `tipo/tn-descripcion`
**Commit:** `fix: mensaje`
**Archivos:** `ruta/a.js`, `ruta/b.css`

### 1. ¿Qué he realizado?
### 2. ¿Por qué?
### 3. ¿Dónde verlo en el código?
### 4. ¿Cómo comprobar que funciona?
```

---

## 7. Reglas de Git y GitHub (REGLA 5)

- **La gestión de Git y GitHub la hace el usuario. El agente NO ejecuta comandos de git** (`git init`, `add`, `commit`, `push`, `branch`, `merge`, `gh`, ni toca `.git/config`, ni crea repos, ni abre PRs).
- Cuando una tarea queda completada, el agente indica:
  1. **Cuándo** subirla (siempre después del «sí» a «¿Todo OK?» y antes de empezar la siguiente).
  2. **Qué archivos** entran en el commit.
  3. **Nombre de rama** propuesto.
  4. **Mensaje de commit** propuesto (formato Conventional Commits: `feat:`, `fix:`, `perf:`, `refactor:`, `docs:`, `chore:`).
  5. Una **descripción breve para el Pull Request**.
- Ramas: `tipo/tn-descripcion-corta` → PR a `main`. Una rama y un PR por tarea.
- Nunca proponer `git push --force` ni commits directos a `main`.

---

## 8. Contrato de no regresión (lo que NO puede cambiar)

> **La tarjeta debe verse y comportarse exactamente igual.** El código puede cambiar; el resultado visible y el comportamiento, no.

**Inmutable:**
- Colores, tipografías visibles, tamaños, espaciados, sombras, bordes y radios.
- Disposición y orden de los elementos.
- Animaciones y su temporización (`slideUpFade`, `subtleFloat`, `calmPulse`).
- Los textos y traducciones actuales (salvo corrección ortográfica acordada).
- Funcionalidad: 3 idiomas persistidos, badge abierto/cerrado en tiempo real, desplegable de horarios, modal QR, copiar enlace + toast, los 4 enlaces externos, y **el fondo que no hace zoom** al desplegar.
- Los `id` y clases existentes del DOM, salvo que la tarea lo justifique y se actualicen todos los usos.

**Cualquier cambio que se vea en pantalla debe avisarse y justificarse ANTES de hacerlo.**

---

## 9. Reglas de calidad del código (REGLA 4)

### Seguro
- CSP estricta posible: **cero `onclick`/`onload` inline**, cero `<style>` inline, cero `eval`, cero `document.write`, cero `innerHTML` con datos.
- Todo texto dinámico va con `textContent`.
- Enlaces externos: siempre `rel="noopener noreferrer"` y `target="_blank"`.
- Acceso a `localStorage` **siempre** con `try/catch` (si el navegador lo bloquea, la tarjeta debe seguir funcionando).
- Sin dependencias de terceros servidas desde CDN.
- Cabeceras de seguridad en `_headers`.

### Eficiente
- Nada de librerías para resolver algo que cabe en 20 líneas.
- Imágenes optimizadas y con `width`/`height` (sin saltos de layout).
- Solo los pesos de fuente que se usan de verdad.
- Animaciones que no disparen `layout`/`paint` innecesarios; `requestAnimationFrame` y `ResizeObserver` donde haga falta.
- Presupuesto de arranque: **< 120 KB propios** (sin contar fuentes) y primera pintura útil rápida en 4G.

### Refactorizado y estructurado
- Una responsabilidad por función; funciones cortas y con nombre en español (`calcularEstadoBar`, `congelarFondo`), manteniendo el estilo del código actual.
- Sin código muerto, sin variables huérfanas, sin duplicación de strings.
- Sin variables globales sueltas: encapsular en un namespace o en módulos.
- Comentarios en español, explicando **por qué**, no **qué**.
- Sin dependencias circulares entre `i18n.js`, `horario.js` y `app.js`. El arranque se centraliza en `app.js` dentro de `DOMContentLoaded`.

---

## 10. Accesibilidad (obligatoria)

- `<html lang>` debe reflejar el idioma activo.
- Todo control tiene `aria-label` o texto visible; estado con `aria-pressed` / `aria-expanded`.
- Modal: cierra con `Escape`, atrapa el foco, bloquea el scroll del fondo y **devuelve el foco** al botón que lo abrió.
- Avisos dinámicos (toast) con `aria-live="polite"`.
- Foco visible en todos los elementos interactivos.
- Respetar `prefers-reduced-motion` (ya implementado; **no romperlo**).
- Áreas táctiles de al menos 44×44 px efectivos.

---

## 11. Cómo probar en local

Sin instalar nada (todo es relativo y no hay backend):

1. **Abrir `bar-jardin/index.html`** con doble clic en el navegador. Funciona para el 95 % de las pruebas.
2. Si algo necesita cabeceras o rutas más realistas: servidor local en `bar-jardin/` con `python -m http.server 8080` y abrir `http://localhost:8080`.
3. Probar **siempre** en móvil simulado (DevTools, 390×844) **y** escritorio.
4. Comprobar la consola: **debe estar limpia** (sin errores ni warnings nuevos).
5. Pruebas mínimas en cada tarea: los 3 idiomas, recargar (persistencia), drawer abrir/cerrar, modal QR, copiar enlace, los 4 enlaces.

---

## 12. Convenciones

- **Nombres de archivo y carpeta:** minúsculas y kebab-case (`og-image.jpg`, `apple-touch-icon.png`).
- **CSS:** clases en kebab-case; modificadores con `--` (`link-row--maps`); variables en `:root`.
- **JS:** `const`/`let` (nunca `var` en código nuevo), funciones declaradas con nombre, identificadores en español.
- **HTML:** 2 espacios de indentación; atributos entre comillas dobles; orden `class` → `id` → `aria-*` → `data-*`.
- **Codificación:** UTF-8 sin BOM.

---

## 13. Decisiones pendientes del usuario

| ID | Decisión | Bloquea | Recomendación |
|---|---|---|---|
| **D1** | **Dominio definitivo**: ¿`algo.netlify.app` o dominio propio (`bareljardin.es`…)? | T7 (opción QR estático), T8 (metadatos sociales y `canonical`) — y **los QR que se impriman** | Decidirlo ya: un QR impreso fija la URL para siempre |
| **D2** | ¿Se autohospedan las fuentes? Implica subir `.woff2` al repo (licencia OFL, permitido) | T5 | Sí: mismo render, menos peso y evita enviar la IP del visitante a Google (RGPD) |

---

## 14. Prohibiciones explícitas

- ❌ Rediseñar, "modernizar" o reinterpretar el estilo.
- ❌ Cambiar textos, colores o medidas porque "queda mejor".
- ❌ Añadir dependencias, frameworks o CDNs.
- ❌ Ejecutar comandos de Git/GitHub.
- ❌ Marcar una tarea como completada sin el «sí» explícito del usuario.
- ❌ Hacer dos tareas a la vez.
- ❌ Tocar archivos fuera de `bar-jardin/` (salvo leer `SUBIR-A-NETLIFY/` como referencia).
- ❌ Mentir sobre lo verificado: si algo no se ha probado, se dice.

---

## 15. Cambios de este documento

| Fecha | Cambio |
|---|---|
| 2026-10-29 | Versión inicial. Ficha del proyecto, 5 reglas del usuario, flujo obligatorio, stack, estructura, contrato de no regresión y convenciones. |
