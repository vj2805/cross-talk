import * as admin from "firebase-admin"
import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getFunctions } from "firebase/functions"
import { env } from "@env"
import type { FirebaseOptions } from "firebase/app"

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
export const clientFunc = getFunctions(clientApp)

const adminAppOptions: admin.AppOptions = {
  credential: admin.credential.cert({
    clientEmail: env["FIREBASE_CLIENT_EMAIL"],
    privateKey: env["FIREBASE_PRIVATE_KEY"],
    projectId: env["FIREBASE_PROJECT_ID"],
  }),
}

const adminApp = admin.apps.length
  ? admin.app()
  : admin.initializeApp(adminAppOptions)

export const adminAuth = admin.auth(adminApp)
export const adminRepo = admin.firestore(adminApp)
