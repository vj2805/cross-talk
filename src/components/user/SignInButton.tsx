"use client"

import { Button } from "@components/ui"
import { signIn } from "@services/user"

export const SignInButton: React.FC = () => (
  <Button
    variant="outline"
    onClick={() => signIn()}
  >
    Sign In
  </Button>
)
