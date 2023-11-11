import { CircleBackdrop, PricingCards } from "@/components"
import { cn } from "@/utilities/string"

export default function PricingPage() {
  return (
    <main className={cn("isolate", "bg-gray-900", "overflow-hidden")}>
      <div
        className={cn(
          "mx-auto",
          "max-w-7xl",
          "px-6 pb-96 pt-24 sm:pt-32 lg:px-8",
          "text-center"
        )}
      >
        <div className={cn("mx-auto", "max-w-4xl")}>
          <h2 className="text-base font-semibold leading-7 text-cyan-500">
            Pricing
          </h2>
          <p
            className={cn(
              "mt-2",
              "text-4xl font-bold tracking-tight text-white sm:text-4xl"
            )}
          >
            The right price for you, {""}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className={cn("mt-6", "relative")}>
          <p
            className={cn(
              "mx-auto",
              "max-w-2xl",
              "text-lg leading-8 text-zinc-400/60"
            )}
          >
            Were 99% sure we have a plan to match 100% of your needs
          </p>
          <CircleBackdrop />
        </div>
      </div>
      <div className={cn("bg-white", "pb-24 sm:pb-32", "flow-root")}>
        <div className="-mt-80">
          <PricingCards redirect={true} />
        </div>
      </div>
    </main>
  )
}
