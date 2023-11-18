export function createStore<Store extends Record<string, any>>(
  initialStore: Store
) {
  const store = initialStore
  const listeners: Listeners<Store> = {}
  return {
    get<Key extends keyof Store>(key: Key) {
      return store[key]
    },
    set<Key extends keyof Store>(
      key: Key,
      value: (previous: Store[Key]) => Store[Key]
    ) {
      store[key] = value(store[key])
      listeners[key]?.forEach(listener => listener(store[key]))
    },
    subscribe<Key extends keyof Store>(
      key: Key,
      listener: (value: Store[Key]) => void,
      options = defaultSubscribeOptions
    ) {
      const existing = listeners[key] ?? new Set()
      existing.add(listener)
      listeners[key] = existing
      if (options.fireImmediately) {
        listener(store[key])
      }
    },
  }
}

const defaultSubscribeOptions: SubscribeOptions = {
  fireImmediately: false,
}

type SubscribeOptions = {
  fireImmediately?: boolean
}

type Listeners<Store extends Record<string, any>> = {
  [Key in keyof Store]?: Set<(value: Store[Key]) => void>
}
