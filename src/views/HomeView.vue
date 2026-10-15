<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <section class="hero">
      <h1>Studio Ghibli</h1>
      <p class="lead">
        Un catálogo de las películas del estudio japonés que ha llenado el cine de bosques,
        espíritus y cielos infinitos.
      </p>
      <RouterLink to="/catalogo" class="boton">Ver el catálogo</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(180deg, var(--cielo) 0%, var(--crema) 100%);
  border-radius: 16px;
}

.hero h1 {
  font-size: 3rem;
  margin: 0 0 1rem;
}

.lead {
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.15rem;
}

.boton {
  display: inline-block;
  background: var(--verde-oscuro);
  color: white;
  text-decoration: none;
  font-weight: 700;
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  transition: background 0.2s;
}

.boton:hover {
  background: var(--verde);
}
</style>