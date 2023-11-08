import { useState } from "react"

export function useProcess() {
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<Nullish<Error>>(null)

  function startProcess() {
    setProcessing(true)
    setError(null)
  }

  function stopProcess() {
    setProcessing(false)
  }

  return {
    error,
    processing,
    setError,
    startProcess,
    stopProcess,
  }
}
