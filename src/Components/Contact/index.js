import styles from './Contact.module.css'
import classNames from 'classnames'

export const Contact = ({ darkMode }) => {
  return (
    <div className={classNames(styles.contactContainer, { [ styles.darkModeActived ] : darkMode })} id="contact">
        <div className={styles.infoContact}>
            <p>odychance96@gmail.com</p>
            <p>+54 9 11 7107-4108</p>
            <span>LOCATION</span>
            <p>Mendoza, Villa Urquiza, CABA <br/>Buenos Aires, Argentina</p>
        </div>
        <div className={styles.contactButtons}>
            <span>CONTACT ME</span>
            <div className={styles.buttonsIcon}>
                <div className={styles.btnHover}>
                    <a href='https://www.linkedin.com/in/oddychance' className={styles.iconBtn} target="_blank">
                        <img src='/Media/Images/IconsContact/LinkedInIcon.png' />
                    </a>
                </div>
                <div className={styles.btnHover}>
                    <a href='mailto:odychance96@gmail.com' className={styles.iconBtn} target="_blank">
                        <img src='/Media/Images/IconsContact/MailIcon.png' />
                    </a>
                </div>
                <div className={styles.btnHover}>
                    <a href='https://wa.me/5491171074108' className={styles.iconBtn} target="_blank">
                        <img src='/Media/Images/IconsContact/WhatsappIcon.png' />
                    </a>
                </div>
                <div className={styles.btnHover}>
                    <a href='https://github.com/odychance' className={styles.iconBtn} target="_blank">
                        <img src='/Media/Images/IconsContact/GitHubIcon.png' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
