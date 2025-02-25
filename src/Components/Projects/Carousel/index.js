import styles from './Carousel.module.css'
import classNames from 'classnames'

export const Carousel = ({ darkMode, projectsArr, setSummaryProject, summaryProject, projectsRef }) => {
  return (
      <div className={styles.containerCarousel} ref={projectsRef}>
        {projectsArr.map((item, i) => {
          return(
              <a
                className={classNames(styles.containerImage, { [ styles.darkModeActived ] : darkMode})}
                key={i}
                href={item.domain}
                target='_blank'
              >
                <img src={item.image} alt={item.name} className={styles.slide} />
                <div className={styles.imageTextContainer}>
                  <h2 className={styles.textImg}><p>{item.name}</p> <br/>Click to see more</h2>
                  <h3 className={styles.summaryText}>{item.summary}</h3>
                </div>
              </a>
            )
        })}
      </div>
    )
}
