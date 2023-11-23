import * as admin from "firebase-admin"
import { env } from "@/configs/env"

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
