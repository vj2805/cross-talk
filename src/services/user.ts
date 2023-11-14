import { userService } from "./internal"
import type { UserService } from "@/types/UserService"

export { signIn, signOut } from "next-auth/react"

export const { getUserByEmail, subscribeToUser, syncUser }: UserService =
  userService
