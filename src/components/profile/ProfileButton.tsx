"use client"

import { StarIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import { cn } from "@/services/shadcn"
import { useSubscription } from "@/providers/SubscriptionProvider"
import { DropdownMenu } from "../ui/dropdown-menu/DropdownMenu"
import { DropdownMenuContent } from "../ui/dropdown-menu/DropdownMenuContent"
import { DropdownMenuItem } from "../ui/dropdown-menu/DropdownMenuItem"
import { DropdownMenuLabel } from "../ui/dropdown-menu/DropdownMenuLabel"
import { DropdownMenuSeparator } from "../ui/dropdown-menu/DropdownMenuSeparator"
import { DropdownMenuTrigger } from "../ui/dropdown-menu/DropdownMenuTrigger"
import { Spinner } from "../ui/spinner/Spinner"
import { SignInButton } from "./SignInButton"
import { UserAvatar } from "./UserAvatar"
import type { User } from "next-auth"

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
          subscription && (
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
