"use client"

import { useSubscription } from "@providers"
import { signOut } from "@services"
import { cn } from "@utilities"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Spinner,
} from "@ui"
import { StarIcon } from "@icons"
import { SignInButton } from "./SignInButton"
import { UserAvatar } from "./UserAvatar"
import type { User } from "@types"

interface ProfileButtonProps {
  user?: User
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ user }) => {
  const subscription = useSubscription()
  return !user ? (
    <SignInButton />
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          name={user.name}
          image={user.image}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-center">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {subscription === undefined ? (
          <DropdownMenuItem>
            <Spinner />
          </DropdownMenuItem>
        ) : (
          subscription?.status !== "canceled" && (
            <>
              <DropdownMenuLabel
                className={cn(
                  "text-xs text-cyan-400",
                  "flex items-center justify-center space-x-1",
                  "animate-pulse"
                )}
              >
                <StarIcon className="fill-cyan-400" />
                <p>PRO</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Manage</DropdownMenuItem>
            </>
          )
        )}
        <DropdownMenuItem onClick={() => signOut()}>Signout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
