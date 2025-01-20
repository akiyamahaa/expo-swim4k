export function getRandomElements<T>(array: T[], count: number) {
  if (count > array.length) {
    throw new Error('Count cannot be greater than the array length.')
  }
  return array.sort(() => Math.random() - 0.5).slice(0, count)
}
