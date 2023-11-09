import * as admin from "firebase-admin"
import { env } from "../env"

const adminAppOptions: admin.AppOptions = {
  credential: admin.credential.cert({
    clientEmail: env["FIREBASE_CLIENT_EMAIL"],
    privateKey: env["FIREBASE_PRIVATE_KEY"],
    projectId: env["FIREBASE_PROJECT_ID"],
  }),
}

const app = admin.apps.length
  ? admin.app()
  : admin.initializeApp(adminAppOptions)

export const adminAuth = admin.auth(app)
export const adminRepo = admin.firestore(app)
