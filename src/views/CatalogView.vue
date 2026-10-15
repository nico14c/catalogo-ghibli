<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'
import MovieList from '../components/MovieList.vue'

const peliculas = ref([])
const cargando = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'peliculas'))
    peliculas.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <main>
    <h1>Catálogo</h1>
    <p class="intro">Las películas de Studio Ghibli, leídas en directo desde Firestore.</p>

    <p v-if="cargando" class="aviso">Cargando películas...</p>
    <p v-else-if="error" class="aviso aviso-error">
      No se han podido cargar las películas. Inténtalo de nuevo más tarde.
    </p>
    <p v-else-if="peliculas.length === 0" class="aviso">
      Todavía no hay películas en el catálogo.
    </p>
    <MovieList v-else :peliculas="peliculas" />
  </main>
</template>

<style scoped>
.intro {
  margin: 0 0 2rem;
  font-size: 1.1rem;
}

.aviso {
  padding: 1.25rem;
  text-align: center;
  background: var(--cielo-claro);
  color: var(--verde-oscuro);
  font-weight: 600;
  border-radius: 12px;
}

.aviso-error {
  background: #fde8e0;
  color: #9c3d1d;
}
</style>