export function getFromStorage(key: string) {
  const item = window.localStorage.getItem(key)
  return item && JSON.parse(item)
}

export function setToStorage(key: string, value: any) {
  const str = JSON.stringify(value)
  window.localStorage.setItem(key, str)
}

export function removeFromStorage(key: string) {
  window.localStorage.removeItem(key)
}
