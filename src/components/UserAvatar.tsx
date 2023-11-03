import Image from "next/image"
import { cn } from "@/utilities/shadcn"
import { Avatar } from "./ui/avatar/Avatar"
import { AvatarFallback } from "./ui/avatar/AvatarFallback"

interface UserAvatarProps {
  name?: Optional<string>
  image?: Optional<string>
  className?: string
}

export function UserAvatar({ image, name, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          priority
          src={image}
          alt={name || "User Image"}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {name
          ?.split(" ")
          .slice(0, 2)
          .map(n => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  )
}
