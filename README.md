# Catálogo de Studio Ghibli

Web hecha con Vue para la Actividad 1 de Web Dinàmica. Es un catálogo de películas de Studio Ghibli: los datos están en Firestore y la web los lee y los enseña en tarjetas.

Web publicada: https://catalogo-ghibli.web.app

## Cómo ejecutarla

```
npm install            # instalar dependencias
npm run dev            # probar en local (localhost:5173)
npm run build          # generar la versión de producción (carpeta dist)
firebase deploy --only hosting           # publicar la web
firebase deploy --only firestore:rules   # publicar las reglas
```

Hace falta tener Node.js y Firebase CLI, y haber hecho `firebase login`.

## Componentes

- `Navbar.vue`: el menú de arriba.
- `MovieList.vue`: recibe todas las películas y pinta una tarjeta por cada una.
- `MovieCard.vue`: una tarjeta con los datos de una película.

## Props

`CatalogView.vue` lee las películas de Firestore y se las pasa a `MovieList.vue` con la prop `peliculas`. Esta le pasa a cada `MovieCard.vue` una película con la prop `pelicula` (título, director, año y descripción). Los hijos solo las muestran, no las modifican.

## Rutas

- `/` → `HomeView.vue`: portada.
- `/catalogo` → `CatalogView.vue`: lista de películas desde Firestore.
- `/sobre-el-proyecto` → `AboutView.vue`: explicación del proyecto.

En `firebase.json` todas las rutas se redirigen a `index.html`, así que no dan 404 al recargar.

## Firestore

Colección `peliculas`, con los campos `titulo`, `director`, `anio` (número) y `descripcion`. Los datos se muestran en `/catalogo`, que también gestiona la carga, la falta de datos y los errores. Las reglas solo permiten leer.

## Tecnologías

Vue 3, Vue Router, Vite, Firestore y Firebase Hosting.