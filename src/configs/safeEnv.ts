import { z } from "zod"

const SafeEnvSchema = z.object({
  FIREBASE_CLIENT_EMAIL: z.string(),
  FIREBASE_PRIVATE_KEY: z.string(),
  FIREBASE_PROJECT_ID: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NODE_ENV: z.union([z.literal("development"), z.literal("production")]),
  STRIPE_SECRET_KEY: z.string(),
})

type SafeEnv = z.infer<typeof SafeEnvSchema>

export const safeEnv = SafeEnvSchema.parse(process.env)

export function getEnv<Key extends keyof SafeEnv>(key: Key): SafeEnv[Key] {
  return safeEnv[key]
}
