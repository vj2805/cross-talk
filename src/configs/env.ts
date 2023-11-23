import { z } from "zod"

const EnvSchema = z.object({
  FIREBASE_CLIENT_EMAIL: z.string(),
  FIREBASE_PRIVATE_KEY: z.string(),
  FIREBASE_PROJECT_ID: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NODE_ENV: z.union([z.literal("development"), z.literal("production")]),
  STRIPE_SECRET_KEY: z.string(),
})

type Env = z.infer<typeof EnvSchema>

export const ENV = EnvSchema.parse(process.env)

export function getEnv<Key extends keyof Env>(key: Key): Env[Key] {
  return ENV[key]
}
