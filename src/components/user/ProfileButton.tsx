"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Spinner,
} from "@/components/ui"
import { StarIcon } from "@/components/ui/icons"
import { signOut } from "@/services/user"
import { useIsPro } from "@/stores/useIsPro"
import { useSubscription } from "@/stores/useSubscription"
import { cn } from "@/utilities/string"
import { SignInButton } from "./SignInButton"
import { UserAvatar } from "./UserAvatar"
import type { User } from "@/types/User"

interface ProfileButtonProps {
  user?: User
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ user }) => {
  const subscription = useSubscription()
  const isPro = useIsPro()
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
          isPro && (
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
