import { boolean } from "zod"
import type { VariantProps } from "class-variance-authority"

export type Nullish<T> = T | null
export type Uncertain<T> = T | undefined
export type Optional<T> = T | null | undefined

export type PropsWithAsChild<T extends object> = T & { asChild?: boolean }
export type PropsWithWithInset<T extends object> = T & { withInset?: boolean }
export type PropsWithVariant<
  T extends object,
  V extends (...args: any) => any,
> = T & VariantProps<V>
