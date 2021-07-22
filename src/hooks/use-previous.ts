import { useEffect, useRef } from 'preact/hooks'

function usePrevious<T>(value: T): T {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current as T
}

export default usePrevious
