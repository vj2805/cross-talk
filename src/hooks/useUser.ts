import { useAuthState } from "react-firebase-hooks/auth"
import { clientAuth } from "@/firebase"

export const useUser = () => useAuthState(clientAuth)
