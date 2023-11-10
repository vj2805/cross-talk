import { createAuthHandler } from "@/services/auth"

const authHandler = createAuthHandler()

export { authHandler as GET, authHandler as POST }
