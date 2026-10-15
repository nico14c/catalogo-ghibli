<script setup>
import MovieCard from './MovieCard.vue'

defineProps({
  peliculas: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="list">
    <MovieCard v-for="pelicula in peliculas" :key="pelicula.id" :pelicula="pelicula" />
  </div>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}
</style>