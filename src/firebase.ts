import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import type { FirebaseOptions } from "firebase/app"

const config: FirebaseOptions = {
  apiKey: "AIzaSyBu8Hl6s5k8uBbiXYXX4PoFmjr_mqE7Wj4",
  appId: "1:765126335526:web:29c0aeb0d0ec719ea8dae7",
  authDomain: "cross-talk-e6bff.firebaseapp.com",
  messagingSenderId: "765126335526",
  projectId: "cross-talk-e6bff",
  storageBucket: "cross-talk-e6bff.appspot.com",
}

const app = getApps().length ? getApp() : initializeApp(config)

export const clientAuth = getAuth(app)
export const clientRepo = getFirestore(app)
export const clientFunc = getFunctions(app)
