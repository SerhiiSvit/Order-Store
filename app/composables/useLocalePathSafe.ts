export function useLocalePathSafe() {
  const localePath = useLocalePath()
  const { locale } = useI18n()

  const defaultLocale = 'en'

  function to(path: string) {
    const localizedPath = localePath(path)
    const defaultPrefix = `/${defaultLocale}`

    if (locale.value === defaultLocale) {
      if (localizedPath === defaultPrefix) {
        return '/'
      }

      if (localizedPath.startsWith(`${defaultPrefix}/`)) {
        return localizedPath.slice(defaultPrefix.length)
      }
    }

    return localizedPath
  }

  return { to }
}
