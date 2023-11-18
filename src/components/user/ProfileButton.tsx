"use client"

import { manageSubscription } from "@/actions/manageSubscription"
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
import { signOut } from "@/services/user"
import { cn } from "@/utilities/string"
import { UserAvatar } from "./UserAvatar"
import type { User } from "@/types/User"

interface ProfileButtonProps {
  user: User
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ user }) => {
  const [isPro, status] = useIsPro()

  if (status === "error") {
    return null
  }

  return (
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
        {status === "loading" ? (
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
