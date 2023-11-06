"use client"

import { useEffect, useState } from "react"
import { generateId } from "@utilities"
import type { ToastProps } from "./Toast"
import type { ToastActionElement } from "./ToastAction"

const TOAST_LIMIT = 3

type Toast = SafeOmit<ToastProps, "id"> & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type ToastWithoutId = SafeOmit<Toast, "id">

type Action =
  | {
      type: "add"
      toast: Toast
    }
  | {
      type: "remove"
      id: Toast["id"]
    }
  | {
      type: "update"
      id: Toast["id"]
      toast: Partial<ToastWithoutId>
    }

function reducer(toasts: Toast[], action: Action): Toast[] {
  switch (action.type) {
    case "add":
      return [action.toast, ...toasts].slice(0, TOAST_LIMIT)
    case "update":
      return toasts.map(toast =>
        toast.id === action.id ? { ...toast, ...action.toast } : toast
      )
    case "remove":
      return toasts.filter(t => t.id !== action.id)
  }
}

const listeners = new Set<(toasts: Toast[]) => void>()

let memoryToasts = new Array<Toast>()

function dispatch(action: Action) {
  memoryToasts = reducer(memoryToasts, action)
  listeners.forEach(listener => listener(memoryToasts))
}

export function showToast(toast: ToastWithoutId) {
  const id = generateId()

  function updateToast(toast: ToastWithoutId) {
    dispatch({ id, toast, type: "update" })
  }

  function dismissToast(delay: number) {
    setTimeout(() => dispatch({ id, type: "remove" }), delay)
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
    return () => void listeners.delete(setToasts)
  }, [])

  return toasts
}
