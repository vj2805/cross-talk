import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminRepo } from "@backend/firebase-admin"
import type { Adapter } from "next-auth/adapters"

export default function createFirestoreAuthAdapter(): Adapter {
  return FirestoreAdapter(adminRepo)
}
