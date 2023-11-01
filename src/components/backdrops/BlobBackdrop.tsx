import { cn } from "@/utilities/shadcn"

interface BackdropProps {
  position: "end" | "start"
}

export function BlobBackdrop({ position }: BackdropProps) {
  const isEnd = position === "end"
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
        isEnd ? "top-[calc(100%-30rem)]" : "top-28",
        isEnd && "sm:top-[calc(100%-30rem)]"
      )}
    >
      <div
        className={cn(
          "relative",
          isEnd ? "left-[calc(50%+3rem)]" : "left-[calc(50%-11rem)]",
          "aspect-[1155/678] w-[36.125rem]",
          "-translate-x-1/2",
          !isEnd && "rotate-[30deg]",
          "bg-gradient-to-tr from-cyan-500 to-indigo-500 opacity-30",
          isEnd ? "sm:left-[calc(50%+36rem)]" : "sm:left-[calc(50%-30rem)]",
          "sm:w-[72.1875rem]"
        )}
        style={{
          clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, ${
            !isEnd ? "45.2% 58.3%," : ""
          }45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
        }}
      ></div>
    </div>
  )
}
