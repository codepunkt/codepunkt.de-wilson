import useScrollPosition from '@react-hook/window-scroll'
import { useWindowSize } from '@react-hook/window-size'
import { useEffect, useLayoutEffect, useState } from 'preact/hooks'

const useScrollYProgress = (fps: number = 60) => {
  const scrollY = useScrollPosition(fps)
  const [windowWidth, windowHeight] = useWindowSize()
  const [scrollYProgress, setScrollYProgress] = useState<number>(0)

  const isBrowser = typeof window !== 'undefined'
  const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    const maxScrollY = document.body.clientHeight - window.innerHeight
    setScrollYProgress(scrollY / maxScrollY)
  }, [windowWidth, windowHeight, scrollY])

  return { scrollY, scrollYProgress }
}

export default useScrollYProgress
