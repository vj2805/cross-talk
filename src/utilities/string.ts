import { clsx } from "clsx"
import type { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export { v4 as generateId } from "uuid"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function joinFirstLetterOfEachWord(name: Optional<string>) {
  return name
    ?.split(" ")
    .map(n => n[0])
    .join("")
}

export function prettifyId(id: string, limit = 4) {
  return id.substring(0, limit)
}
