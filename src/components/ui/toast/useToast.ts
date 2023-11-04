import { useEffect, useState } from "react"
import { generateId } from "@/services/generateId"
import type { ToastProps } from "./Toast"
import type { ToastActionElement } from "./ToastAction"

const TOAST_LIMIT = 3
const TOAST_DISMISS_DELAY = 1_000_000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type Toast = SafeOmit<ToasterToast, "id">

type Action =
  | {
      type: "add"
      toast: ToasterToast
    }
  | {
      type: "dismiss"
      id: ToasterToast["id"]
    }
  | {
      type: "dismiss/all"
    }
  | {
      type: "remove"
      id: ToasterToast["id"]
    }
  | {
      type: "remove/all"
    }
  | {
      type: "update"
      id: ToasterToast["id"]
      toast: Partial<Toast>
    }

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

function scheduleToastForRemoval(id: string) {
  if (toastTimeouts.has(id)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(id)
    dispatch({
      id: id,
      type: "remove",
    })
  }, TOAST_DISMISS_DELAY)

  toastTimeouts.set(id, timeout)
}

function reducer(toasts: ToasterToast[], action: Action): ToasterToast[] {
  switch (action.type) {
    case "add":
      return [action.toast, ...toasts].slice(0, TOAST_LIMIT)
    case "update":
      return toasts.map(toast =>
        toast.id === action.id ? { ...toast, ...action.toast } : toast
      )
    case "dismiss":
      scheduleToastForRemoval(action.id)
      return toasts.map(toast =>
        toast.id === action.id ? { ...toast, open: false } : toast
      )
    case "dismiss/all":
      return toasts.map(toast => {
        scheduleToastForRemoval(toast.id)
        return { ...toast, open: false }
      })
    case "remove":
      return toasts.filter(t => t.id !== action.id)
    case "remove/all":
      return []
  }
}

const listeners = new Set<(toasts: ToasterToast[]) => void>()

let memoryToasts = new Array<ToasterToast>()

function dispatch(action: Action) {
  memoryToasts = reducer(memoryToasts, action)
  listeners.forEach(listener => listener(memoryToasts))
}

function showToast(toast: Toast) {
  const id = generateId()

  function updateToast(toast: Toast) {
    dispatch({ id, toast, type: "update" })
  }

  function dismissToast(delay: number) {
    setTimeout(() => dispatch({ id, type: "dismiss" }), delay)
  }

  dispatch({
    toast: {
      ...toast,
      id,
      onOpenChange: open => !open && dismissToast(0),
      open: true,
    },
    type: "add",
  })

  return { dismissToast, updateToast }
}

export function useToast() {
  const [toasts, setToasts] = useState(memoryToasts)

  useEffect(() => {
    listeners.add(setToasts)
    return () => {
      listeners.delete(setToasts)
    }
  }, [toasts])

  return {
    showToast,
    toasts,
  }
}
