import { getServerSession as getSession } from "next-auth"
import { authOptions } from "../auth"

export const getServerSession = () => getSession(authOptions)
