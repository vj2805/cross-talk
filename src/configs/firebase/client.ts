import { getApp, getApps, initializeApp } from "firebase/app"
import type { FirebaseOptions } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const clientAppOptions: FirebaseOptions = {
  apiKey: "AIzaSyBu8Hl6s5k8uBbiXYXX4PoFmjr_mqE7Wj4",
  appId: "1:765126335526:web:29c0aeb0d0ec719ea8dae7",
  authDomain: "cross-talk-e6bff.firebaseapp.com",
  messagingSenderId: "765126335526",
  projectId: "cross-talk-e6bff",
  storageBucket: "cross-talk-e6bff.appspot.com",
}

const clientApp = getApps().length ? getApp() : initializeApp(clientAppOptions)

export const clientAuth = getAuth(clientApp)
export const clientRepo = getFirestore(clientApp)
