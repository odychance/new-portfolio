import React from "react";
import styles from './DarkModeBtn.module.css'
import classNames from "classnames";

export const DarkModeBtn = ({ darkMode, setDarkMode }) => {
    const switchDarkMode = () =>  setDarkMode(!darkMode)

    return (
        <div className={styles.containerBtn} onClick={switchDarkMode}>
            { darkMode ? (
                <div className={styles.moonBtn}>
                    <img src="/Media/Images/moon-icon.png" className={classNames(styles.moonIcon, { [ styles.moonIconTransition ] : darkMode})} />
                </div>            
            ) : (
                <div className={styles.sunBtn}>
                    <img src="/Media/Images/sun-icon.png" className={classNames(styles.sunIcon, { [ styles.sunIconTransition ] : !darkMode})} />
                </div>
            )}
        </div>
    )
}