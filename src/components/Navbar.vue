<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <RouterLink to="/" class="marca">🍃 Ghibli</RouterLink>
    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/catalogo">Catálogo</RouterLink>
      <RouterLink to="/sobre-el-proyecto">Sobre el proyecto</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--verde-oscuro);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.marca {
  font-family: 'Fraunces', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
}

nav a:hover,
nav a.router-link-exact-active {
  border-bottom-color: var(--cielo);
}
</style>