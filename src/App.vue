<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <footer class="pie">Catálogo de Studio Ghibli · Hecho con Vue y Firebase</footer>
</template>

<style scoped>
.pie {
  text-align: center;
  padding: 1.5rem;
  background: var(--cielo-claro);
  color: var(--verde-oscuro);
  font-weight: 600;
  font-size: 0.9rem;
}
</style>