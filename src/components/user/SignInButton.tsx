"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui"

export const SignInButton: React.FC = () => (
  <Button
    variant="outline"
    onClick={() => signIn()}
  >
    Sign In
  </Button>
)
