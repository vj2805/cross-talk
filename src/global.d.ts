import type { VariantProps } from "class-variance-authority"

declare global {
  type SafeOmit<T extends object, K extends keyof T> = Omit<T, K>
  type Nullish<T> = T | null
  type Uncertain<T> = T | undefined
  type Optional<T> = T | null | undefined
  type WithId<T extends object> = Omit<T, "id"> & { id: string }
  type Observable<T> = Readonly<
    | {
        status: "error"
        error: Error
      }
    | {
        status: "idle"
        value: T
      }
    | { status: "loading" }
  >
  type ObservableArray<T> = Observable<T[]>
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
}
