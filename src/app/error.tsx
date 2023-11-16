"use client"

import { useEffect } from "react"
import { cn } from "@/utilities/string"

interface RootErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="pt-5 flex flex-col items-center">
      <div
        className={cn(
          "group",
          "w-1/4",
          "p-6 pr-8",
          "relative flex items-center justify-between space-x-4",
          "border rounded-md",
          "shadow-lg",
          "overflow-hidden",
          "destructive",
          "bg-destructive",
          "text-destructive-foreground",
          "border-destructive"
        )}
      >
        <div className="grid gap-1">
          {<h2 className="text-sm font-semibold">{error.name}</h2>}
          {<p className="text-sm opacity-90">{error.message}</p>}
        </div>
        <button
          className={cn(
            "shrink-0 h-8",
            "px-3",
            "bg-transparent",
            "text-sm font-medium",
            "border rounded-md",
            "ring-offset-background",
            "transition-colors",
            "inline-flex items-center justify-center",
            "hover:bg-secondary",
            "focus:outline-none",
            "focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "disabled:opacity-50",
            "disabled:pointer-events-none",
            "group-[.destructive]:border-muted/40",
            "group-[.destructive]:hover:bg-destructive",
            "group-[.destructive]:hover:text-destructive-foreground",
            "group-[.destructive]:hover:border-destructive/30",
            "group-[.destructive]:focus:ring-destructive"
          )}
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
