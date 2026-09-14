# Amazing Travel Agency ✈️✨

Sitio web oficial de **Amazing Travel Agency**, agencia de viajes especializada en experiencias mágicas en **Disney, Universal, Cruceros y destinos internacionales**.

Construido con un enfoque en **máximo rendimiento, accesibilidad (a11y), animaciones fluidas y diseño responsivo** utilizando **Astro**, **Tailwind CSS v4** y **TypeScript**.

---

## 🛠️ Stack Tecnológico

* **Framework:** [Astro v7+](https://astro.build/) (Static Site Generation con `astro:transitions` / `ClientRouter`)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) con `@tailwindcss/vite` y animaciones vía `tailwind-animations`
* **Tipografías:** `@fontsource-variable/playfair-display` y `@fontsource-variable/instrument-sans`
* **Carruseles e Interactividad:** [Embla Carousel](https://www.embla-carousel.com/) + Autoplay plugin
* **Optimización de Imágenes:** [Sharp](https://sharp.pixelplumbing.com/) (conversión automática a formato WebP)
* **Gestor de Paquetes:** [pnpm](https://pnpm.io/)

---

## 📁 Estructura del Proyecto

El código fuente está modularizado por dominios para facilitar la navegación y escalabilidad:

```text
src/
├── assets/
│   ├── brand/                     # Identidad corporativa (logos vectoriales)
│   │   ├── logo.svg
│   │   └── logo-invertido.svg
│   ├── home/                      # Imágenes de la landing page principal
│   │   ├── background-hero.jpg
│   │   └── parks.jpg
│   ├── destinos/                  # Fotos y recursos de destinos
│   │   ├── cruceros.jpg
│   │   ├── disney.jpg
│   │   ├── disney-background.jpg
│   │   ├── otros-destinos.jpg
│   │   ├── otros-tickets.jpg
│   │   ├── universal.jpg
│   │   ├── hotels/                # Fotos de complejos y hoteles
│   │   │   └── demo-hotel.jpg
│   │   └── parks/                 # Fotos de parques temáticos
│   │       ├── animal-kingdom.jpg
│   │       ├── blizzard-beach.jpg
│   │       ├── epcot.jpg
│   │       ├── hollywood-studios.jpg
│   │       ├── magic-kingdom.jpg
│   │       └── typhoon-beach.jpg
│   └── team/                      # Fotografías del equipo
│       ├── Ceci.jpg
│       ├── Majo.jpg
│       └── Marce.jpg
│
├── components/
│   ├── common/                    # Componentes globales de UI y navegación
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Nav.astro
│   │   ├── NavItem.astro
│   │   ├── SocialIcon.astro
│   │   └── TopUp.astro
│   ├── home/                      # Secciones exclusivas de la página de inicio
│   │   ├── AboutUs.astro
│   │   ├── Experience.astro
│   │   ├── Hero.astro
│   │   ├── Parks.astro
│   │   └── TeamCard.astro
│   └── icons/                     # Iconos SVG en PascalCase
│       ├── Arrow.astro
│       ├── ArrowLeft.astro
│       ├── ArrowRight.astro
│       ├── ArrowUp.astro
│       ├── Star.astro
│       ├── Stars.astro
│       └── social/                # Iconos de redes sociales
│           ├── Facebook.astro
│           ├── Instagram.astro
│           ├── Whatsapp.astro
│           └── WhatsappColour.astro
│
├── data/                          # Modelos tipados y datos estáticos
│   ├── Destinos.ts                # Listado de categorías de destinos
│   ├── Disney.ts                  # Parques, hoteles y detalles de Disney
│   ├── Home.ts                    # Copys y textos de la home
│   ├── Nav.ts                     # Rutas y enlaces de navegación
│   └── Team.ts                    # Perfiles de las asesoras de viaje
│
├── layouts/
│   ├── BaseLayout.astro           # Layout principal del sitio (HTML5, header, footer, SEO)
│   └── DisneyLayout.astro         # Wrapper retrocompatible hacia BaseLayout
│
├── pages/                         # Rutas estáticas del sitio (File-based routing)
│   ├── 404.astro                  # Página de error 404 estilizada
│   ├── cotiza.astro               # Formulario de cotización personalizada
│   ├── index.astro                # Landing page principal
│   ├── nuestro-team.astro         # Presentación del equipo
│   ├── paquetes.astro             # Paquetes turísticos
│   ├── planes-y-beneficios.astro  # Información de asesoría y beneficios
│   ├── promociones.astro          # Ofertas vigentes
│   ├── reservas.astro             # Gestión de reservas
│   └── destinos/
│       ├── index.astro            # Directorio de destinos con carrusel
│       └── disney.astro           # Detalle interactivo de Disney World & California
│
└── styles/
    └── global.css                 # Configuración de Tailwind CSS y animaciones
```

---

## 🧭 Path Aliases (TypeScript & Astro)

Para evitar rutas relativas frágiles (`../../`), se configuraron aliases en `tsconfig.json`:

| Alias | Apunta a | Ejemplo de uso |
| :--- | :--- | :--- |
| `@/*` | `src/*` | `import "@/styles/global.css"` |
| `@components/*` | `src/components/*` | `import Header from "@components/common/Header.astro"` |
| `@layouts/*` | `src/layouts/*` | `import BaseLayout from "@layouts/BaseLayout.astro"` |
| `@assets/*` | `src/assets/*` | `import logo from "@assets/brand/logo.svg"` |
| `@data/*` | `src/data/*` | `import { disney } from "@data/Disney"` |
| `@styles/*` | `src/styles/*` | `import "@styles/global.css"` |

---

## 🚀 Comandos y Entorno de Desarrollo

El proyecto utiliza [pnpm](https://pnpm.io/) como gestor de paquetes.

```sh
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo en http://localhost:4321
pnpm dev

# Iniciar en modo segundo plano (recomendado en entornos con agentes)
astro dev --background

# Gestionar servidor en segundo plano
astro dev status
astro dev logs
astro dev stop

# Compilar para producción (genera directorio ./dist/)
pnpm build

# Previsualizar la build de producción localmente
pnpm preview
```

---

## 📐 Convenciones de Código y Buenas Prácticas

1. **Estructura de Componentes:**
   * Componentes e iconos siempre en formato **PascalCase** (ej: `ArrowRight.astro`, `BaseLayout.astro`).
   * No usar rutas relativas ascendentes (`../`); utilizar siempre los path aliases configurados.
2. **Accesibilidad (a11y):**
   * Mantener siempre etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
   * Incluir atributos `alt` descriptivos en imágenes y `aria-label` en botones interactivos o enlaces de iconos.
3. **Flujo de Trabajo Git:**
   * Utilizar commits atómicos y descriptivos siguiendo la convención de [Conventional Commits](https://www.conventionalcommits.org/):
     * `feat:` nuevas características o secciones.
     * `fix:` resolución de bugs o correcciones visuales.
     * `refactor:` reorganización de código o estructura sin cambios funcionales.
     * `docs:` actualización de documentación.
     * `style:` cambios cosméticos de diseño o formateo.
