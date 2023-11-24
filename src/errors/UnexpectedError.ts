export class UnexpectedError extends Error {
  name = "Unexpected Error"
  constructor(place: string) {
    super(`Unexpected Error: [${place}]`)
  }
}
