import * as admin from "firebase-admin"
import { getEnv } from "@/configs/env"

const adminAppOptions: admin.AppOptions = {
  credential: admin.credential.cert({
    clientEmail: getEnv("FIREBASE_CLIENT_EMAIL"),
    privateKey: getEnv("FIREBASE_PRIVATE_KEY"),
    projectId: getEnv("FIREBASE_PROJECT_ID"),
  }),
}

const adminApp = admin.apps.length
  ? admin.app()
  : admin.initializeApp(adminAppOptions)

export const adminAuth = admin.auth(adminApp)
export const adminRepo = admin.firestore(adminApp)
