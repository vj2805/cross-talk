"use client"

import { signIn } from "@services/user"
import { Button } from "@ui"

export const SignInButton: React.FC = () => (
  <Button
    variant="outline"
    onClick={() => signIn()}
  >
    Sign In
  </Button>
)
