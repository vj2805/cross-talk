import { logo } from "@assets/images"
import { AspectRatio, NextImage, NextLink } from "@components/ui"
import { cn } from "@utilities/string"

export const Logo: React.FC = () => (
  <NextLink
    href="/"
    prefetch={false}
    className={cn("p-8", "h-14 w-72", "flex items-center overflow-hidden")}
  >
    <AspectRatio
      ratio={16 / 9}
      className="flex items-center justify-center"
    >
      <NextImage
        priority
        src={logo}
        alt="Cross Talk Logo"
        className="dark:filter dark:invert"
      />
    </AspectRatio>
  </NextLink>
)
