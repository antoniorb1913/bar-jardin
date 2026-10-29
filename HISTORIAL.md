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
