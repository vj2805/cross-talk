import { useCallback, useState } from "react"

interface UseProcessOptions {
  shouldStopFinally?: boolean
}

const defaultOptions: UseProcessOptions = {
  shouldStopFinally: true,
}

export function useProcess<Parameters extends any[], Return>(
  execute: (stop: () => void, ...parameters: Parameters) => Promise<Return>,
  options = defaultOptions
) {
  const [running, setRunning] = useState(false)

  const start = useCallback(() => setRunning(true), [setRunning])
  const stop = useCallback(() => setRunning(false), [setRunning])

  async function run(...parameters: Parameters) {
    if (running) {
      throw new Error("Process already running!")
    }
    start()
    try {
      return await execute(stop, ...parameters)
    } finally {
      options.shouldStopFinally && stop()
    }
  }

  return [run, running] as const
}
