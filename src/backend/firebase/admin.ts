import * as admin from "firebase-admin"
import { safeEnv } from "@/configs/safeEnv"

const adminAppOptions: admin.AppOptions = {
  credential: admin.credential.cert({
    clientEmail: safeEnv["FIREBASE_CLIENT_EMAIL"],
    privateKey: safeEnv["FIREBASE_PRIVATE_KEY"],
    projectId: safeEnv["FIREBASE_PROJECT_ID"],
  }),
}

const adminApp = admin.apps.length
  ? admin.app()
  : admin.initializeApp(adminAppOptions)

export const adminAuth = admin.auth(adminApp)
export const adminRepo = admin.firestore(adminApp)
