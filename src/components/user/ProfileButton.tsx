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
import { useIsPro } from "@/hooks/useIsPro"
import { useSubscription } from "@/hooks/useSubscription"
import { signOut } from "@/services/user"
import { cn } from "@/utilities/string"
import { manageSubscription } from "@/actions/manageSubscription"
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
          <DropdownMenuItem className="flex items-center justify-center">
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
              <DropdownMenuItem
                className="flex items-center justify-center"
                onClick={() => manageSubscription()}
              >
                Manage
              </DropdownMenuItem>
            </>
          )
        )}
        <DropdownMenuItem
          className="flex items-center justify-center"
          onClick={() => signOut()}
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
