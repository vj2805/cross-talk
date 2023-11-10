export function shuffle<T>(array: T[]) {
  return array.sort(() => Math.random() - 0.5)
}

export function swap<T>(array: T[], fromIndex: number, toIndex: number) {
  const element = array[fromIndex]
  array[fromIndex] = array[toIndex]
  array[toIndex] = element
}

export function insert<T>(array: T[], element: T, position = -1) {
  array.splice(position, 0, element)
  return element
}

export function update<T>(array: T[], index: number, element: Partial<T>) {
  return (array[index] = { ...array[index], ...element })
}

export function remove<T>(array: T[], predicate: (element: T) => boolean) {
  let count = 0
  array.forEach((element, index, array) => {
    if (predicate(element)) {
      swap(array, count++, index)
    }
  })
  return array.splice(0, count)
}
