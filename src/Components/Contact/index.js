import React from 'react'
import styles from './Contact.module.css'
import classNames from 'classnames'

export const Contact = ({ darkMode }) => {
  return (
    <div className={classNames(styles.contactContainer, { [ styles.darkModeActived ] : darkMode })} id="contact">
        <div className={styles.infoContact}>
            <p>odychance96@gmail.com</p>
            <p>+54 9 11 3258-4511</p>

            <span>LOCATION</span>

            <p>Av. Santa Fe, CABA <br/>Buenos Aires, Argentina</p>
        </div>
        <div className={styles.contactButtons}>
            <span>CONTACT ME</span>

            <div className={styles.buttonsIcon}>

                <div className={styles.btnHover}>
                    <a href='https://www.linkedin.com/in/oddychance' className={styles.iconBtn} target="_blank">
                        {/* <span>LinkedIn</span> */}
                        <img src='/Media/Images/IconsContact/LinkedInIcon.png' />
                    </a>
                </div>

                <div className={styles.btnHover}>
                    <a href='mailto:odychance96@gmail.com' className={styles.iconBtn} target="_blank">
                        {/* <span>Gmail</span> */}
                        <img src='/Media/Images/IconsContact/MailIcon.png' />
                    </a>
                </div>

                <div className={styles.btnHover}>
                    <a href='https://wa.me/541132584511' className={styles.iconBtn} target="_blank">
                        {/* <span>Whatsapp</span> */}
                        <img src='/Media/Images/IconsContact/WhatsappIcon.png' />
                    </a>
                </div>

                <div className={styles.btnHover}>
                    <a href='https://github.com/odychance' className={styles.iconBtn} target="_blank">
                        {/* <span>GitHub</span> */}
                        <img src='/Media/Images/IconsContact/GitHubIcon.png' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
