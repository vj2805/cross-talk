import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/utilities/shadcn"
import demo from "@/assets/images/demo.png"
import { BlobBackdrop } from "@/components/backdrops/BlobBackdrop"

export default function Home() {
  return (
    <main className="relative isolate pt-14 dark:bg-gray-900">
      <BlobBackdrop position="start" />
      <div className="py-12 sm:py-20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Let&apos;s CrossTalk.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              You speak your language, they speak their language.{" "}
              <span className="text-cyan-600 dark:text-cyan-400">
                Let AI handle the translation.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className={cn(
                  "rounded-md bg-cyan-400 px-3.5 py-2.5",
                  "text-sm font-semibold text-slate-600 dark:text-cyan-950 shadow-sm",
                  "hover:bg-cyan-500",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                )}
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing{" "}
                <MoveRight
                  aria-hidden
                  className="inline ml-1 text-gray-400"
                />
              </Link>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div
              className={cn(
                "-m-2 p-2",
                "rounded-xl bg-gray-900/5",
                "ring-inset ring-gray-900/10",
                "lg:-m-4 lg:rounded-2xl lg:p-4"
              )}
            >
              <Image
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
