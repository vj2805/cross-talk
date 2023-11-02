import { CheckIcon } from "lucide-react"
import Link from "next/link"
import { getPricingTiers } from "@/configs/getPricingTiers"
import { cn } from "@/utilities/shadcn"
import { CheckoutButton } from "./CheckoutButton"

interface PricingCardsProps {
  redirect: boolean
}

export function PricingCards({ redirect }: PricingCardsProps) {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {getPricingTiers().map(tier => (
        <div
          key={tier.id}
          className={cn(
            "flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10",
            !tier.id && "sm:pb-[9.5rem]"
          )}
        >
          <h3
            id={tier.id + tier.name}
            className="text-base font-semibold leading-7 text-cyan-600"
          >
            {tier.name}
          </h3>
          <div className="mt-4 flex items-baseline gap-x-2">
            {tier.priceMonthly ? (
              <>
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  &#8377; {tier.priceMonthly}
                </span>
                <span className="text-base font-semibold leading-7 text-gray-900">
                  /month
                </span>
              </>
            ) : (
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                Free
              </span>
            )}
          </div>
          <p className="mt-6 text-base leading-7 text-gray-600">
            {tier.description}
          </p>
          <ul
            role="list"
            className="mt-10 space-y-4 text-sm leading-6 text-gray-900"
          >
            {tier.features.map(feature => (
              <li
                key={feature}
                className="flex gap-x-3"
              >
                <CheckIcon
                  className="h-6 w-5 flex-none text-cyan-600"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          {tier.id &&
            (redirect ? (
              <Link
                href="/register"
                className="mt-8 block rounded-md bg-cyan-500 px-3.5 py-2 text-center text-sm font-semibold
                leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-cyan-600 cursor-pointer
                disabled:opacity-80"
              >
                Get Started Today
              </Link>
            ) : (
              <CheckoutButton />
            ))}
        </div>
      ))}
    </div>
  )
}