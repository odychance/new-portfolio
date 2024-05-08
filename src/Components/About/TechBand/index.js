import React from 'react'
import styles from './TechBand.module.css'
import classNames from 'classnames'
import tech from '../../../JsonFolder/TechInfo.json'

export const TechBand = ({darkmode, bandsRef}) => {

    const techs = tech.tech

  return (
    <div className={classNames(styles.containerBand, { [ styles.darkModeActived ] : darkmode })} ref={bandsRef}>

        <div className={styles.band1}>
            <div className={styles.bandSlide}>
                {techs.map( (item, index) => {
                    return (
                        <img src={item.icon} key={index} alt="icon"/>
                    )
                })}
            </div>
            <div className={styles.bandSlide}>
                {techs.map( (item, index) => {
                    return (
                        <img src={item.icon} key={index} alt="icon"/>
                    )
                })}
            </div>

        </div>

        <div className={styles.band2}>

            <div className={styles.bandSlide}>
                {techs.map( (item, index) => {
                    return (
                        <span key={index}>{item.name}</span>
                    )
                })}
            </div>
            <div className={styles.bandSlide}>
                {techs.map( (item, index) => {
                    return (
                        <span key={index}>{item.name}</span>
                    )
                })}
            </div>

        </div>

    </div>
  )
}
