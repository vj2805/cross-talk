"use client"

import { signIn } from "next-auth/react"
import { Button } from "./ui/button/Button"

export function SignInButton() {
  return (
    <Button
      variant="outline"
      onClick={() => signIn()}
    >
      Sign In
    </Button>
  )
}
