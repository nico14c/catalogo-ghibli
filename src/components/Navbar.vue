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
  background: var(--verde-oscuro);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
}

.navbar a:hover {
  border-bottom-color: var(--cielo);
}

.navbar a.router-link-exact-active {
  border-bottom-color: var(--cielo);
}
</style>