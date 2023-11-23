import { Avatar, AvatarFallback, NextImage } from "@/components/ui"
import { cn } from "@/utilities/string"

interface UserAvatarProps {
  name?: string | null
  image?: string | null
  className?: string
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  image,
  name,
  className,
}) => (
  <Avatar className={cn("bg-white", "text-black", className)}>
    {image && (
      <NextImage
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
      className="dark:bg-white text-lg dark:text-black"
    >
      {name
        ?.split(" ")
        .map(n => n[0])
        .join("")
        ?.slice(0, 2)}
    </AvatarFallback>
  </Avatar>
)
