import type { VariantProps } from "class-variance-authority"

declare global {
  type SafeOmit<T extends object, K extends keyof T> = Omit<T, K>
  type Nullish<T> = T | null
  type Uncertain<T> = T | undefined
  type Optional<T> = T | null | undefined
  type WithId<T extends object> = Omit<T, "id"> & { id: string }
  namespace React {
    type Nodes<T extends string> = Record<T, React.ReactNode>
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
  namespace Model {
    type Observable<T> =
      | { status: "error"; error: Error }
      | { status: "idle"; data: Nullish<T> }
      | { status: "loading" }
  }
}
