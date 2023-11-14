import type { Consumer } from "./Consumer"

export type Fetch<Returns> = Returns extends void
  ? never
  : () => Promise<Returns>

export type Query<Parameters extends object, Returns> = Returns extends void
  ? never
  : (parameters: Parameters) => Promise<Returns>

export type Mutate<Parameters extends object, Returns = void> = (
  parameters: Parameters
) => Promise<Returns>

export type Subscribe<Parameters extends object, Observable> = (
  parameters: Parameters,
  onChange: Consumer<Observable>,
  onError: Consumer<Error>
) => Unsubscribe

export type Unsubscribe = () => void
