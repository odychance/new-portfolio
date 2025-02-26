import { useEffect, useRef } from "react"
import Lenis from "lenis"

export const SmothScroll = ({children}) => {
  const scrollContainerRef = useRef()

  useEffect(() => {
      const lenis = new Lenis({
        duration: 2,
        smothWheel: true,
        smoothTouch: false,
        lerp: 0.1
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => lenis.destroy()
  }, [])

  return (
    <div ref={scrollContainerRef}>
      {children}
    </div>
  )
}