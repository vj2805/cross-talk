import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"

const firebaseConfig = {
  apiKey: "AIzaSyBu8Hl6s5k8uBbiXYXX4PoFmjr_mqE7Wj4",
  appId: "1:765126335526:web:29c0aeb0d0ec719ea8dae7",
  authDomain: "cross-talk-e6bff.firebaseapp.com",
  messagingSenderId: "765126335526",
  projectId: "cross-talk-e6bff",
  storageBucket: "cross-talk-e6bff.appspot.com",
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)
