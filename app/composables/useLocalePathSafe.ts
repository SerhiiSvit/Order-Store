export function useLocalePathSafe() {
  const localePath = useLocalePath()

  function to(path: string) {
    return localePath(path)
  }

  return { to }
}
