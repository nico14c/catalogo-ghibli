<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <section class="hero">
      <div class="nube nube1"></div>
      <div class="nube nube2"></div>
      <div class="nube nube3"></div>

      <div class="hero-contenido">
        <p class="etiqueta">Catálogo de películas</p>
        <h1>Studio Ghibli</h1>
        <p class="lead">
          Un viaje por las películas del estudio japonés que ha llenado el cine de bosques,
          espíritus y cielos infinitos.
        </p>
        <RouterLink to="/catalogo" class="boton">Explorar el catálogo</RouterLink>
      </div>
    </section>

    <section class="destacados">
      <article class="destacado">
        <h2>🌿 Naturaleza</h2>
        <p>Bosques, mares y cielos que son casi un personaje más de cada historia.</p>
      </article>
      <article class="destacado">
        <h2>✨ Fantasía</h2>
        <p>Espíritus, castillos que andan y brujas que reparten pedidos en escoba.</p>
      </article>
      <article class="destacado">
        <h2>🎨 Animación</h2>
        <p>Dibujada a mano, con un cuidado por el detalle que se reconoce al instante.</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 5rem 1.5rem;
  border-radius: 20px;
  background: linear-gradient(180deg, var(--cielo) 0%, var(--cielo-claro) 70%, var(--crema) 100%);
}

.hero-contenido {
  position: relative;
  z-index: 1;
}

.etiqueta {
  display: inline-block;
  margin: 0 0 1rem;
  padding: 0.25rem 1rem;
  background: white;
  color: var(--verde-oscuro);
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 999px;
}

.hero h1 {
  font-size: 3.4rem;
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
  padding: 0.8rem 2rem;
  border-radius: 999px;
  box-shadow: var(--sombra);
  transition:
    background 0.2s,
    transform 0.2s;
}

.boton:hover {
  background: var(--verde);
  transform: translateY(-2px);
}

.nube {
  position: absolute;
  width: 120px;
  height: 40px;
  background: white;
  border-radius: 999px;
  opacity: 0.85;
  animation: flotar 10s ease-in-out infinite alternate;
}

.nube::before,
.nube::after {
  content: '';
  position: absolute;
  background: white;
  border-radius: 50%;
}

.nube::before {
  width: 56px;
  height: 56px;
  top: -26px;
  left: 18px;
}

.nube::after {
  width: 70px;
  height: 70px;
  top: -36px;
  left: 48px;
}

.nube1 {
  top: 14%;
  left: 8%;
}

.nube2 {
  top: 30%;
  right: 10%;
  scale: 1.4;
  animation-delay: -4s;
}

.nube3 {
  bottom: 14%;
  left: 22%;
  scale: 0.8;
  animation-delay: -7s;
}

@keyframes flotar {
  from {
    transform: translateX(-18px);
  }
  to {
    transform: translateX(18px);
  }
}

.destacados {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.destacado {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--sombra);
  border-bottom: 4px solid var(--atardecer);
}

.destacado h2 {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
}

.destacado p {
  margin: 0;
}
</style>