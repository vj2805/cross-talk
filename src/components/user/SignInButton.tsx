"use client"

import { Button } from "@/components/ui"
import { signIn } from "@/services/user"

interface SignInButtonProps {
  variant?: React.ComponentPropsWithoutRef<typeof Button>["variant"]
}

export const SignInButton: React.FC<SignInButtonProps> = ({
  variant = "outline",
}) => (
  <Button
    variant={variant}
    onClick={() => signIn()}
  >
    Sign In
  </Button>
)
