# HISTORIAL.md — Registro de tareas completadas

**Proyecto:** Bar El Jardín — Bolnuevo (Mazarrón, Murcia)
**Carpeta:** `bar-jardin/`
**Última actualización:** 2026-10-29

> **REGLA:** aquí **solo** se escribe cuando el usuario responde **«sí»** a la pregunta **«¿Todo OK?»**.
> Cada tarea completada = **una entrada** con los 4 puntos obligatorios. Sin excepciones.
> Referencia del flujo: `AGENTS.md` §5 y §6.

---

## Formato obligatorio de cada entrada

Toda entrada debe contener **estos 4 puntos**, en este orden:

| # | Punto | Qué escribir |
|---|---|---|
| 1 | **¿Qué he realizado?** | Una o dos frases, claro y sin jerga: qué cambia y qué se obtiene |
| 2 | **¿Por qué?** | El problema que existía o el beneficio conseguido. Sin esta parte, la entrada no vale |
| 3 | **¿Dónde verlo en el código?** | Rutas y líneas concretas, con enlaces relativos: `js/app.js:120`, `css/styles.css:34-58` |
| 4 | **¿Cómo comprobar que funciona?** | Pasos reproducibles, numerados, que cualquiera pueda seguir |

Se añaden además los metadatos de la tarea: estado, rama, commit, archivos tocados y fecha.

---

## Plantilla (copiar para cada nueva entrada)

```markdown
## AAAA-MM-DD · Tn — Título de la tarea

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `tipo/tn-descripcion-corta`
**Commit:** `tipo(alcance): mensaje del commit`
**Archivos:** `ruta/uno.js`, `ruta/dos.css`
**Depende de:** Tn-1

### 1. ¿Qué he realizado?

### 2. ¿Por qué?

### 3. ¿Dónde verlo en el código?

### 4. ¿Cómo comprobar que funciona?
```

---

## Índice de tareas completadas

| # | Tarea | Fecha | Rama |
|---|---|---|---|
| T0 | Documentación y contrato de trabajo | 2026-10-29 | `docs/t0-documentacion-base` |
| T1 | Migrar el proyecto a `bar-jardin` (copia literal) | 2026-10-29 | `chore/t1-copia-proyecto` |
| T2 | Extraer el CSS a `css/styles.css` | 2026-10-29 | `refactor/t2-css-externo` |
| T3 | Extraer el JS a `js/` y eliminar los `onclick` inline | 2026-10-29 | `refactor/t3-js-externo` |
| T4 | Recortar las fuentes web cargadas | 2026-10-29 | `perf/t4-recorte-fuentes` |
| T5 | Autohospedar las fuentes (Inter y Cinzel) | 2026-10-29 | `perf/t5-fuentes-locales` |
| T6 | Mover las imágenes a `assets/img/` y optimizar `fondo.webp` | 2026-10-29 | `perf/t6-imagenes` |
| T7 | Quitar el CDN del QR | 2026-10-29 | `perf/t7-qr-local` |
| T8 | Metadatos para compartir y buscadores | 2026-10-29 | `feat/t8-metadatos` |
| T9 | Iconos e instalación en el móvil | 2026-10-29 | `feat/t9-iconos` |
| T10 | Robustez: `localStorage`, portapapeles y `innerHTML` | 2026-10-29 | `fix/t10-robustez` |

---

## Registro

<!-- =====================================================================
     A PARTIR DE AQUÍ SE AÑADEN LAS ENTRADAS (la más reciente al final)
     ===================================================================== -->

## 2026-10-29 · T0 — Documentación y contrato de trabajo

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `docs/t0-documentacion-base`
**Commit:** `docs: añade AGENTS.md, TAREAS.md e HISTORIAL.md`
**Archivos:** `AGENTS.md`, `TAREAS.md`, `HISTORIAL.md` *(el `AGENTS.md` de la raíz del workspace no se versiona: está fuera del repo)*
**Depende de:** —

### 1. ¿Qué he realizado?

He creado la carpeta del proyecto `bar-jardin/` y, dentro, los tres documentos de trabajo:

- **`AGENTS.md`** — el contrato completo: de qué va el bar, tus 5 reglas, el flujo obligatorio de cada tarea, el stack permitido y prohibido, la estructura de carpetas, el contrato de no regresión (lo que no puede cambiar), las reglas de seguridad y accesibilidad, las convenciones y las decisiones pendientes.
- **`TAREAS.md`** — las 16 tareas repartidas en 6 fases, en orden, con sus dependencias, el motivo de cada una y cómo comprobarla.
- **`HISTORIAL.md`** — este registro, con la plantilla de los 4 puntos.

En la raíz del workspace queda además un `AGENTS.md` mínimo que apunta a estos documentos, para que las reglas se lean siempre antes de tocar nada.

### 2. ¿Por qué?

Porque el proyecto no tenía documentación ni control del proceso: cada sesión empezaba de cero y no había forma de saber qué estaba hecho, por qué se hizo así ni cómo comprobarlo. Con esto el trabajo se parte en tareas pequeñas y verificables, cada una se comprueba antes de darla por buena y queda registro de todo.

Y lo más importante: **no se tocó ni una línea del sitio**. Primero el contrato, después la obra.

### 3. ¿Dónde verlo en el código?

| Documento | Qué mirar |
|---|---|
| `bar-jardin/AGENTS.md` | §0 ficha del proyecto · §5 flujo obligatorio · §7 Git · §8 no regresión · §9 calidad · §13 decisiones D1/D2 · §14 prohibiciones |
| `bar-jardin/TAREAS.md` | §2 progreso · §3 decisiones pendientes · §4 orden y dependencias · Fase 0 a Fase 5 |
| `bar-jardin/HISTORIAL.md` | «Formato obligatorio» · «Plantilla» · este registro |
| `AGENTS.md` (raíz del workspace) | Puntero a los documentos del proyecto y carpetas que no se tocan |

No se modificó ningún archivo del sitio: `SUBIR-A-NETLIFY/index.html` conserva su hash original `5D77BCE0…373D`.

### 4. ¿Cómo comprobar que funciona?

1. Existen los tres archivos dentro de `bar-jardin/`.
2. `AGENTS.md` recoge las 5 reglas: decir cómo comprobar y preguntar «¿Todo OK?» · el ✅ solo con tu «sí» · registro obligatorio en `HISTORIAL.md` con sus 4 puntos · código seguro, eficiente y refactorizado · Git y despliegue gestionados por ti.
3. `TAREAS.md` lista las 16 tareas agrupadas por fases y con sus dependencias.
4. `HISTORIAL.md` contiene la plantilla con los 4 puntos.
5. No hay ningún archivo nuevo fuera de `bar-jardin/` salvo el `AGENTS.md` de la raíz, y `SUBIR-A-NETLIFY/` sigue intacta.

---

## 2026-10-29 · T1 — Migrar el proyecto a `bar-jardin` (copia literal)

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `chore/t1-copia-proyecto`
**Commit:** `chore: migra el proyecto a bar-jardin como copia literal`
**Archivos:** `index.html`, `logo.png`, `palmera.png`, `fondo.webp`
**Depende de:** T0

### 1. ¿Qué he realizado?

He copiado el sitio completo — `index.html`, `logo.png`, `palmera.png` y `fondo.webp` — desde `SUBIR-A-NETLIFY/` a la raíz de `bar-jardin/`, **sin modificar nada**: ni una línea, ni un píxel. `bar-jardin/` pasa a ser la única copia del proyecto que se versiona y la que se publicará en Netlify.

### 2. ¿Por qué?

Porque había tres copias del proyecto (raíz del workspace, `SUBIR-A-NETLIFY/` y el `.zip`) y ninguna era "la buena": cualquier cambio podía acabar en el archivo equivocado y desplegarse otro distinto. Ahora el repo tiene una única fuente de verdad y `SUBIR-A-NETLIFY/` queda como respaldo de solo lectura hasta la verificación final (T15).

### 3. ¿Dónde verlo en el código?

- `index.html` — copia íntegra del original (1.343 líneas, 44.833 bytes). Todavía lleva el CSS y el JS **inline**: se separan en T2 y T3.
- `logo.png`, `palmera.png` y `fondo.webp` — en la raíz del repo. Se moverán a `assets/img/` en T6.
- No hay cambios de código: el HTML sigue pidiendo `logo.png`, `palmera.png` y `fondo.webp` con rutas relativas.

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` con doble clic: la tarjeta se ve igual que la desplegada.
2. Comprobar las tres imágenes: logo arriba, palmera en el separador y el fondo tenue al 14 %.
3. Cambiar a inglés y a alemán; abrir «Ver Horarios y Ubicación» y el modal QR.
4. Consola del navegador (`F12`): sin errores en rojo.
5. `git ls-files` dentro de `bar-jardin/` lista los 8 archivos del repo (los 4 del sitio + los 3 `.md` + `README.md`).
6. Comprobación byte a byte: `Get-FileHash` de `index.html`, `logo.png`, `palmera.png` y `fondo.webp` coincide con el de `SUBIR-A-NETLIFY/`.

---

## 2026-10-29 · T2 — Extraer el CSS a `css/styles.css`

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `refactor/t2-css-externo`
**Commit:** `refactor: extrae el CSS a css/styles.css`
**Archivos:** `index.html`, `css/styles.css` (nuevo), `TAREAS.md`, `HISTORIAL.md`, `AGENTS.md`
**Depende de:** T1

### 1. ¿Qué he realizado?

He sacado los 18 KB de CSS que estaban dentro de la etiqueta `<style>` de `index.html` a un archivo propio, `css/styles.css`, y en su lugar he dejado un `<link rel="stylesheet">`. `index.html` pasa de **1.343 a 583 líneas**.

### 2. ¿Por qué?

Tres motivos:

1. **Mantenimiento:** un HTML de 1.343 líneas con 18 KB de estilos en medio es incómodo y propenso a errores.
2. **Caché:** el CSS ya se puede cachear por separado del HTML.
3. **El importante — seguridad:** con `<style>` inline no se puede aplicar una CSP estricta, habría que permitir `'unsafe-inline'`, que anula la protección. Ahora, en T14, se podrá poner `style-src 'self'`.

**No es una mejora de velocidad**: pesa exactamente lo mismo y añade una petición. Es la puerta que abre la CSP.

### 3. ¿Dónde verlo en el código?

- `index.html:21` — el `<link rel="stylesheet" href="css/styles.css">`, colocado **justo donde estaba el `<style>`**, para que el orden de la cascada respecto a Google Fonts no cambie.
- `css/styles.css:1-759` — todo el CSS: `:root` en la línea 7, las 6 `@media` al final, incluida `prefers-reduced-motion`.
- Se ha quitado solo la **indentación base de 4 espacios**. Valores, orden, selectores y comentarios son idénticos: 651 líneas con contenido en el original y 651 en el archivo nuevo.
- UTF-8 sin BOM y saltos de línea LF.

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` y forzar recarga con `Ctrl+F5`: la tarjeta se ve exactamente igual.
2. Comparar lado a lado con `SUBIR-A-NETLIFY/index.html`: indistinguibles.
3. `F12` → Elements → en `<head>` está el `<link>` y **ningún** `<style>`.
4. `F12` → Network → `styles.css` responde 200 (~15,9 KB).
5. Consola limpia, y los efectos `hover` de Maps/Instagram/Facebook (que usan el CSS nuevo) siguen funcionando.

---

## 2026-10-29 · T3 — Extraer el JS a `js/` y eliminar los `onclick` inline

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `refactor/t3-js-externo`
**Commit:** `refactor: extrae el JS a js/ y elimina los onclick inline`
**Archivos:** `index.html`, `js/i18n.js` (nuevo), `js/horario.js` (nuevo), `js/app.js` (nuevo), `TAREAS.md`, `HISTORIAL.md`, `AGENTS.md`
**Depende de:** T2

### 1. ¿Qué he realizado?

He sacado los 11,5 KB de JavaScript que vivían dentro de `index.html` a tres archivos con una responsabilidad cada uno — `js/i18n.js` (traducciones), `js/horario.js` (abierto/cerrado) y `js/app.js` (interfaz y arranque) — y he eliminado los **8 `onclick`** del HTML, que ahora se enlazan con `addEventListener`. `index.html` pasa de **583 a 289 líneas**.

### 2. ¿Por qué?

1. **Seguridad (el motivo importante):** con `onclick=` y `<script>` inline, una CSP estricta tendría que permitir `'unsafe-inline'`, lo que la deja inútil. Sin ellos, en T14 se podrá aplicar `script-src 'self'`.
2. **Estructura:** cada archivo hace una sola cosa y hay **un único punto de arranque** (`iniciar()` en `app.js`).
3. **Riesgo eliminado:** antes, `changeLanguage()` se ejecutaba antes de que existiera `fondoIniciado`. Ahora todo arranca en `DOMContentLoaded`, con los tres scripts ya cargados y en orden (`defer`).

### 3. ¿Dónde verlo en el código?

- `index.html:22-24` — los tres `<script ... defer>` en el `<head>`, en orden i18n → horario → app. Ya no hay ningún bloque `<script>` con código ni ningún `onclick`.
- `index.html` — los botones, ya sin `onclick`. Se añadieron dos `id` nuevos: `qrBtn` (botón del QR) y `qrCloseIcon` (la ✕ del modal).
- `js/i18n.js` — `TRANSLATIONS` (:11-79), `currentLang` (:82) y `changeLanguage()` (:84-117).
- `js/horario.js` — `HORARIOS` (:12-20), `calcularEstadoBar()` (:24-49) y `actualizarBadge()` (:51-59).
- `js/app.js` — desplegable, modal QR, copiar y toast (:8-95); fondo estático (:97-141); arranque con `prepararFondo()`, `enlazarEventos()` e `iniciar()` (:143-215).

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` con `Ctrl+F5`: la tarjeta se ve idéntica.
2. `F12` → Console: sin errores. `document.querySelectorAll('[onclick]').length` devuelve **0**.
3. Network: `i18n.js`, `horario.js` y `app.js` responden 200 y en ese orden.
4. Los 3 idiomas cambian todos los textos y se recuerdan al recargar.
5. El badge muestra Abierto/Cerrado, nunca "Consultando...".
6. El desplegable abre y cierra, el chevron gira y `aria-expanded` cambia de `false` a `true`.
7. El modal QR abre, dibuja el QR y cierra con la ✕, con «Cerrar» y con clic en el fondo.
8. Copiar enlace muestra el toast; los 4 enlaces abren en pestaña nueva.
9. Al desplegar los horarios el fondo **no hace zoom**.

*Verificación automática adicional:* `node --check` en los tres archivos + 22 comprobaciones ejecutando el código en Node con un DOM simulado, comparando `TRANSLATIONS` y `HORARIOS` con el original (idénticos) y probando arranque, idiomas, cajón, modal, portapapeles y fondo.

---

## 2026-10-29 · T4 — Recortar las fuentes web cargadas

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `perf/t4-recorte-fuentes`
**Commit:** `perf: recorta las fuentes web a las que se usan de verdad` + `chore: añade .gitattributes para normalizar los finales de línea`
**Archivos:** `index.html`, `.gitattributes` (nuevo), `TAREAS.md`
**Depende de:** T3

### 1. ¿Qué he realizado?

He dejado en el `<link>` de Google Fonts **solo lo que la tarjeta usa**: Cinzel en peso 900 e Inter en 400/500/600/700/800. Han desaparecido **Playfair Display** (no se usaba en ninguna regla del CSS) y los pesos 600 y 700 de Cinzel. Además se ha creado `.gitattributes` para normalizar los finales de línea a LF.

### 2. ¿Por qué?

- **Corrección:** el CSS pedía una familia completa que la tarjeta nunca usaba y dos pesos de Cinzel que tampoco.
- **`.gitattributes`:** los archivos se estaban guardando en Windows con CRLF y git los veía como modificados, lo que bloqueaba `git pull` una y otra vez (el error *"cannot pull with rebase: You have unstaged changes"*).

**Aviso de honestidad:** al analizar el proyecto estimé un ahorro de 60–80 KB con esta tarea. **La estimación era falsa**: el navegador solo descarga los pesos de fuente que se aplican a texto real, así que Playfair y los Cinzel sobrantes nunca llegaban a descargarse. El ahorro real es de **~1–2 KB de CSS y 6 reglas `@font-face` menos**.

### 3. ¿Dónde verlo en el código?

- `index.html:16` — el nuevo `<link>`: `family=Cinzel:wght@900&family=Inter:wght@400;500;600;700;800&display=swap`.
- `.gitattributes` — `* text=auto eol=lf` y los binarios (`.png`, `.webp`, `.woff2`…) marcados como `binary`.
- Comprobado contra `css/styles.css`: las únicas familias usadas son `Cinzel` e `Inter`; los pesos reales son 500, 600, 700, 800 (+400 por defecto) y 900.

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` con `Ctrl+F5`: la tarjeta se ve idéntica.
2. `F12` → Network → filtro *Font*: ya no aparece ninguna fuente Playfair.
3. Abrir el modal QR: el título «BAR EL JARDÍN» sigue en Cinzel 900, igual que antes.
4. Consola limpia.
5. `git pull` vuelve a funcionar aunque un archivo se guarde en CRLF.

---

## 2026-10-29 · T6 — Mover las imágenes a `assets/img/` y optimizar `fondo.webp`

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `perf/t6-imagenes`
**Commit:** `perf: mueve las imágenes a assets/img y optimiza el fondo`
**Archivos:** `assets/img/logo.png`, `assets/img/palmera.png`, `assets/img/fondo.webp` (nuevos), `index.html`, `TAREAS.md`, `HISTORIAL.md`
**Depende de:** T3

### 1. ¿Qué he realizado?

He movido las tres imágenes de la raíz del repo a `assets/img/`, he actualizado las **5 rutas** de `index.html` (las dos etiquetas `img`, el favicon y `og:image`) y he reducido `fondo.webp` de **103 KB a 73,8 KB**. El peso total del sitio baja de **164,8 KB a 135,5 KB (−18 %)**.

### 2. ¿Por qué?

- **Estructura:** `AGENTS.md` §4 pide `assets/img/`; las imágenes seguían en la raíz porque T1 fue una copia literal.
- **Peso:** el fondo se muestra al **14 % de opacidad** con una máscara que lo desvanece por abajo, así que su detalle no aporta nada y sí pesaba: era el archivo más pesado del sitio.

**Cómo se eligió el tamaño:** recomprimir a 800 px solo ahorraba un 10 % (el archivo ya venía bien comprimido), así que además se redujo el ancho a **560 px** —por encima del ancho de la tarjeta— manteniendo la proporción exacta (0,6617 → 0,6619) para que `object-fit: cover` recorte igual. Se compararon las versiones de 800, 560 y 400 px a tamaño real de tarjeta y al 14 % de opacidad: **indistinguibles**.

### 3. ¿Dónde verlo en el código?

- `assets/img/fondo.webp` (560×846, 73,8 KB), `assets/img/logo.png` (17,2 KB) y `assets/img/palmera.png` (2,2 KB).
- `index.html` — las cinco rutas actualizadas: `og:image`, `<link rel="icon">` y las tres `<img>`.
- Eliminados de la raíz del repo `fondo.webp`, `logo.png` y `palmera.png`; siguen intactos en `SUBIR-A-NETLIFY/` como respaldo de solo lectura.
- `css/styles.css` — se comprobó que **no usa ningún `url()`**, así que no había más rutas que actualizar.

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` con `Ctrl+F5`: la tarjeta se ve idéntica.
2. `F12` → Network: las tres imágenes cargan desde `assets/img/` y ninguna da 404.
3. La pestaña del navegador sigue mostrando el icono (el favicon también se movió).
4. Abrir y cerrar el desplegable de horarios: el fondo no hace zoom.
5. Peso: `fondo.webp` 73,8 KB (antes 103 KB) y total del sitio 135,5 KB (antes 164,8 KB).

---

## 2026-10-29 · T7 — Quitar el CDN del QR

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `perf/t7-qr-local`
**Commit:** `perf: autohospeda la librería del QR y elimina el CDN`
**Archivos:** `js/vendor/qrcode.min.js` (nuevo), `index.html`, `TAREAS.md`, `HISTORIAL.md`
**Depende de:** T3

### 1. ¿Qué he realizado?

He descargado la librería del QR (qrcodejs 1.0.0, 19.927 bytes, licencia MIT) y la he guardado **tal cual** en `js/vendor/qrcode.min.js`. El `<script>` de `index.html` ya no apunta a `cdnjs.cloudflare.com`, sino a ese archivo local. **La tarjeta ya no carga ningún script de terceros.**

### 2. ¿Por qué?

- **Seguridad:** un script de un CDN se ejecuta con los permisos de tu página; si ese CDN se compromete, ejecuta código en tu tarjeta. Autohospedado, el riesgo desaparece.
- **Disponibilidad:** si cdnjs cae o bloquea la petición, el QR dejaría de funcionar.
- **CSP:** para cerrar la política de seguridad en T14 hace falta que `script-src` sea solo `'self'`.
- **Versión fija:** el archivo vive en el repo; nadie lo cambia por debajo.

**No ahorra bytes:** son los mismos ~19,9 KB, solo que ahora vienen de tu dominio.

### 3. ¿Dónde verlo en el código?

- `js/vendor/qrcode.min.js` — copia literal del archivo de cdnjs, sin modificar.
- `index.html:18-21` — el `<script src="js/vendor/qrcode.min.js" defer>` y el comentario con origen, versión, licencia y fecha.
- Comprobado: ningún archivo del proyecto contiene ya una URL de `cdnjs`/`cloudflare`, y `index.html` no carga ningún script remoto.

### 4. ¿Cómo comprobar que funciona?

1. `Ctrl+F5`: la tarjeta se ve idéntica.
2. Abrir el modal QR: el QR se dibuja igual que antes.
3. Escanearlo con el móvil: **en la web publicada abre la propia tarjeta**; si el archivo se abre en local (`file://`), el QR lleva a Google Maps. Ese comportamiento ya existía y está en `js/app.js:41`.
4. `F12` → Network: `qrcode.min.js` responde 200 desde tu dominio y no hay peticiones a cdnjs.
5. Cerrar y reabrir el modal: el QR no se duplica.
6. Consola sin errores.

*Verificación automática:* 9 comprobaciones en Node —la librería se evalúa sin errores, expone `QRCode` y `QRCode.CorrectLevel` con L/M/Q/H (lo que usa `app.js`), sus únicas URLs son namespaces W3C, y el proyecto no referencia el CDN—.

---

## 2026-10-29 · T9 — Iconos e instalación en el móvil

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `feat/t9-iconos`
**Commit:** `feat: añade iconos de instalación y manifest`
**Archivos:** `index.html`, `manifest.webmanifest` (nuevo), `assets/icons/` (5 iconos nuevos), `TAREAS.md`, `HISTORIAL.md`, `AGENTS.md`
**Depende de:** T3

### 1. ¿Qué he realizado?

He generado **cinco iconos** a partir del logotipo y de la palmera, he creado `manifest.webmanifest` y he añadido al `<head>` de `index.html` las cuatro etiquetas necesarias (`icon` para 32 y 48 px, `apple-touch-icon` y `manifest`).

### 2. ¿Por qué?

Antes, si un cliente pulsaba «Añadir a pantalla de inicio», el móvil usaba una **captura de pantalla** como icono y no mostraba ningún nombre. Ahora aparece el logotipo, el nombre «El Jardín» y la tarjeta se abre a pantalla completa (`display: standalone`): parece una app y se reconoce de un vistazo.

Detalle de diseño: en la **pestaña** del navegador se usa la **palmera** (el logotipo es muy ancho y a 32 px es ilegible), y para la **pantalla de inicio** el logotipo cuadrado sobre fondo crema, que es el mismo tono del cuerpo de la tarjeta.

### 3. ¿Dónde verlo en el código?

- `manifest.webmanifest` — `name`, `short_name` «El Jardín», `display: standalone`, `background_color`/`theme_color` crema (`#f7f5f0`) e iconos de 192 y 512.
- `index.html:12-18` — los cuatro `<link>` (dos `icon`, `apple-touch-icon` y `manifest`).
- `assets/icons/favicon-32.png` (2,0 KB), `favicon-48.png` (3,6 KB), `apple-touch-icon.png` 180×180 (8,1 KB), `icon-192.png` (8,7 KB) e `icon-512.png` (25,2 KB).

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` con `Ctrl+F5`: la tarjeta se ve idéntica.
2. La pestaña del navegador muestra **la palmera** como icono.
3. `F12` → Application → Manifest: sin errores ni avisos, con los iconos 192 y 512 y los colores declarados.
4. En el móvil, «Añadir a pantalla de inicio»: icono con el logotipo y el nombre «El Jardín».
5. `F12` → Network: los cinco iconos y el manifest responden 200, ninguno da 404.

---

## 2026-10-29 · T8 — Metadatos para compartir y buscadores

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `feat/t8-metadatos`
**Commit:** `feat: añade metadatos para compartir y la imagen og`
**Archivos:** `index.html` (`<head>`), `assets/img/og-image.jpg` (nuevo), `TAREAS.md`, `AGENTS.md`
**Depende de:** T3 y D1

### 1. ¿Qué he realizado?

He creado una **imagen dedicada para compartir** (`assets/img/og-image.jpg`, 1200×630, 37,3 KB: fondo crema, el logotipo centrado y un filete ámbar, los mismos colores de la tarjeta) y he reescrito el `<head>` con los metadatos completos: `description`, `canonical`, `theme-color`, el bloque **Open Graph** (`og:type`, `og:site_name`, `og:locale`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width/height/alt`) y el bloque **Twitter/X** (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`). Todas las URLs son **absolutas** al dominio canónico.

### 2. ¿Por qué?

Porque `og:image` era una **ruta relativa** (`assets/img/logo.png`) y WhatsApp, Facebook, Telegram, LinkedIn o Instagram **exigen URL absoluta** para mostrar la miniatura: tal como estaba, al compartir la tarjeta **no salía ninguna imagen**, solo un enlace pelado. Además faltaban `canonical` y `description`, que es lo que usan Google y los navegadores.

La imagen nueva tampoco es capricho: el logotipo mide 1200×501 (ratio 2,4:1) y las redes sociales esperan ~1,91:1; con la og de 1200×630 la miniatura no sale recortada.

### 3. ¿Dónde verlo en el código?

- `index.html:8-31` — los tres bloques de metadatos (buscadores, Open Graph, Twitter).
- `assets/img/og-image.jpg` — 1200×630, 37,3 KB.
- `AGENTS.md` §13 — la URL canónica usada en `og:url`, `canonical` y las imágenes.

### 4. ¿Cómo comprobar que funciona?

1. Abrir `bar-jardin/index.html` con `Ctrl+F5`: la tarjeta se ve idéntica, con el mismo título de pestaña.
2. `F12` → Elements → en `<head>` están todas las etiquetas y **ninguna duplicada**.
3. `og:image` y `twitter:image` empiezan por `https://` (no rutas relativas).
4. Abrir `assets/img/og-image.jpg` en el navegador: es la imagen de la miniatura y mide 1200×630.
5. **Pendiente para el despliegue:** cuando la web esté publicada, pegar la URL en un chat o validarla en `opengraph.xyz` debería mostrar imagen, título y descripción. Esta comprobación **no se puede hacer en local**, porque las redes leen el HTML publicado.

---

## 2026-10-29 · T5 — Autohospedar las fuentes (Inter y Cinzel)

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `perf/t5-fuentes-locales`
**Commit:** `perf: autohospeda las fuentes y elimina Google Fonts`
**Archivos:** `css/styles.css`, `assets/fonts/inter.woff2`, `assets/fonts/cinzel-900.woff2`, `OFL-Inter.txt`, `OFL-Cinzel.txt` (todos nuevos), `index.html`, `TAREAS.md`, `HISTORIAL.md`, `AGENTS.md`
**Depende de:** T4 y D2

### 1. ¿Qué he realizado?

He descargado los **mismos archivos `.woff2` que servía Google Fonts**, los he guardado en `assets/fonts/` junto a su licencia SIL OFL 1.1, he añadido las **6 reglas `@font-face`** a `css/styles.css` y he quitado del `<head>` los dos `preconnect` y el `<link>` de Google, dejando un `preload`. **La tarjeta ya no le pide nada a ningún tercero.**

### 2. ¿Por qué?

- **RGPD:** cargar Google Fonts envía la IP de cada visitante a Google. Autohospedando, ese envío desaparece por completo. Para un negocio en España era un riesgo gratuito de eliminar.
- **Velocidad:** dos dominios menos que resolver y conectar (`fonts.googleapis.com` y `fonts.gstatic.com`) y una hoja de estilos externa menos.
- **Independencia:** si Google bloquea o cae, la tipografía se sigue viendo igual.
- **El peso no cambia:** son los mismos ~61 KB.

**Hallazgo que ahorró 190 KB:** Google sirve **los cinco pesos de Inter con el mismo archivo** (idénticos byte a byte, misma URL). Por eso el repo guarda **un** `inter.woff2` de 48 KB en lugar de cinco copias, y **un solo `preload` cubre todos los pesos**.

### 3. ¿Dónde verlo en el código?

- `assets/fonts/inter.woff2` (48,3 KB), `assets/fonts/cinzel-900.woff2` (14,8 KB), `OFL-Inter.txt` y `OFL-Cinzel.txt`.
- `css/styles.css:1-62` — las 6 reglas `@font-face`, con `font-display: swap` y el `unicode-range` exacto que servía Google.
- `index.html` — el `preload` de `inter.woff2` (`as="font"`, `type="font/woff2"`, `crossorigin`).
- Ya no queda ninguna referencia a `fonts.googleapis.com` ni `fonts.gstatic.com` en todo el proyecto.

### 4. ¿Cómo comprobar que funciona?

1. Abrir la tarjeta con `Ctrl+F5`: se ve **idéntica** (son los mismos archivos).
2. `F12` → Network → filtro *Font*: `inter.woff2` responde 200 **desde tu dominio**; ninguna petición a Google.
3. Consola: `document.fonts.check('16px Inter')` → `true`.
4. Abrir el modal QR: carga `cinzel-900.woff2` y el título se ve igual.
5. **Aviso:** abriendo el archivo con doble clic (`file://`), el navegador marca **CORS** en el `preload` de la fuente y en `manifest.webmanifest`. **No es un fallo:** la fuente se carga igual (aparece otra vez con 200 desde `styles.css`) y el manifest solo se usa al instalar la web. Se comprueba limpio con `python3 -m http.server 8080` y `http://localhost:8080`.

---

## 2026-10-29 · T10 — Robustez: `localStorage`, portapapeles e `innerHTML`

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `fix/t10-robustez`
**Commit:** `fix: evita que la tarjeta se bloquee si el navegador niega el almacenamiento`
**Archivos:** `js/i18n.js`, `js/app.js`, `TAREAS.md`
**Depende de:** T3

### 1. ¿Qué he realizado?

He protegido el acceso a `localStorage` con un helper (`ALMACEN`) que captura la excepción, he cambiado el footer de `innerHTML` a `textContent` y he reescrito `copyCardLink` para usar la API moderna `navigator.clipboard`, dejando el método antiguo como respaldo.

### 2. ¿Por qué?

**El bug:** `let currentLang = localStorage.getItem(...) || "es"` se ejecutaba al cargar el script **sin `try/catch`**. Si el navegador niega el almacenamiento —Safari en modo privado, cookies bloqueadas, o el navegador interno de Instagram, Facebook o WhatsApp, que es justo por donde más se abre una tarjeta así— lanzaba una excepción **en la primera línea** y moría todo el script: la tarjeta se quedaba en "Consultando..." para siempre, sin QR y sin desplegable. Un fallo silencioso y bastante probable.

Además, `document.execCommand("copy")` está obsoleto, y escribir el footer con `innerHTML` era incoherente con el resto del código, que usa `textContent` en todo lo demás.

**Degradación intencionada:** si el almacenamiento está bloqueado, la tarjeta funciona completa; simplemente no recuerda el idioma entre visitas.

### 3. ¿Dónde verlo en el código?

- `js/i18n.js` — helper `ALMACEN` con `leer()`/`guardar()` envueltos en `try/catch`; `currentLang` se inicializa con `ALMACEN.leer(...)`; el footer se escribe con `textContent`.
- `js/app.js` — `copyCardLink()` usa `navigator.clipboard.writeText()` y, si no existe o falla, llama a `copiarConSeleccion()`; `mostrarCopiado()` y `mostrarErrorAlCopiar()` centralizan los mensajes.

### 4. ¿Cómo comprobar que funciona?

1. Abrir la tarjeta con `Ctrl+F5`: todo igual.
2. **La prueba del bug:** en Chrome, `chrome://settings/cookies` → *Bloquear todas* → recargar. Antes: badge congelado en "Consultando..." y nada funcionaba. Ahora: la tarjeta funciona completa (badge, idiomas, desplegable, QR y copiar).
3. Volver a permitir las cookies → recargar → el idioma se recuerda otra vez.
4. «Copiar enlace» → toast → `Ctrl+V` pega la URL.
5. Consola limpia.
6. *Verificación automática:* 14 comprobaciones en Node, una de ellas ejecutando el código con un `localStorage` que **lanza excepción**, y las tres vías del portapapeles (API moderna, respaldo y respaldo fallido).
