"use client"

import { signOut } from "next-auth/react"
import { SignInButton } from "./SignInButton"
import { UserAvatar } from "./UserAvatar"
import { DropdownMenu } from "./ui/dropdown-menu/DropdownMenu"
import { DropdownMenuContent } from "./ui/dropdown-menu/DropdownMenuContent"
import { DropdownMenuItem } from "./ui/dropdown-menu/DropdownMenuItem"
import { DropdownMenuLabel } from "./ui/dropdown-menu/DropdownMenuLabel"
import { DropdownMenuSeparator } from "./ui/dropdown-menu/DropdownMenuSeparator"
import { DropdownMenuTrigger } from "./ui/dropdown-menu/DropdownMenuTrigger"
import type { Session } from "next-auth"

interface UserButtonProps {
  session: Local.Nullish<Session>
}

export function UserButton({ session }: UserButtonProps) {
  if (!session) {
    return <SignInButton />
  }
  return (
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
}
