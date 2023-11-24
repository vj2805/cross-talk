import type { VariantProps } from "class-variance-authority"

declare global {
  type Optional<T> = T | undefined
  namespace React {
    type PropsWithRequiredChildren = Required<React.PropsWithChildren>
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
