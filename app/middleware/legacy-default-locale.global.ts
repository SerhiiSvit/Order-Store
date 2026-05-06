export default defineNuxtRouteMiddleware(to => {
  const legacyDefaultLocalePrefix = '/en'

  if (to.path === legacyDefaultLocalePrefix) {
    return navigateTo('/', { redirectCode: 301, replace: true })
  }

  if (to.path.startsWith(`${legacyDefaultLocalePrefix}/`)) {
    const normalizedPath = to.path.slice(legacyDefaultLocalePrefix.length) || '/'

    return navigateTo(normalizedPath, { redirectCode: 301, replace: true })
  }
})
