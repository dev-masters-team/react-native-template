export function objectEntries<
  T extends Record<PropertyKey, unknown>,
  K extends keyof T,
  V extends T[K],
>(o: T) {
  return Object.entries(o) as [K, V][]
}
