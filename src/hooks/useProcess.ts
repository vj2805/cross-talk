import { useCallback, useState } from "react"

export function useProcess() {
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<Uncertain<Error>>(undefined)

  const startProcess = useCallback(() => {
    setProcessing(true)
    setError(undefined)
  }, [])

  const stopProcess = useCallback(() => {
    setProcessing(false)
  }, [])

  return {
    error,
    processing,
    setError,
    startProcess,
    stopProcess,
  }
}
