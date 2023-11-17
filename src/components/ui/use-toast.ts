import React from "react"
import { generateId } from "@/utilities/string"
import type { ToastableError } from "@/errors/ToastableError"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 2
const TOAST_REMOVE_DELAY = 1_000_000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  error?: ToastableError
}

type Action =
  | {
      type: "add"
      toast: ToasterToast
    }
  | {
      type: "dismiss"
      toastId?: ToasterToast["id"]
    }
  | {
      type: "remove"
      toastId?: ToasterToast["id"]
    }
  | {
      type: "update"
      toast: Partial<ToasterToast>
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      toastId: toastId,
      type: "remove",
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "update":
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "dismiss": {
      const { toastId } = action

      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach(toast => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "remove":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter(t => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach(listener => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

export function showToast({ error, duration = 2000, ...props }: Toast) {
  const id = generateId()

  const update = (props: Toast) =>
    dispatch({
      toast: { ...props, id },
      type: "update",
    })
  const dismiss = () => dispatch({ toastId: id, type: "dismiss" })

  dispatch({
    toast: {
      action: error?.action,
      description: error?.message,
      duration,
      title: error?.name,
      variant: error && "destructive",
      ...props,
      id,
      onOpenChange: open => !open && dismiss(),
      open: true,
    },
    type: "add",
  })

  return [dismiss, update] as const
}

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return { ...state }
}
