import { useState } from "react"

export function useProcess() {
  const [processing, setProcessing] = useState(false)

  function startProcess() {
    setProcessing(true)
  }

  function stopProcess() {
    setProcessing(false)
  }

  return { processing, startProcess, stopProcess }
}
