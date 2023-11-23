const freeQuota = {
  LANGUAGES: 2,
  MESSAGES: 25,
} as const

type FreeQuota = typeof freeQuota

export function getFreeQuota<Key extends keyof FreeQuota>(key: Key) {
  return freeQuota[key]
}
