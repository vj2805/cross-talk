import createUserService from "./InMemoryUserService"
import type { UserService } from "./UserService"

export type { User } from "next-auth"

export { signIn, signOut } from "next-auth/react"

export const { syncUser }: UserService = createUserService()
