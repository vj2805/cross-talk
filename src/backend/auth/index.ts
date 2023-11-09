import { adapter } from "./adapter"
import { callbacks } from "./callbacks"
import { providers } from "./providers"
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  adapter,
  callbacks,
  providers,
  session: { strategy: "jwt" },
}
