import { cert, getApp, getApps, initializeApp } from "firebase-admin/app"
import type { AppOptions } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"
import { env } from "@/configs/env"

const adminAppOptions: AppOptions = {
  credential: cert({
    clientEmail: env["FIREBASE_CLIENT_EMAIL"],
    privateKey: env["FIREBASE_PRIVATE_KEY"],
    projectId: env["FIREBASE_PROJECT_ID"],
  }),
}

const adminApp = getApps().length ? getApp() : initializeApp(adminAppOptions)

export const adminAuth = getAuth(adminApp)
export const adminRepo = getFirestore(adminApp)
