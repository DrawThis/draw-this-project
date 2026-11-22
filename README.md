# 🎨 Draw This

**Draw This** es una plataforma web interactiva diseñada para aprender fundamentos y técnicas de dibujo de forma progresiva, combinando teoría ilustrada, cuestionarios de refuerzo, lienzos de práctica digital y generación de certificados al completar cada curso.

---

## ✨ Características principales

- **Rutas de aprendizaje estructuradas:** Múltiples cursos temáticos (Historia del arte, Fundamentos de dibujo, Perspectiva, Anatomía, Puntillismo, Pixel Art y más) divididos en niveles teóricos, evaluativos y prácticos.
- **Lienzo de dibujo interactivo (Canvas):** Herramientas integradas de pincel, borrador, selector de color, control de grosor, limpieza de lienzo y descarga de ilustraciones, con soporte completo tanto para ratón en escritorio como para pantallas táctiles (móvil y tablet).
- **Diseño 100% Responsive:** Interfaz adaptable a dispositivos móviles, tablets y ordenadores de escritorio.
- **Gestión de usuarios y progreso:** Registro, inicio de sesión, recuperación de contraseña y desbloqueo progresivo de niveles.
- **Certificación:** Generación y descarga de certificados personalizados al finalizar cada curso.

---

## 🛠️ Stack tecnológico

- **Frontend & Framework:** [SvelteKit](https://kit.svelte.dev/) / [Svelte 5](https://svelte.dev/) + TypeScript
- **Base de datos & ORM:** [Drizzle ORM](https://orm.drizzle.team/) + LibSQL / Turso
- **Runtime & Gestor de paquetes:** [Bun](https://bun.sh/)
- **Despliegue:** [Vercel](https://vercel.com/)

---

## 📁 Estructura del proyecto

```text
draw-this-project/
├── drizzle/ & migrations/   # Esquemas y migraciones de la base de datos
├── src/
│   ├── lib/
│   │   ├── CSS/             # Hojas de estilo globales y compartidas
│   │   ├── IMAGES/          # Recursos gráficos organizados por curso
│   │   ├── navbar1..10/     # Barras de navegación y progreso por curso
│   │   └── server/database/ # Conexión, cliente y esquema Drizzle ORM
│   ├── routes/
│   │   ├── curso/[id]/      # Niveles teóricos, prácticos, cuestionarios y certificados
│   │   ├── landing-page/    # Página principal de presentación
│   │   ├── ingreso-cursos/  # Selector general de cursos disponibles
│   │   ├── acerca-de/       # Información sobre el proyecto
│   │   └── bibliografias/   # Referencias y material de apoyo
│   └── hooks.server.ts      # Gestión de sesiones y middleware del servidor
├── static/                  # Favicons y logotipos principales
├── drizzle.config.ts        # Configuración de Drizzle Kit
└── svelte.config.js         # Configuración de SvelteKit y adaptador Vercel
```

---

## 🚀 Instalación y ejecución local

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/DrawThis/draw-this-project.git
   cd draw-this-project
   ```

2. **Instalar dependencias:**

   ```bash
   bun install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   bun run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`.

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje artístico.
