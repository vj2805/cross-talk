import { create } from "zustand"
import { generateId } from "@/utilities/string"
import type { ToastableError } from "@/errors/ToastableError"
import type { ToastActionElement, ToastProps } from "./toast"

const TOAST_LIMIT = 1

type ToastNodes = React.Nodes<"description" | "title"> & {
  action: ToastActionElement
}

type ToastWithoutId = Partial<ToastNodes> &
  SafeOmit<ToastProps, "id"> & { error?: ToastableError }

type Toast = WithId<ToastWithoutId>

type ToastStore = {
  toasts: Toast[]
}

const useToastStore = create<ToastStore>(() => ({ toasts: [] }))

const setToastStore = useToastStore.setState

export function useToasts() {
  return useToastStore(store => store.toasts)
}

function createToast({
  action,
  description,
  open,
  title,
  variant,
  error,
  ...props
}: ToastWithoutId): Toast {
  const id = generateId()
  return {
    action: error ? error.action : action,
    description: error ? error.message : description,
    open: open ?? true,
    title: error ? error.name : title,
    variant: error ? "destructive" : variant,
    ...props,
    id,
  }
}

export function showToast(props: ToastWithoutId) {
  const toast = createToast(props)

  setToastStore(store => ({
    toasts: [toast, ...store.toasts].slice(0, TOAST_LIMIT),
  }))

  const id = toast.id

  function dismissToast(delay = 0) {
    setTimeout(() => {
      setToastStore(store => ({
        toasts: store.toasts.filter(toast => toast.id !== id),
      }))
    }, delay)
  }

  function updateToast(props: ToastWithoutId) {
    setToastStore(store => ({
      toasts: store.toasts.map(toast =>
        toast.id !== id ? toast : { ...toast, ...props }
      ),
    }))
  }

  return [dismissToast, updateToast] as const
}
