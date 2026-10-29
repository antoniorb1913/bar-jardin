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

---

## Registro

<!-- =====================================================================
     A PARTIR DE AQUÍ SE AÑADEN LAS ENTRADAS (la más reciente al final)
     ===================================================================== -->

## 2026-10-29 · T0 — Documentación y contrato de trabajo

**Estado:** ✅ Completada y verificada por el usuario
**Rama:** `docs/t0-documentacion-base`
**Commit:** `docs: añade AGENTS.md, TAREAS.md e HISTORIAL.md`
**Archivos:** `bar-jardin/AGENTS.md`, `bar-jardin/TAREAS.md`, `bar-jardin/HISTORIAL.md`, `AGENTS.md` (raíz)
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
