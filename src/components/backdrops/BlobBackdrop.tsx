import { cn } from "@/utilities/shadcn"

interface BlobBackdropProps {
  position: "end" | "start"
}

export const BlobBackdrop: React.FC<BlobBackdropProps> = ({ position }) => {
  const isEnd = position === "end"
  return (
    <div
      aria-hidden
      className={cn(
        "absolute",
        "inset-x-0",
        isEnd ? "top-[calc(100%-30rem)] sm:top-[calc(100%-30rem)]" : "top-28",
        "-z-10",
        "transform-gpu",
        "overflow-hidden",
        "blur-3xl"
      )}
    >
      <div
        className={cn(
          isEnd
            ? "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]"
            : "left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]",
          "w-[36.125rem] sm:w-[72.1875rem]",
          "aspect-[1155/678]",
          "opacity-30",
          "bg-gradient-to-tr from-cyan-500 to-indigo-500",
          "-translate-x-1/2",
          "relative",
          {
            "rotate-[30deg]": !isEnd,
          }
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
