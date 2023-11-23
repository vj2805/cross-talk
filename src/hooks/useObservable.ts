import { useCallback, useState } from "react"

const NONE = Symbol("NONE")

export function useObservable<T>(initialValue: T | typeof NONE = NONE) {
  const [observable, set] = useState<Observable<T>>(
    initialValue === NONE
      ? [undefined, "loading", undefined]
      : [initialValue, "ready", undefined]
  )
  const setValue = useCallback(
    (value: T) => set([value, "ready", undefined]),
    [set]
  )
  const setError = useCallback(
    (error: Error) => set([undefined, "error", error]),
    [set]
  )
  return [observable, setValue, setError] as const
}
