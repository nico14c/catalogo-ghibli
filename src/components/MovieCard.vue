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
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  border-top: 5px solid var(--verde);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

h2 {
  margin: 0 0 0.25rem;
  font-size: 1.25rem;
  color: var(--verde-oscuro);
}

.meta {
  margin: 0 0 0.75rem;
  color: #6b7a80;
  font-size: 0.9rem;
  font-weight: 600;
}

p {
  margin: 0;
}
</style>