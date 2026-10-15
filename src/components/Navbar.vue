<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/catalogo">Catálogo</RouterLink>
    <RouterLink to="/sobre-el-proyecto">Sobre el proyecto</RouterLink>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: #2c3e50;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>