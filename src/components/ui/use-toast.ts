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
      type: "ADD_TOAST"
      toast: Toast
    }
  | {
      type: "REMOVE_TOAST"
      id?: Toast["id"]
    }
  | {
      type: "UPDATE_TOAST"
      props: Partial<Toast>
    }

interface State {
  toasts: Toast[]
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.props.id ? { ...t, ...action.props } : t
        ),
      }
    case "REMOVE_TOAST":
      if (action.id === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter(t => t.id !== action.id),
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

function showToast({ ...props }: ToastWithoutId) {
  const id = generateId()

  const updateToast = (props: Toast) =>
    dispatch({
      props: { ...props, id },
      type: "UPDATE_TOAST",
    })
  const dismissToast = (delay: number) =>
    setTimeout(() => dispatch({ id: id, type: "REMOVE_TOAST" }), delay)

  dispatch({
    toast: {
      ...props,
      id,
      onOpenChange: open => {
        if (!open) dismissToast(0)
      },
      open: true,
    },
    type: "ADD_TOAST",
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
    dismiss: (toastId?: string) =>
      dispatch({ id: toastId, type: "REMOVE_TOAST" }),
    toast: showToast,
  }
}

export { showToast, useToast }
