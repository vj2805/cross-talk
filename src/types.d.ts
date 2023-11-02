import type { VariantProps } from "class-variance-authority"

declare global {
  namespace Local {
    type SafeOmit<T extends object, K extends keyof T> = Omit<T, K>

    type Nullish<T> = T | null
    type Uncertain<T> = T | undefined
    type Optional<T> = T | null | undefined

    type PropsWithAsChild<T extends object> = T & { asChild?: boolean }
    type PropsWithWithInset<T extends object> = T & {
      withInset?: boolean
    }
    type PropsWithVariant<
      T extends object,
      V extends (...args: any) => any,
    > = T & VariantProps<V>
  }
}
