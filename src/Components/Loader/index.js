import { useEffect, useRef } from 'react'
import styles from './Loader.module.css'

export const Loader = () => {
  const containerRef = useRef(null)
  
  useEffect(() => {
    if(!containerRef.current) return
    containerRef.current.style.clipPath ="polygon(0% 0%, 0% 100%, 0 100%, 0 50%, 100% 50%, 100% 50%, 0 50%, 0 100%, 100% 100%, 100% 0%)";

    const spans = Array.from(containerRef.current.children)
    let idx = 0
    
    spans.forEach(span => (span.style.opacity = "0"))
    
    const interval = setInterval(() => {
      spans.forEach(span => (span.style.opacity = "0"))
      if(idx < spans.length) {
        spans[idx].style.opacity = "1"
        idx++
      } else {
        clearInterval(interval)
      }
    }, 1200)
    
    setTimeout(() => {
      if(!containerRef.current) return

      containerRef.current.style.transition = "clip-path 1s ease-in-out";
      containerRef.current.style.clipPath =
        "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)";
    }, spans.length * 1600)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.containerLoader} ref={containerRef}>
      <span className={styles.text}>Creating...</span><span></span>
      <span className={styles.text}>Building...</span><span></span>
      <span className={styles.text}>Innovating...</span>
    </div>
  )
}