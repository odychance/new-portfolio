import { useRef, useEffect } from 'react'
import styles from './Courses.module.css'
import classNames from 'classnames'
import courses from '../../JsonFolder/Courses.json'
import anim from './Courses.anim.js'

export const Courses = ({ darkMode }) => {
    const titleRef = useRef(null)
    const coursesRef = useRef(null)
    const coursesArr = courses.courses

    useEffect(() => {
        anim({titleRef, coursesRef})
    }, [])


  return (
    <div className={classNames( styles.containerCourses, { [ styles.darkModeActived ] : darkMode })}>
        <div className={styles.titleCourses} ref={titleRef}>
            <h2 className={styles.coursesHeader}>COURSES <br/>TAKEN</h2>
        </div>
        <div className={styles.courses} ref={coursesRef}>
            {coursesArr.map((item, idx) => {
                return (
                    <div key={idx} className={styles.course}>
                        <a href={item.urlCourse} target='_blank'>
                            <h3>{item.platform}</h3>
                            <h3>{item.name}</h3>
                            <h3>{item.status}</h3>
                        </a>
                    </div>
                )
            })}
        </div>
        <img src="/Media/Images/bg-blur-2.png" className={styles.bgGreen} />
    </div>
  )
}
