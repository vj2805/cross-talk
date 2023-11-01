import * as zod from "zod"

const EnvSchema = zod.object({
  FIREBASE_CLIENT_EMAIL: zod.string(),
  FIREBASE_PRIVATE_KEY: zod.string(),
  FIREBASE_PROJECT_ID: zod.string(),
  GOOGLE_CLIENT_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
})

const ENV = EnvSchema.parse(process.env)

export function getEnv(key: keyof typeof ENV) {
  return ENV[key]
}
