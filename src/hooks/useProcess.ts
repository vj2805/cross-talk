import { useCallback, useState } from "react"

export function useProcess() {
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<Nullish<Error>>(null)

  const startProcess = useCallback(() => {
    setProcessing(true)
    setError(null)
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
