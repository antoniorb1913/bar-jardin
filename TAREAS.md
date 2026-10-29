# TAREAS.md — Bar El Jardín · Tarjeta digital

**Proyecto:** Bar El Jardín — Bolnuevo (Mazarrón, Murcia)
**Carpeta:** `bar-jardin/`
**Última actualización:** 2026-10-29
**Flujo de trabajo:** ver `AGENTS.md` §5.

> **REGLA DE ORO:** ninguna tarea pasa a ✅ sin que el usuario responda **«sí»** a la pregunta **«¿Todo OK?»**.
> Y al pasar a ✅, **se registra obligatoriamente en `HISTORIAL.md`**.

---

## 1. Cómo se usa este archivo

1. Solo hay **una tarea en 🔧 En curso** a la vez.
2. Al terminar, el agente la marca **👀 Esperando tu OK**, te dice cómo comprobarla y te pregunta **«¿Todo OK?»**.
3. Si respondes **sí** → **✅ Completada** + entrada en `HISTORIAL.md` + instrucciones para subirlo a GitHub.
4. Si algo falla → vuelve a **🔧 En curso**, se corrige y se repite la comprobación.

### Leyenda

| Icono | Estado | Significado |
|---|---|---|
| ⏳ | Pendiente | Sin empezar |
| 🔧 | En curso | El agente está trabajándola |
| 👀 | Esperando tu OK | Terminada, pendiente de tu verificación |
| ✅ | Completada | Verificada por ti y registrada en `HISTORIAL.md` |
| ⛔ | Bloqueada | Espera una decisión tuya (ver §3) |

---

## 2. Resumen de progreso

| Fase | Tareas | Completadas |
|---|---|---|
| **0** · Documentación | T0 | 1 / 1 |
| **1** · Estructura | T1 – T3 | 3 / 3 |
| **2** · Rendimiento y peso | T4 – T7 | 4 / 4 |
| **3** · Compartir e instalar | T8 – T9 | 2 / 2 |
| **4** · Robustez y accesibilidad | T10 – T13 | 0 / 4 |
| **5** · Publicación y seguridad | T14 – T15 | 0 / 2 |
| **TOTAL** | **16 tareas** | **10 / 16** |

---

## 3. Decisiones pendientes (bloquean tareas)

| ID | Decisión | Bloquea | Estado |
|---|---|---|---|
| **D1** | **Dominio definitivo** | T7 (opción B), T8 | ✅ **RESUELTO (2026-10-29):** `https://bareljardin-bolnuevo.netlify.app/` (subdominio gratuito de Netlify, verificado 200) |
| **D2** | **¿Autohospedar las fuentes?** (subir `.woff2` al repo; licencia OFL lo permite) | T5 | ✅ **RESUELTO (2026-10-29): sí.** Se autohospedan los mismos `.woff2` que servía Google. |

---

## 4. Orden de ejecución y dependencias

```
T0  Documentación
 └─ T1  Migrar el proyecto a bar-jardin
     ├─ T2  Extraer el CSS
     │   └─ T3  Extraer el JS + quitar onclick inline
     │       ├─ T4  Recortar fuentes web
     │       │   └─ T5  Autohospedar fuentes          [D2]
     │       ├─ T6  Imágenes a assets/img + recompresión
     │       ├─ T7  Quitar el CDN del QR              [D1 opcional]
     │       ├─ T8  Metadatos sociales                [D1] ⛔
     │       ├─ T9  Iconos e instalación
     │       ├─ T10 Robustez (localStorage, portapapeles)
     │       ├─ T11 Accesibilidad (lang, aria, modal)
     │       ├─ T12 Horario con Intl
     │       └─ T13 Imágenes sin salto de layout
     │           └─ T14 Netlify: netlify.toml + _headers (requiere T3, T5, T7)
     │               └─ T15 Verificación final integral
```

---

# FASE 0 — Documentación

### T0 · Documentación y contrato de trabajo

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** —
- **Archivos:** `AGENTS.md`, `TAREAS.md`, `HISTORIAL.md` (nuevos)
- **¿Por qué?** Fijar las reglas de trabajo, el contexto del proyecto y el orden de las tareas antes de tocar una sola línea de código. Sin esto, cada sesión empieza de cero y se pierde el hilo de lo que se ha hecho y por qué.
- **¿Cómo comprobar?**
  1. Existen los tres archivos dentro de `bar-jardin/`.
  2. `AGENTS.md` contiene: ficha del proyecto, tus 5 reglas, el flujo obligatorio, el stack permitido/prohibido, la estructura objetivo, el contrato de no regresión, las reglas de calidad y las decisiones pendientes.
  3. `TAREAS.md` lista las 16 tareas agrupadas por fases, con dependencias.
  4. `HISTORIAL.md` tiene la plantilla con los 4 puntos que pediste.
  5. **Ningún archivo del sitio se ha tocado**: `SUBIR-A-NETLIFY/index.html` sigue idéntico.
- **Nota:** la copia de la web a `bar-jardin/` corresponde a la tarea T1.

---

# FASE 1 — Estructura

### T1 · Migrar el proyecto a `bar-jardin` (copia literal)

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T0
- **Archivos:** crea `index.html`, `logo.png`, `palmera.png`, `fondo.webp` en `bar-jardin/`
- **¿Por qué?** `bar-jardin/` debe ser la **única fuente de verdad** y la raíz que publica Netlify. Hoy hay tres copias del proyecto (raíz del workspace, `SUBIR-A-NETLIFY/` y el `.zip`): es la receta perfecta para editar el archivo equivocado y desplegar el otro.
- **¿Cómo comprobar?**
  1. Los 4 archivos existen en `bar-jardin/`.
  2. El hash de cada uno coincide con su original (`Get-FileHash`): contenido **idéntico byte a byte**.
  3. Abrir `bar-jardin/index.html` en el navegador: la tarjeta es exactamente igual.
  4. DevTools en móvil (390×844): igual.
  5. `SUBIR-A-NETLIFY/` sigue intacta (se conserva como respaldo hasta T15).

### T2 · Extraer el CSS a `css/styles.css`

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T1
- **Archivos:** `index.html` (se elimina el bloque `<style>`, líneas 21–781), nuevo `css/styles.css` (759 líneas, 15,9 KB)
- **¿Por qué?** Un `index.html` de 1.343 líneas con 18 KB de CSS en medio es incómodo de mantener, no se cachea aparte y **no permite aplicar una CSP estricta** (con `<style>` inline habría que permitir `'unsafe-inline'`, que anula la protección).
- **¿Cómo comprobar?**
  1. `index.html` ya no contiene ninguna etiqueta `<style>`.
  2. En `<head>` hay `<link rel="stylesheet" href="css/styles.css">`.
  3. El contenido de `css/styles.css` es el mismo que estaba entre `<style>` y `</style>`: mismos valores y mismo orden, solo sin la indentación base de 4 espacios (para que sea un archivo CSS normal).
  4. Al abrir la página: idéntica, sin parpadeo de "contenido sin estilos" (recarga con `Ctrl+F5`).
  5. DevTools → Network: `styles.css` responde 200.
  6. Consola sin errores.

### T3 · Extraer el JS a `js/` y eliminar los `onclick` inline

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T2
- **Archivos:** `index.html` (fuera el bloque `<script>` y los **8 `onclick`**; se añaden 2 `id`: `qrBtn` y `qrCloseIcon`), nuevos `js/i18n.js` (4,6 KB), `js/horario.js` (1,8 KB), `js/app.js` (6,6 KB)
- **¿Por qué?** Es la única forma de cerrar la CSP a `script-src 'self'` (los `onclick=` obligan a `'unsafe-inline'`), y separa responsabilidades: traducciones / lógica de horario / interfaz y arranque.
- **⚠️ Riesgo conocido:** hoy `changeLanguage()` se ejecuta en la línea 1201 y llama a `congelarFondo()` usando `fondoIniciado`, declarado más abajo (línea 1295). Al repartir el código en archivos, el arranque **debe** centralizarse en un `init()` al final de `app.js`, dentro de `DOMContentLoaded`, y los `<script>` deben ir con `defer` en orden: `i18n.js` → `horario.js` → `app.js`.
- **¿Cómo comprobar?**
  1. En `index.html` no queda ningún `onclick=`. En consola: `document.querySelectorAll('[onclick]').length` devuelve **0**.
  2. Los tres scripts se cargan con `defer` y en el orden correcto (DevTools → Network / Elements).
  3. Consola con **cero errores**.
  4. **Idiomas:** los 3 botones cambian todos los textos; al recargar se mantiene el elegido.
  5. **Badge:** sigue mostrando Abierto/Cerrado según la hora real.
  6. **Drawer:** abre y cierra; el chevron gira; `aria-expanded` pasa de `false` a `true`.
  7. **Modal QR:** abre, dibuja el QR, cierra con ✕ y al hacer clic en el fondo oscuro.
  8. **Copiar enlace:** sale el toast.
  9. **Enlaces:** Maps, reseñas, Instagram y Facebook abren en pestaña nueva.
  10. **Fondo:** al desplegar los horarios, la imagen **no hace zoom**.

---

# FASE 2 — Rendimiento y peso

### T4 · Recortar las fuentes web cargadas

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T3
- **Archivos:** `index.html` (línea 16, el `<link>` de Google Fonts) y `.gitattributes` (nuevo, para normalizar finales de línea)
- **¿Por qué?** Se piden 3 familias y 9 pesos, pero **Playfair Display no se usa en ninguna regla del CSS** y de **Cinzel** solo se aplica el **900** (el título del modal QR). *(Corrección: el navegador no descarga los pesos que no se aplican, así que el ahorro real es pequeño; es sobre todo **corrección** — pedir solo lo que se usa — y deja limpia la auditoría de fuentes de T5.)*
- **¿Cómo comprobar?**
  1. El `<link>` queda solo con `Cinzel:wght@900` e `Inter:wght@400;500;600;700;800`.
  2. DevTools → Network → filtrar `font`: ya no aparece ninguna fuente `Playfair`.
  3. El título del modal QR ("BAR EL JARDÍN") sigue con la misma tipografía y el mismo grosor.
  4. El resto de textos se ven igual (Inter).
  5. Comparación visual antes/después: **sin diferencias**.

### T5 · Autohospedar las fuentes (Inter y Cinzel)

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T4 y D2
- **Archivos:** `css/styles.css` (6 reglas `@font-face`), `assets/fonts/inter.woff2` + `cinzel-900.woff2` + 2 licencias OFL (nuevos), `index.html` (fuera los 2 `preconnect` y el `<link>` de Google, entra un `preload`)
- **¿Por qué?** (1) **RGPD**: cargar Google Fonts envía la IP de cada visitante a Google, que en España/UE se considera incumplimiento; (2) **velocidad**: dos dominios menos que resolver y conectar; (3) **independencia**: la tarjeta ya no le pide nada a nadie, y si Google bloquea o cae, se sigue viendo igual.
- **Hallazgo útil:** Google sirve **los cinco pesos de Inter con un solo archivo** (son idénticos byte a byte). Por eso en el repo hay **un** `inter.woff2` de 47 KB en vez de 235 KB, y un solo `preload` cubre todos los pesos.
- **¿Cómo comprobar?**
  1. `F12` → Network: **cero** peticiones a `fonts.googleapis.com` y `fonts.gstatic.com`; `inter.woff2` sale de tu dominio.
  2. La tipografía se ve **idéntica** (son los mismos archivos que servía Google).
  3. Consola: `document.fonts.check('16px Inter')` devuelve `true`.
  4. Sin parpadeo de fuente: `font-display: swap` + `preload`.
  5. Al abrir el modal QR, se carga `cinzel-900.woff2` y el título se ve igual.

### T6 · Mover las imágenes a `assets/img/` y optimizar `fondo.webp`

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T3
- **Archivos:** `assets/img/logo.png`, `assets/img/palmera.png`, `assets/img/fondo.webp` (nuevos), `index.html` (5 rutas), `TAREAS.md`
- **¿Por qué?** Las tres imágenes estaban sueltas en la raíz porque T1 fue una copia literal; ahora van a `assets/img/` como pide `AGENTS.md` §4. Y el fondo pesaba **103 KB** para mostrarse al **14 % de opacidad** con una máscara que lo desvanece por abajo. *(Corrección medida: recomprimir a la misma resolución solo ahorraba un 10 %, así que además se reduce el ancho a 560 px —más que el ancho de la tarjeta—, con la misma proporción. Resultado real: −28 %.)*
- **¿Cómo comprobar?**
  1. `fondo.webp` pasa de **103 KB a 73,8 KB** (−28 %) y de 800×1209 a **560×846**, con la **misma proporción** (0,6617 → 0,6619) para que `object-fit: cover` recorte exactamente igual.
  2. DevTools → Network: las tres imágenes cargan desde `assets/img/` y ninguna da 404.
  3. La tarjeta se ve idéntica: logo arriba, palmera en el separador y el fondo tenue.
  4. Abrir y cerrar el desplegable de horarios: el fondo sigue sin hacer zoom.
  5. La pestaña del navegador sigue mostrando el icono (el favicon también se movió a `assets/img/`).

### T7 · Quitar el CDN del QR

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T3
- **Archivos:** `index.html` (línea 19) y nuevo `js/vendor/qrcode.min.js` (19.927 bytes, copia literal de cdnjs)
- **¿Por qué?** `cdnjs.cloudflare.com` es un **script de terceros**: si ese CDN se compromete, ejecuta código en tu página. Además `qrcodejs 1.0.0` es de **2012**, sin mantenimiento, y tener un tercero en `script-src` impide cerrar la CSP. Autohospedarlo cuesta lo mismo (un archivo) y elimina el riesgo.
- **¿Cómo comprobar?**
  1. Network: **ninguna** petición a `cdnjs.cloudflare.com`.
  2. El modal QR dibuja el QR como antes.
  3. **Escanearlo con el móvil de verdad** y comprobar que abre la URL correcta.
  4. Cerrar y volver a abrir el modal: el QR no se duplica ni parpadea.
  5. Consola sin errores.
- **Opción B (solo si D1 está decidido):** generar un `qr.svg` estático y **eliminar la librería entera** (el QR funcionaría incluso sin JavaScript).

---

# FASE 3 — Compartir e instalar

### T8 · Metadatos para compartir y buscadores

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T3 y D1 (dominio)
- **Archivos:** `index.html` (`<head>`), nuevo `assets/img/og-image.jpg` (1200×630, 37,3 KB)
- **¿Por qué?** `og:image` era una **ruta relativa** (`assets/img/logo.png`). WhatsApp, Telegram, Facebook, LinkedIn e Instagram exigen **URL absoluta** para la miniatura: tal como estaba, **al compartir la tarjeta no salía imagen**. Ahora hay una imagen dedicada de 1200×630 y todas las URLs son absolutas. Se añaden además `og:url`, `og:type`, `og:site_name`, `og:locale`, `og:image:width/height`, `twitter:card`, `meta description`, `canonical` y `theme-color`.
- **¿Cómo comprobar?**
  1. `F12` → Elements → en `<head>` están todas las etiquetas nuevas y **ninguna duplicada**.
  2. `og:image` y `twitter:image` empiezan por `https://` (no rutas relativas).
  3. `assets/img/og-image.jpg` existe, mide **1200×630** y pesa 37,3 KB.
  4. La tarjeta en sí **no cambia** en nada (mismo aspecto, mismo título de pestaña).
  5. *Cuando esté desplegada:* pegar la URL en un chat o validarla en `opengraph.xyz` debería mostrar **imagen + título + descripción**.

### T9 · Iconos e instalación en el móvil

- **Estado:** ✅ Completada (2026-10-29)
- **Depende de:** T3
- **Archivos:** `index.html` (`<head>`), `manifest.webmanifest` (nuevo), `assets/icons/` (favicon-32, favicon-48, apple-touch-icon-180, icon-192, icon-512)
- **¿Por qué?** Cuando un cliente hace "Añadir a pantalla de inicio", ahora sale una **captura de pantalla** como icono y sin nombre. Con iconos propios y un `manifest` sale el logo del bar con su nombre: parece una app y se reconoce de un vistazo.
- **¿Cómo comprobar?**
  1. En Android (Chrome) y iPhone (Safari) → "Añadir a pantalla de inicio": aparece el **logotipo** y el nombre "El Jardín".
  2. DevTools → Application → Manifest: sin errores ni avisos, con los iconos 192 y 512.
  3. La pestaña del navegador muestra **la palmera** como icono (el logotipo no se lee a 32 px).
  4. `F12` → Network: los 5 iconos y el manifest responden 200, ninguno da 404.
  5. La tarjeta en sí **no cambia** en nada.

---

# FASE 4 — Robustez y accesibilidad

### T10 · Robustez: `localStorage`, portapapeles y `innerHTML`

- **Estado:** 👀 Esperando tu OK
- **Depende de:** T3
- **Archivos:** `js/i18n.js` (helper `ALMACEN` y `textContent` en el footer), `js/app.js` (`copyCardLink` reescrito)
- **¿Por qué?**
  - **Bug real:** `let currentLang = localStorage.getItem(...) || "es"` no tenía `try/catch`. Si el navegador bloquea el almacenamiento (Safari en modo privado, cookies bloqueadas, navegadores dentro de apps como Instagram), **moría todo el script**: el badge se quedaba para siempre en *"Consultando..."* y no funcionaban ni el QR ni el desplegable. Y un bar se abre mucho desde el Instagram del bar.
  - `document.execCommand("copy")` está **obsoleto**: ahora se usa `navigator.clipboard` con el método antiguo como respaldo.
  - El footer se escribía con `innerHTML`: ahora con `textContent`.
- **¿Cómo comprobar?**
  1. **Prueba de bloqueo:** en Chrome, Configuración → Privacidad → Cookies → *Bloquear todas* → recargar. La tarjeta debe seguir **completa y funcional**: badge con Abierto/Cerrado (no "Consultando..."), idiomas, drawer, QR y copiar.
  2. Volver a permitir cookies → recargar → el idioma elegido **se recuerda**.
  3. Pulsar "copiar enlace" → aparece el toast → pegar con `Ctrl+V`: la URL es la correcta.
  4. En consola no hay errores sin capturar.
  5. *Verificación automática:* 14 comprobaciones en Node, incluida la ejecución con un `localStorage` que **lanza excepción** (arranca, pinta textos, badge correcto, cambio de idioma sin fallar) y las tres vías del portapapeles (API moderna, respaldo y respaldo fallido).

### T11 · Accesibilidad: idioma, `aria` y modal

- **Estado:** ⏳ Pendiente
- **Depende de:** T3
- **Archivos:** `js/*.js`, `index.html` (atributos)
- **¿Por qué?** `<html lang="es">` **nunca cambia**: al pasar a inglés o alemán, los lectores de pantalla siguen leyendo con fonética española y Google indexa mal. Además el modal **no se cierra con `Escape`, no atrapa el foco y no bloquea el scroll** del fondo, y el toast no se anuncia.
- **¿Cómo comprobar?**
  1. Cambiar a inglés → DevTools → Elements: `<html lang="en">`. A alemán → `lang="de"`. Volver a español → `es`.
  2. Navegar con `Tab` hasta las banderas: se ve el foco y `aria-pressed` cambia a `true` en la activa.
  3. Abrir el modal QR → pulsar `Tab` varias veces: el foco **no sale** del modal. Pulsar `Escape`: se cierra y el foco vuelve al botón del QR. Con el modal abierto, la página del fondo **no hace scroll**.
  4. El toast tiene `aria-live="polite"` (visible en Elements).
  5. **Visualmente todo sigue igual.**

### T12 · Cálculo de horario con `Intl.DateTimeFormat`

- **Estado:** ⏳ Pendiente
- **Depende de:** T3
- **Archivos:** `js/horario.js`
- **¿Por qué?** El método actual (`toLocaleString("en-US")` + `new Date(...)`) funciona, pero depende de cómo cada navegador interprete ese texto de fecha. `Intl.DateTimeFormat(..., { timeZone: "Europe/Madrid" }).formatToParts()` es la API pensada exactamente para esto: misma lógica, sin conversiones implícitas y sin sorpresas entre navegadores.
- **¿Cómo comprobar?** Cambiando la hora del sistema (recordar volver a poner la hora automática después) y recargando:

  | Día y hora | Debe mostrar |
  |---|---|
  | Domingo 15:59 | Cerrado |
  | Domingo 16:00 | Abierto |
  | Domingo 22:59 | Abierto |
  | Domingo 23:00 | Cerrado |
  | Viernes 23:59 | Abierto |
  | Sábado 23:59 | Abierto |
  | Domingo 00:00 | Cerrado |
  | Lunes 12:00 | Cerrado |

  Y con la hora real: el badge coincide con la realidad (última comprobación).

### T13 · Imágenes sin salto de layout

- **Estado:** ⏳ Pendiente
- **Depende de:** T3
- **Archivos:** `index.html` (`width`, `height`, `decoding="async"`), `css/styles.css` (`height: auto` donde corresponda)
- **¿Por qué?** Sin `width`/`height`, el navegador no sabe cuánto espacio reservar y la tarjeta **salta** mientras cargan las imágenes, sobre todo en 3G/4G lento. Añadirlos reserva el hueco desde el primer instante.
- **¿Cómo comprobar?**
  1. DevTools → Network → throttling **"Slow 3G"** → recargar: no hay saltos; el hueco está reservado.
  2. Lighthouse → **CLS < 0,1** (idealmente 0).
  3. Con la página cargada, **todo se ve exactamente igual** que antes.
  4. El fondo sigue sin hacer zoom al desplegar los horarios.

---

# FASE 5 — Publicación y seguridad

### T14 · Configuración de Netlify y cabeceras de seguridad

- **Estado:** ⏳ Pendiente
- **Depende de:** **T3, T5 y T7** (si no, la CSP rompe la página)
- **Archivos:** `netlify.toml`, `_headers`, `robots.txt`, `404.html`, `README.md`, `.gitignore`
- **¿Por qué?** Aquí es donde se recoge el fruto de todo lo anterior: con el JS y el CSS ya en archivos y sin CDNs, se puede aplicar una **CSP estricta** (`default-src 'self'`, sin `'unsafe-inline'`) que bloquee de verdad cualquier script inyectado. Se añaden `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` (bloquear cámara, micrófono y geolocalización) y `X-Frame-Options`. Y `Cache-Control: immutable` para los assets → visitas repetidas casi instantáneas.
- **¿Cómo comprobar?**
  1. Tras desplegar: `https://securityheaders.com` → nota **A**.
  2. DevTools → Network → cabeceras de `index.html`: la CSP aparece. En `css/styles.css`: `cache-control: public, max-age=31536000, immutable`.
  3. Consola **sin violaciones de CSP** (si hay alguna, es un fallo de esta tarea).
  4. Una URL inventada (`/loquesea`) muestra la **404 propia**, con el estilo de la tarjeta.
  5. `/robots.txt` responde.
  6. El sitio sigue funcionando exactamente igual que antes.

### T15 · Verificación final integral

- **Estado:** ⏳ Pendiente
- **Depende de:** todas las anteriores
- **Archivos:** ninguno (solo verificación; se corrigen detalles si aparecen)
- **¿Por qué?** Lo último que se revisa son las **piezas sueltas**, no el conjunto. Esta tarea comprueba que la suma de los cambios no ha roto nada, comparando contra la versión original.
- **¿Cómo comprobar?**
  1. **Comparación lado a lado** con `SUBIR-A-NETLIFY/index.html`: móvil (390 px) y escritorio, en los 3 idiomas, con el desplegable abierto y cerrado, y con el modal QR abierto. **Sin diferencias visuales.**
  2. Checklist funcional completo: banderas + persistencia · badge abierto/cerrado · drawer + chevron + `aria-expanded` · modal (abrir, ✕, clic en fondo, `Escape`) · copiar enlace + toast · los 4 enlaces en pestaña nueva · QR escaneado con un móvil real · fondo sin zoom.
  3. Consola limpia en todas las vistas.
  4. Lighthouse móvil: **Rendimiento ≥ 95**, **Accesibilidad ≥ 95**, **Buenas prácticas ≥ 95**, **SEO ≥ 95**.
  5. Peso total de la primera carga y comparación con el punto de partida (objetivo: menos de la mitad de fuentes y ~30 % menos de imágenes).

---

## 5. Ideas futuras (NO planificadas)

Sin fecha y sin compromiso. Solo para no olvidarlas:

- Analítica sin cookies (Netlify Analytics o similar) — si se añade, revisar RGPD y añadir aviso legal.
- Botón de llamada directa al bar.
- Enlace a la carta en PDF o como página.
- Aviso de eventos / "hoy hay…".
- Horario de cocina separado del de barra.
- Tema oscuro respetando `prefers-color-scheme`.
