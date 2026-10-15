<script setup></script>

<template>
  <main class="about">
    <h1>Sobre el proyecto</h1>
    <p>
      Esta web es un catálogo de películas de Studio Ghibli. Las películas se leen en tiempo real
      desde una base de datos de Cloud Firestore.
    </p>

    <h2>Tecnologías</h2>
    <ul>
      <li>Vue 3 con componentes y props</li>
      <li>Vue Router para navegar entre las tres páginas</li>
      <li>Cloud Firestore como base de datos</li>
      <li>Firebase Hosting para la publicación</li>
    </ul>
  </main>
</template>

<style scoped>
.about {
  max-width: 700px;
}

h2 {
  color: var(--verde-oscuro);
  margin-top: 2rem;
}

li {
  margin-bottom: 0.4rem;
}
</style>