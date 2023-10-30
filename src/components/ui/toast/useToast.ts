// Inspired by react-hot-toast library
import * as React from "react"

import { generateUuid } from "@/utilities/generateUuid"

import type { ToastActionElement, ToastProps } from "./Toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1_000_000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type Action =
  | {
      type: "add"
      toast: ToasterToast
    }
  | {
      type: "dismiss"
      id?: ToasterToast["id"]
    }
  | {
      type: "remove"
      id?: ToasterToast["id"]
    }
  | {
      type: "update"
      toast: Partial<ToasterToast>
    }

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const enqueueToastToRemove = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({ id: toastId, type: "remove" })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (
  toasts: ToasterToast[],
  action: Action
): ToasterToast[] => {
  switch (action.type) {
    case "add":
      return [action.toast, ...toasts].slice(0, TOAST_LIMIT)
    case "update":
      return toasts.map(toast =>
        toast.id === action.toast.id ? { ...toast, ...action.toast } : toast
      )
    case "dismiss": {
      if (action.id) {
        enqueueToastToRemove(action.id)
      } else {
        toasts.forEach(toast => enqueueToastToRemove(toast.id))
      }
      return toasts.map(toast =>
        toast.id === action.id || action.id === undefined
          ? {
              ...toast,
              open: false,
            }
          : toast
      )
    }
    case "remove":
      return action.id ? toasts.filter(toast => toast.id !== action.id) : []
  }
}

const listeners: Array<(state: ToasterToast[]) => void> = []

let memoryState: ToasterToast[] = []

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach(listener => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = generateUuid()

  const update = (props: ToasterToast) =>
    dispatch({ toast: { ...props, id }, type: "update" })
  const dismiss = () => dispatch({ id: id, type: "dismiss" })

  dispatch({
    toast: {
      ...props,
      id,
      onOpenChange: open => {
        if (!open) dismiss()
      },
      open: true,
    },
    type: "add",
  })

  return {
    dismiss,
    id: id,
    update,
  }
}

export function useToast() {
  const [toasts, setToasts] = React.useState<ToasterToast[]>(memoryState)

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const index = listeners.indexOf(setToasts)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [toasts])

  return {
    dismiss: (id?: string) => dispatch({ id, type: "dismiss" }),
    toast,
    toasts,
  }
}
