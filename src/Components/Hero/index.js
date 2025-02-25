import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'
import classNames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import anim from './Hero.anim'

gsap.registerPlugin(ScrollTrigger)

export const Hero = ({darkMode}) => {
    const containerVideoRef = useRef(null)
    const titleRef = useRef(null)
    const videoRef = useRef(null)

    useEffect(() => {
        anim({containerVideoRef, titleRef, videoRef})
    }, [])

  return (
    <div className={classNames(styles.containerHero, { [ styles.DarkModeActived ] : darkMode })} id="home">
        <h2 className={styles.FD} ref={titleRef}>FRONTEND DEVELOPER</h2>
        <div className={styles.containerHeroText}>
            <div className={styles.containerVid} ref={containerVideoRef}>
                <video src='/Media/Video/blackHoleVid.mp4' className={styles.blackholeVid} loop muted autoPlay ref={videoRef}/>
            </div>
                <h1 className={styles.heroTitle}>ODLANIER CHANCE</h1>
                <h2 className={styles.heroSubtitle}>| Welcome My Portfolio |</h2>
        </div>
        { !darkMode ? (
            <div className={styles.scrollSpinner}>
                <img  className={styles.textSpinner} src='/Media/Images/sd-black.png' />
                <img  className={styles.arrowSpinner} src='/Media/Images/arrow-b-1.png' />
            </div>
        ) : (
            <div className={styles.scrollSpinner}>
                <img  className={styles.textSpinner} src='/Media/Images/sd-white.png' />
                <img  className={styles.arrowSpinner} src='/Media/Images/arrow-g-1.png' />
            </div>
        )}
    </div>
  )
}