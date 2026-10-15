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

    <p v-if="cargando">Cargando películas...</p>
    <p v-else-if="error">No se han podido cargar las películas. Inténtalo de nuevo más tarde.</p>
    <p v-else-if="peliculas.length === 0">Todavía no hay películas en el catálogo.</p>
    <MovieList v-else :peliculas="peliculas" />
  </main>
</template>