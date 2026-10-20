# Cienfirez IA — Blog & Research Platform

Plataforma web moderna y minimalista desarrollada para **Cienfirez IA**, inspirada en los estándares de diseño de blogs de investigación de inteligencia artificial de vanguardia (modo oscuro estricto, paleta monocromática con acentos metálicos y grises, y componentes visuales de alta precisión).

---

## 🚀 Características Principales

- **Diseño Minimalista & Modo Oscuro:** Interfaz optimizada en tonos oscuros profundos con gradientes sutiles y tipografía enfocada en la legibilidad editorial.
- **Hero Interactivo con Partículas:** Animación dinámica en canvas que simula un flujo de red neuronal/partículas flotantes.
- **Filtros por Categoría en Tiempo Real:** Sistema de navegación reactiva para explorar artículos por áreas (*Investigación, Producto, Seguridad, Ingeniería, Empresa, Era de la Inteligencia*).
- **Vistas Duales (Cuadrícula y Lista):** Adaptabilidad visual según la preferencia del usuario.
- **Lector de Artículos Dinámico:** Vista de detalle integrada con barra lateral de contenido, tiempo estimado de lectura, bloques de código estilizados y opciones de compartir o copiar enlace.
- **Sección de Artículos Relacionados:** Tarjetas interactivas al pie del artículo para mantener la retención y navegación fluida.
- **Formulario de Suscripción:** Módulo de boletín integrado.

---

## 🛠️ Tecnologías Utilizadas

- **React (.jsx):** Componentes funcionales y manejo de estado local.
- **Tailwind CSS:** Estilos utilitarios y diseño responsivo avanzado.
- **shadcn/ui (Componentes base):** Botones, tarjetas y campos de entrada adaptados.
- **Lucide React:** Iconografía minimalista y moderna.
- **Vite:** Entorno de desarrollo ultrarrápido y empaquetador de producción.

---

## 📂 Estructura del Proyecto

```text
CienfirezIA/
├── public/              # Recursos estáticos e imágenes
├── src/
│   ├── components/      # Componentes UI (Botones, tarjetas, inputs)
│   ├── styles/          # Hojas de estilo globales y configuración CSS
│   ├── App.jsx          # Componente principal / Enrutamiento de vistas
│   └── main.jsx         # Punto de entrada de React
├── package.json         # Dependencias y scripts
└── README.md            # Documentación del proyecto
