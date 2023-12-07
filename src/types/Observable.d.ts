export type Observable<State> =
  | [state: State, loading: false, error: undefined]
  | [state: undefined, loading: false, error: Error]
  | [state: undefined, loading: true, error: undefined]
