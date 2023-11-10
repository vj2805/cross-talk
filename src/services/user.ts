import { userService } from "@/backend"
import type { UserService } from "@/types/UserService"

export type { User } from "@/types/User"

export { signIn, signOut } from "next-auth/react"

export const { syncUser }: UserService = userService
