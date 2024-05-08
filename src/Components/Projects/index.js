import React, { useState, useEffect, useRef } from 'react'
import styles from './Projects.module.css'
import classNames from 'classnames'
import { Carousel } from './Carousel'
import projects from '../../JsonFolder/Projects.json'
import anim from './Projects.anim.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Projects = ({ darkMode }) => {

    const textsRef = useRef(null)
    const projectsRef = useRef(null)

    useEffect(() => {
        anim({ textsRef, projectsRef })
    }, [])

    const projectsArr = projects.projects

    const [ summaryProject, setSummaryProject ] = useState('')

    return (
    <div className={classNames(styles.projectsContainer, { [ styles.darkModeActived ] : darkMode })} id="projects">
        <div className={styles.projectsInfo} ref={textsRef}>
            <h2 className={styles.textIndicator}>Scroll for the projects <br/>to see more...</h2>
            <h1 className={styles.projectsHeader}>-Some of my <br/> <span>PROJECTS-</span></h1>
        </div>

        <Carousel darkMode={darkMode} projectsArr={projectsArr} setSummaryProject={setSummaryProject} summaryProject={summaryProject} projectsRef={projectsRef}/>

    </div>
  )
}
