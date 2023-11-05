import { cn, joinFirstLetterOfEachWord } from "@utilities"
import { Avatar, AvatarFallback, Image } from "@ui"

interface UserAvatarProps {
  name?: Optional<string>
  image?: Optional<string>
  className?: string
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  image,
  name,
  className,
}) => (
  <Avatar className={cn("bg-white", "text-black", className)}>
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
      className="dark:bg-white text-lg dark:text-black"
    >
      {joinFirstLetterOfEachWord(name)?.slice(0, 2)}
    </AvatarFallback>
  </Avatar>
)
