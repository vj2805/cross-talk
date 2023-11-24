export type Observable<State extends Record<string, any>> =
  /* [state, loading, error] */
  | [State, false, undefined]
  | [undefined, false, Error]
  | [undefined, true, undefined]
