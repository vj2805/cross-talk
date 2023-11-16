import { useCallback, useState } from "react"

const NONE = Symbol()

export function useObservable<T>(initialValue: T | typeof NONE = NONE) {
  const [observable, set] = useState<Observable<T>>(
    initialValue === NONE ? { status: "loading" } : createValue(initialValue)
  )
  const setValue = useCallback((value: T) => set(createValue(value)), [set])
  const setError = useCallback(
    (error: Error) => set({ error, status: "error" }),
    [set]
  )
  return [observable, setValue, setError] as const
}

function createValue<T>(value: T): Observable<T> {
  const observable = () => value
  observable.status = "idle" as const
  return observable
}
