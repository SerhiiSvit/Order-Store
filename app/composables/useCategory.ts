type HeaderNavigationMatch = 'exact' | 'prefix'

type HeaderNavigationConfig = {
  key: string
  labelKey: string
  to?: string
  match?: HeaderNavigationMatch
}

type CategoryItem = HeaderNavigationConfig & {
  href?: string
  isActive: boolean
}

const headerNavigationConfig: HeaderNavigationConfig[] = [
  {
    key: 'home',
    labelKey: 'header.headerNav.home',
    to: '/',
    match: 'exact'
  },
  {
    key: 'browse-menu',
    labelKey: 'header.headerNav.browseMenu',
    to: '/catalog',
    match: 'prefix'
  },
  {
    key: 'special-offers',
    labelKey: 'header.headerNav.specialOffers'
  },
  {
    key: 'restaurants',
    labelKey: 'header.headerNav.restaurants',
    to: '/restaurants',
    match: 'prefix'
  },
  {
    key: 'track-order',
    labelKey: 'header.headerNav.trackOrder'
  }
]

function isRouteActive(
  currentPath: string,
  targetPath: string,
  match: HeaderNavigationMatch
): boolean {
  if (match === 'exact') {
    return currentPath === targetPath
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}

export function useCategory() {
  const route = useRoute()
  const { to } = useLocalePathSafe()

  const items = computed<CategoryItem[]>(() =>
    headerNavigationConfig.map(item => {
      const href = item.to ? to(item.to) : undefined
      const match = item.match ?? 'prefix'

      return {
        ...item,
        href,
        isActive: href ? isRouteActive(route.path, href, match) : false
      }
    })
  )

  return { items }
}
