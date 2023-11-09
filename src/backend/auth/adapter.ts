import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminRepo } from "../firebase-admin"

export const adapter = FirestoreAdapter(adminRepo)
