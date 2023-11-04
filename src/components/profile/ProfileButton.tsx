"use client"

import { signOut } from "next-auth/react"
import { DropdownMenu } from "../ui/dropdown-menu/DropdownMenu"
import { DropdownMenuContent } from "../ui/dropdown-menu/DropdownMenuContent"
import { DropdownMenuItem } from "../ui/dropdown-menu/DropdownMenuItem"
import { DropdownMenuLabel } from "../ui/dropdown-menu/DropdownMenuLabel"
import { DropdownMenuSeparator } from "../ui/dropdown-menu/DropdownMenuSeparator"
import { DropdownMenuTrigger } from "../ui/dropdown-menu/DropdownMenuTrigger"
import { UserAvatar } from "./UserAvatar"
import { SignInButton } from "./SignInButton"
import type { Session } from "next-auth"

interface ProfileButtonProps {
  session: Nullish<Session>
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ session }) =>
  !session ? (
    <SignInButton />
  ) : (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          name={session.user?.name}
          image={session.user?.image}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Signout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
