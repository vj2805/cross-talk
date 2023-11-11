import { useCallback, useState } from "react"

export function useObservableArray<T>(initialValue?: T[]) {
  const [observable, set] = useState<ObservableArray<T>>(
    initialValue
      ? {
          status: "idle",
          value: initialValue,
        }
      : { status: "loading" }
  )

  const setValue = useCallback(
    (value: T[]) => set({ status: "idle", value }),
    [set]
  )

  const setError = useCallback(
    (error: Error) => set({ error, status: "error" }),
    [set]
  )

  return [observable, setValue, setError] as const
}
