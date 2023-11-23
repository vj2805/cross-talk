import { useSession } from "next-auth/react"

export function useUser() {
  const { status, data: session } = useSession()
  switch (status) {
    case "authenticated": {
      const { user } = session
      if (!user) {
        const unexpected = new Error("[useUser] returned unexpected")
        return [unexpected, "error", unexpected] as const
      }
      return [user, status, undefined] as const
    }
    case "loading":
      return [undefined, status, undefined] as const
    case "unauthenticated":
      return [null, status, undefined] as const
  }
}
