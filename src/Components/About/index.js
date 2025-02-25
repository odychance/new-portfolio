import { useEffect, useRef } from 'react'
import styles from './About.module.css'
import classNames from 'classnames'
import { TechBand } from './TechBand'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import anim from './About.anim'

gsap.registerPlugin(ScrollTrigger)

export const About = ({ darkMode }) => {
  const text1Ref = useRef(null)
  const text2Ref = useRef(null)
  const imageRef = useRef(null)
  const bandsRef = useRef(null)

  useEffect(() => {
    anim({ text1Ref, text2Ref, imageRef, bandsRef})
  }, [])

  return (
    <div className={classNames(styles.containerAbout, { [ styles.darkModeActived ] : darkMode })} id="about">
        <div className={styles.infoContainer}>
          <span className={styles.aboutText1} ref={text1Ref}>Hi, I’m Odlanier, a frontend developer with knowledge of different technologies and tools.</span>
          <img src='/Media/Images/OddyFoto.png' className={styles.profilePhoto} alt="Oddy" ref={imageRef}/>
          <span className={styles.aboutText2} ref={text2Ref}>I have a B2 Upper intermediate lvl of English, so i don’t have major problems communicating orally or in writting.</span>
        </div>
        <TechBand darkMode={darkMode} bandsRef={bandsRef}/>
    </div>
  )
}
