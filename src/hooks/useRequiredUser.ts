import { useSession } from "next-auth/react"

export function useRequiredUser() {
  const { data: session, status } = useSession({ required: true })
  switch (status) {
    case "authenticated": {
      const { user } = session
      if (!user) {
        const unexpected = new Error("[useRequiredUser] returned unexpected")
        return [undefined, "error", unexpected] as const
      }
      return [user, status, undefined] as const
    }
    case "loading":
      return [undefined, status, undefined] as const
  }
}
