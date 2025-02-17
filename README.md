# RTC PR-11: MovieApp

Una aplicación web moderna para explorar y buscar películas, construida con React y Vite.

## Características

- 🎬 Exploración de películas populares
- 🔍 Búsqueda en tiempo real
- 📱 Diseño responsive
- 🌙 Modo oscuro por defecto
- ⚡ Carga optimizada de imágenes

## Tecnologías

- React 18
- Vite
- Axios
- React Router DOM
- React Icons
- The Movie Database API

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- API Key de TMDB

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/oihuka/rtc_p11.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_TMDB_API_KEY=tu_api_key_aquí
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── services/      # Servicios y configuración de API
└── styles/        # Estilos CSS
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera la versión de producción
- `npm run preview`: Previsualiza la versión de producción

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
