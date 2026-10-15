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
    <span class="anio">{{ pelicula.anio }}</span>
    <h2>{{ pelicula.titulo }}</h2>
    <p class="director">Dirigida por {{ pelicula.director }}</p>
    <p>{{ pelicula.descripcion }}</p>
  </article>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  border-left: 6px solid var(--verde);
  box-shadow: var(--sombra);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(47, 62, 70, 0.18);
}

.anio {
  display: inline-block;
  padding: 0.15rem 0.8rem;
  margin-bottom: 0.6rem;
  background: var(--cielo-claro);
  color: var(--verde-oscuro);
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 999px;
}

h2 {
  margin: 0 0 0.25rem;
  font-size: 1.3rem;
}

.director {
  margin: 0 0 0.75rem;
  color: #6b7a80;
  font-size: 0.9rem;
  font-weight: 600;
}

p {
  margin: 0;
}
</style>