<script setup>
defineProps({
  pelicula: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="card">
    <h2>{{ pelicula.titulo }}</h2>
    <p class="meta">{{ pelicula.director }} · {{ pelicula.anio }}</p>
    <p>{{ pelicula.descripcion }}</p>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background: white;
}

.meta {
  color: #666;
  font-size: 0.9rem;
}
</style>