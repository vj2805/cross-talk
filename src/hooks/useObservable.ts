import { useCallback, useState } from "react"

const NONE = Symbol()

export function useObservable<T>(initialValue: T | typeof NONE = NONE) {
  const [observable, set] = useState<Observable<T>>(
    initialValue === NONE
      ? { status: "loading" }
      : { status: "idle", value: initialValue }
  )
  const setValue = useCallback(
    (value: T) => set({ status: "idle", value }),
    [set]
  )
  const setError = useCallback(
    (error: Error) => set({ error, status: "error" }),
    [set]
  )
  return [observable, setValue, setError] as const
}

export function useObservableArray<T>(initialValue: T[] | typeof NONE = NONE) {
  return useObservable<T[]>(initialValue)
}