import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import { AspectRatio } from "./ui/aspect-ratio/AspectRatio"

export const Logo: React.FC = () => (
  <Link
    href="/"
    prefetch={false}
    className="p-8 w-72 h-14 flex items-center overflow-hidden"
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
