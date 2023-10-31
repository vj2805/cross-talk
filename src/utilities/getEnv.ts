import * as zod from "zod"

const EnvSchema = zod.object({
  GOOGLE_CLIENT_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
})

const ENV = EnvSchema.parse(process.env)

export function getEnv(key: keyof typeof ENV) {
  return ENV[key]
}
