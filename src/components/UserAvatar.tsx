import Image from "next/image"
import { cn } from "@/utilities/shadcn"
import { Avatar } from "./ui/avatar/Avatar"
import { AvatarFallback } from "./ui/avatar/AvatarFallback"

interface UserAvatarProps {
  name: string
  image: string
  className?: string
}

export function UserAvatar({ image, name, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {name
          .split(" ")
          .map(n => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  )
}
