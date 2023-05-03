import type { FirebaseOptions } from 'firebase/app'
import { initializeApp } from 'firebase/app'

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID
}

export const app = initializeApp(firebaseConfig)
