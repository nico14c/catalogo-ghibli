import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAIMV3A0jS-WMQ72DP5A2MdE3zRbauxW-k',
  authDomain: 'catalogo-ghibli.firebaseapp.com',
  projectId: 'catalogo-ghibli',
  storageBucket: 'catalogo-ghibli.firebasestorage.app',
  messagingSenderId: '209214947316',
  appId: '1:209214947316:web:611850b8f0ee0b7a79c3a1',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)