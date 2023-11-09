import { FirestoreAdapter } from "@auth/firebase-adapter"
import { adminRepo } from "../firebase-admin"
import type { NextAuthOptions } from "next-auth"

export const adapter: NextAuthOptions["adapter"] = FirestoreAdapter(adminRepo)
