import React, { useRef, useEffect } from 'react'
import styles from './Courses.module.css'
import classNames from 'classnames'
import courses from '../../JsonFolder/Courses.json'
import anim from './Courses.anim.js'

export const Courses = ({ darkMode }) => {

    const titleRef = useRef(null)
    const coursesRef = useRef(null)

    useEffect(() => {
        anim({titleRef, coursesRef})
    }, [])

    const coursesArr = courses.courses

  return (
    <div className={classNames( styles.containerCourses, { [ styles.darkModeActived ] : darkMode })}>
        <div className={styles.titleCourses} ref={titleRef}>
            <h2 className={styles.coursesHeader}>_ COURSES</h2>
            <h2 className={styles.coursesHeader}>TAKEN_</h2>
        </div>

        <div className={styles.courses} ref={coursesRef}>
            {coursesArr.map((item, idx) => {
                return (
                    <div key={idx} className={styles.course}>
                        <h3>{item.platform}</h3>
                        <h3>{item.name}</h3>
                        <h3>{item.status}</h3>
                    </div>
                )
            })}
        </div>

        <img src="/Media/Images/bg-blur-2.png" className={styles.bgGreen} />
    </div>
  )
}
