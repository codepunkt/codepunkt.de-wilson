import { useEffect, useState } from 'preact/hooks'

type MediaQueryObject = { [key: string]: string | number | boolean }

const camelToHyphen = (camelString: string): string =>
  camelString
    .replace(/[A-Z]/g, (string) => `-${string.toLowerCase()}`)
    .toLowerCase()

const queryObjectToString = (query: string | MediaQueryObject): string => {
  if (typeof query === 'string') {
    return query
  }

  return Object.entries(query)
    .map(([feature, value]) => {
      const convertedFeature = camelToHyphen(feature)
      let convertedValue = value

      if (typeof convertedValue === 'boolean') {
        return convertedValue ? convertedFeature : `not ${convertedFeature}`
      }

      if (
        typeof convertedValue === 'number' &&
        /[height|width]$/.test(convertedFeature)
      ) {
        convertedValue = `${convertedValue}px`
      }

      return `(${convertedFeature}: ${convertedValue})`
    })
    .join(' and ')
}

const noop = () => {}

const mockMediaQueryList: MediaQueryList = {
  media: '',
  matches: false,
  onchange: noop,
  addListener: noop,
  removeListener: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_: Event) => true,
}

const useMedia = (
  rawQuery: string | MediaQueryObject,
  defaultState: boolean = false
) => {
  const [state, setState] = useState(defaultState)
  const query = queryObjectToString(rawQuery)

  useEffect(() => {
    let mounted = true
    const mediaQueryList: MediaQueryList =
      typeof window === 'undefined'
        ? mockMediaQueryList
        : window.matchMedia(query)

    const onChange = () => {
      if (!mounted) {
        return
      }

      setState(Boolean(mediaQueryList.matches))
    }

    mediaQueryList.addEventListener('change', onChange)
    setState(mediaQueryList.matches)

    return () => {
      mounted = false
      mediaQueryList.removeEventListener('change', onChange)
    }
  }, [query])

  return state
}

export default useMedia
