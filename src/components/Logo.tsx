import { logo } from "@assets/images"
import { cn } from "@utilities"
import { AspectRatio, Image, Link } from "@ui"

export const Logo: React.FC = () => (
  <Link
    href="/"
    prefetch={false}
    className={cn("p-8", "h-14 w-72", "flex items-center overflow-hidden")}
  >
    <AspectRatio
      ratio={16 / 9}
      className="flex items-center justify-center"
    >
      <Image
        priority
        src={logo}
        alt="Cross Talk Logo"
        className="dark:filter dark:invert"
      />
    </AspectRatio>
  </Link>
)
