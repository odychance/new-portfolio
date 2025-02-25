import React, { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'
import classNames from 'classnames';

const lerp = (s, e, t) => (e - s) * t + s;

export const Cursor = ({ darkMode }) => {
  const cursorRef = useRef()
  const cursorOutlineRef = useRef()

  const cursor = {
    current: { x: 0, y: 0 },
    last: { x: 0, y: 0 },
    ease: 0.1,
  }

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      cursor.current.x = e.clientX
      cursor.current.y = e.clientY
      cursorRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
      const { current, last, ease } = cursor
      last.x = lerp(last.x, current.x, ease)
      last.y = lerp(last.y, current.y, ease)
      cursorOutlineRef.current.style.transform = `translate(calc(${last.x}px - 50%), calc(${last.y}px - 50%))`
    })
  }, [])

  return (
    <>
      <div ref={cursorRef} className={classNames(styles.cursor, { [ styles.darkModeActived ] : darkMode})}></div>
      <div ref={cursorOutlineRef} className={styles.cursorOutline}></div>
    </>
  )
}