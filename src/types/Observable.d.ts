export type Observable<State> =
  /* [state, loading, error] */
  | [State, false, undefined]
  | [undefined, false, Error]
  | [undefined, true, undefined]
