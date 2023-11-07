// Inspired by react-hot-toast library
import * as React from "react"
import { generateId } from "@utilities"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1

type Toast = SafeOmit<ToastProps, "id"> & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type ToastWithoutId = SafeOmit<Toast, "id">

type Action =
  | {
      type: "add/toast"
      toast: Toast
    }
  | {
      type: "dismiss/toast"
      id: Toast["id"]
    }
  | {
      type: "update/toast"
      id: Toast["id"]
      props: Partial<ToastWithoutId>
    }

type State = Toast[]

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add/toast":
      return [action.toast, ...state].slice(0, TOAST_LIMIT)
    case "update/toast":
      return state.map(t =>
        t.id === action.id ? { ...t, ...action.props } : t
      )
    case "dismiss/toast":
      return state.filter(t => t.id !== action.id)
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = []

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach(listener => {
    listener(memoryState)
  })
}

function showToast({ ...props }: ToastWithoutId) {
  const id = generateId()

  const updateToast = (props: Toast) =>
    dispatch({
      id,
      props,
      type: "update/toast",
    })
  const dismissToast = (delay: number) =>
    setTimeout(() => dispatch({ id, type: "dismiss/toast" }), delay)

  dispatch({
    toast: {
      ...props,
      id,
      onOpenChange: open => {
        if (!open) dismissToast(0)
      },
      open: true,
    },
    type: "add/toast",
  })

  return {
    dismissToast,
    updateToast,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [])

  return {
    ...state,
    dismiss: (id: string) => dispatch({ id, type: "dismiss/toast" }),
    toast: showToast,
  }
}

export { showToast, useToast }
