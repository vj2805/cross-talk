import { demo } from "@/assets/images"
import { BlobBackdrop } from "@/components"
import { NextImage, NextLink } from "@/components/ui"
import { MoveRight } from "@/components/ui/icons"
import { cn } from "@/utilities/string"

export default function HomePage() {
  return (
    <main className={cn("isolate", "pt-14", "dark:bg-gray-900", "relative")}>
      <BlobBackdrop position="start" />
      <div className="py-12 sm:py-20 lg:pb-40">
        <div className={cn("mx-auto", "max-w-7xl", "px-6 lg:px-8")}>
          <div className={cn("mx-auto", "max-w-2xl", "text-center")}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s CrossTalk.
            </h1>
            <p
              className={cn(
                "mt-6",
                "text-lg leading-8 text-gray-600 dark:text-gray-300"
              )}
            >
              You speak your language, they speak their language.{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                Let AI handle the translation.
              </span>
            </p>
            <div
              className={cn(
                "mt-10",
                "flex items-center justify-center gap-x-6"
              )}
            >
              <NextLink
                href="/chat"
                className={cn(
                  "px-3.5 py-2.5",
                  "bg-cyan-400",
                  "text-sm font-semibold text-slate-600 dark:text-cyan-950",
                  "rounded-md shadow-sm",
                  "hover:bg-cyan-500",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                )}
              >
                Get Started
              </NextLink>
              <NextLink
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing{" "}
                <MoveRight
                  aria-hidden
                  className={cn("inline", "ml-1", "text-gray-400")}
                />
              </NextLink>
            </div>
          </div>
          <div className={cn("mt-16 sm:mt-24", "flow-root")}>
            <div
              className={cn(
                "-m-2 lg:-m-4",
                "p-2 lg:p-4",
                "bg-gray-900/5",
                "rounded-xl lg:rounded-2xl",
                "ring-inset ring-gray-900/10"
              )}
            >
              <NextImage
                unoptimized
                src={demo}
                alt="App Screenshot"
                width={2432}
                height={1442}
                className={cn(
                  "rounded-md shadow-2xl",
                  "ring-1 ring-gray-900/10"
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <BlobBackdrop position="end" />
    </main>
  )
}
