import type { Consumer } from "./Consumer"

export type Obtain<Returns> = () => Promise<Returns>

export type Query<Parameters extends object, Returns> = (
  parameters: Parameters
) => Promise<Returns>

export type Mutate<Parameters extends object, Returns = void> = (
  parameters: Parameters
) => Promise<Returns>

export type Subscribe<
  Parameters extends object | null,
  Observable,
> = Parameters extends null
  ? (onChange: Consumer<Observable>, onError?: Consumer<Error>) => Unsubscribe
  : (
      parameters: Parameters,
      onChange: Consumer<Observable>,
      onError?: Consumer<Error>
    ) => Unsubscribe

export type Unsubscribe = () => void
