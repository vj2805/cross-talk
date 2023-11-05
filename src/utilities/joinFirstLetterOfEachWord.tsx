export function joinFirstLetterOfEachWord(name: Optional<string>) {
  return name
    ?.split(" ")
    .map(n => n[0])
    .join("")
}
