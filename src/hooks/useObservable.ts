import { useCallback, useState } from "react"

const NONE = Symbol()

export function useObservable<T>(initialValue: T | typeof NONE = NONE) {
  const [observable, set] = useState<Observable<T>>(
    initialValue === NONE
      ? { status: "loading" }
      : { data: initialValue, status: "idle" }
  )
  const setValue = useCallback(
    (data: T) => set({ data, status: "idle" }),
    [set]
  )
  const setError = useCallback(
    (error: Error) => set({ error, status: "error" }),
    [set]
  )
  return [observable, setValue, setError] as const
}
