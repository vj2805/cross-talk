import * as zod from "zod"

const EnvSchema = zod.object({
  FIREBASE_CLIENT_EMAIL: zod.string(),
  FIREBASE_PRIVATE_KEY: zod.string(),
  FIREBASE_PROJECT_ID: zod.string(),
  GOOGLE_CLIENT_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
  STRIPE_SECRET_KEY: zod.string(),
})

export const env = EnvSchema.parse(process.env)
