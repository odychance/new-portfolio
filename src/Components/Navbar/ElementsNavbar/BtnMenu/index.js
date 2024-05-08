import React from 'react'
import styles from './BtnMenu.module.css'
import classNames from 'classnames'

export const BtnMenu = ({statusBtnActived, setStatusBtnActived}) => {

    const switchStatus = () => {
        setStatusBtnActived(!statusBtnActived)
    }

  return (
    <div className={styles.containerBtn} onClick={switchStatus}>
        <div className={classNames(styles.btnLineTop, { [ styles.btnLineTopActived ] : statusBtnActived})}/>
        <div className={classNames(styles.btnLineMid, { [ styles.btnLineMidActived ] : statusBtnActived})}/>
        <div className={classNames(styles.btnLineBot, { [ styles.btnLineBotActived ] : statusBtnActived})}/>
    </div>
  )
}
