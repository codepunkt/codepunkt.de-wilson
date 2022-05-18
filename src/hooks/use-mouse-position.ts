import throttlefn from 'lodash/throttle'
import { useEffect, useState } from 'preact/hooks'

interface State {
  x: number
  y: number
  timestamp: number
}

const useMousePosition = (fps: number = 30) => {
  const [position, setPosition] = useState<State>({
    x: 0,
    y: 0,
    timestamp: Date.now(),
  })

  const handleMouseMove = (event: MouseEvent) => {
    const timestamp = Date.now()
    const position = { x: event.clientX, y: event.clientY, timestamp }
    setPosition(position)
  }

  useEffect(() => {
    const handleMouseMoveThrottled = throttlefn(handleMouseMove, 1000 / fps)
    document.addEventListener('mousemove', handleMouseMoveThrottled)
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveThrottled)
    }
  }, [handleMouseMove, fps])

  return { ...position }
}

export default useMousePosition
