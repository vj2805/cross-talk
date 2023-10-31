import Link from "next/link"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio/AspectRatio"

export function Logo() {
  return (
    <Link
      href="/"
      prefetch={false}
      className="w-72 h-14 flex items-center overflow-hidden"
    >
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center"
      >
        {/* <Image
          priority
          src=""
          alt="Cross Talk Logo"
          className="dark:filter dark:invert"
        /> */}
      </AspectRatio>
    </Link>
  )
}
