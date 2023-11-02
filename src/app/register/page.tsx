import { PricingCards } from "@/components/PricingCards"
import { CircleBackdrop } from "@/components/backdrops/CircleBackdrop"
import { getSession } from "@/services/getSession"

export default async function Register() {
  const session = await getSession()
  return (
    <div className="isolate h-full overflow-hidden bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s handle your Membership{" "}
            {session?.user?.name?.split(" ")[0]}
          </p>
        </div>
        <div className="relative">
          <CircleBackdrop />
        </div>
      </div>
      <PricingCards redirect={false} />
    </div>
  )
}
