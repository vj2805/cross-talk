import * as admin from "firebase-admin"
import { getEnv } from "./utilities/getEnv"

const adminAppOptions: admin.AppOptions = {
  credential: admin.credential.cert({
    clientEmail: getEnv("FIREBASE_CLIENT_EMAIL"),
    privateKey: getEnv("FIREBASE_PRIVATE_KEY"),
    projectId: getEnv("FIREBASE_PROJECT_ID"),
  }),
}

const app = admin.apps.length
  ? admin.app()
  : admin.initializeApp(adminAppOptions)

export const adminDb = admin.firestore(app)
export const adminAuth = admin.auth(app)
