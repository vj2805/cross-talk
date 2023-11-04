"use client"

import { signOut } from "next-auth/react"
import { StarIcon } from "lucide-react"
import { useSubscription } from "@/stores/subscription"
import { cn } from "@/services/shadcn"
import { DropdownMenu } from "../ui/dropdown-menu/DropdownMenu"
import { DropdownMenuContent } from "../ui/dropdown-menu/DropdownMenuContent"
import { DropdownMenuItem } from "../ui/dropdown-menu/DropdownMenuItem"
import { DropdownMenuLabel } from "../ui/dropdown-menu/DropdownMenuLabel"
import { DropdownMenuSeparator } from "../ui/dropdown-menu/DropdownMenuSeparator"
import { DropdownMenuTrigger } from "../ui/dropdown-menu/DropdownMenuTrigger"
import { Spinner } from "../ui/spinner/Spinner"
import { UserAvatar } from "./UserAvatar"
import { SignInButton } from "./SignInButton"
import type { Session } from "next-auth"

interface ProfileButtonProps {
  session: Nullish<Session>
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ session }) => {
  const subscription = useSubscription()
  return !session ? (
    <SignInButton />
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          name={session.user?.name}
          image={session.user?.image}
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
