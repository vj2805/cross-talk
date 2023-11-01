import { useCallback, useReducer, useRef } from "react"
import { generateUuid } from "@/utilities/generateUuid"
import type { SafeOmit } from "@/types/globals"
import type { ToastActionElement } from "./ToastAction"
import type { ToastProps } from "./Toast"

const TOAST_LIMIT = 1
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

export function useToast() {
  const scheduledForRemoval = useRef(
    new Map<string, ReturnType<typeof setTimeout>>()
  )
  const scheduleForRemoval = useCallback((id: ToasterToast["id"]) => {
    if (scheduledForRemoval.current.has(id)) {
      return
    }
    const timeout = setTimeout(() => {
      scheduledForRemoval.current.delete(id)
      dispatch({ id, type: "remove" })
    }, TOAST_DISMISS_DELAY)
    scheduledForRemoval.current.set(id, timeout)
  }, [])

  const [toasts, dispatch] = useReducer<React.Reducer<ToasterToast[], Action>>(
    (toasts: ToasterToast[], action: Action): ToasterToast[] => {
      switch (action.type) {
        case "add":
          return [action.toast, ...toasts].slice(0, TOAST_LIMIT)
        case "update":
          return toasts.map(toast =>
            toast.id === action.id ? { ...toast, ...action.toast } : toast
          )
        case "dismiss":
          scheduleForRemoval(action.id)
          return toasts.map(toast =>
            toast.id === action.id ? { ...toast, open: false } : toast
          )
        case "dismiss/all":
          return toasts.map(toast => {
            scheduleForRemoval(toast.id)
            return { ...toast, open: false }
          })
        case "remove":
          return toasts.filter(t => t.id !== action.id)
        case "remove/all":
          return []
      }
    },
    []
  )

  function showToast({ ...props }: Toast) {
    const id = generateUuid()

    function updateToast(toast: Toast) {
      return dispatch({ id, toast, type: "update" })
    }

    function dismissToast() {
      return dispatch({ id, type: "dismiss" })
    }

    dispatch({
      toast: {
        ...props,
        id,
        onOpenChange: open => !open && dismissToast(),
        open: true,
      },
      type: "add",
    })

    return { dismissToast, updateToast }
  }

  return {
    showToast,
    toasts,
  }
}
