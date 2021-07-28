import { RefObject } from 'preact'
import { useEffect, useRef, useState } from 'preact/hooks'
import useWindowScroll from '@react-hook/window-scroll'
import { useWindowSize } from '@react-hook/window-size'

interface Position {
  x: number
  y: number
}

const useElementCenter = (
  initialValue: Position
): Position & { ref: RefObject<SVGCircleElement> } => {
  const ref = useRef<SVGCircleElement>(null)
  const [center, setCenter] = useState<Position>(initialValue)
  const scrollY = useWindowScroll()
  const [windowWidth, windowHeight] = useWindowSize({ wait: 100 })

  useEffect(() => {
    if (ref.current) {
      const bcr = ref.current.getBoundingClientRect()
      setCenter({
        x: bcr.x + bcr.width / 2,
        y: bcr.y + bcr.height / 2,
      })
    }
  }, [ref, scrollY, windowWidth, windowHeight])

  return { ref, ...center }
}

export default useElementCenter
