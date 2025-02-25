import React, { useState } from 'react'
import styles from './Navbar.module.css'
import classNames from 'classnames'
import { Link } from 'react-scroll'
import { BtnMenu } from './ElementsNavbar/BtnMenu'

export const Navbar = ({ darkMode }) => {
  const [ statusBtnActived, setStatusBtnActived ] = useState(false)

  return (
    <div className={classNames(styles.containerNavbar, { [ styles.ContainerNavbarAndMenu ] : statusBtnActived}, { [ styles.darkModeActived ] : darkMode})}>
      <div className={styles.containerBar}>
        <span>ODDY</span>
        <div className={styles.containerBtnMenu}>
          <BtnMenu statusBtnActived={statusBtnActived} setStatusBtnActived={setStatusBtnActived}/>
        </div>
      </div>
        { !statusBtnActived ? (
          <div className={styles.containerMenu}>
            <div className={styles.buttons}>
              <Link to="home" spy={true} smooth={true} offset={-110} duration={500}>HOME</Link>
              <Link to="about" spy={true} smooth={true} offset={-10} duration={500}>ABOUT</Link>
              <Link to="projects" spy={true} smooth={true} offset={-20} duration={500}>PROJECTS</Link>
              <Link to="contact" spy={true} smooth={true} offset={-110} duration={800}>CONTACT</Link>
              <a href="/Docs/Cv:OddyChance.pdf" download className={styles.cv}>Download CV</a>
            </div>
          </div>
       ) : (
          <div className={classNames(styles.containerMenu, { [ styles.containerMenuActived ] : statusBtnActived})}>
            <div className={styles.buttons}>
              <Link to="home" spy={true} smooth={true} offset={-110} duration={500}>HOME</Link>
              <Link to="about" spy={true} smooth={true} offset={-10} duration={500}>ABOUT</Link>
              <Link to="projects" spy={true} smooth={true} offset={-20} duration={500}>PROJECTS</Link>
              <Link to="contact" spy={true} smooth={true} offset={-110} duration={800}>CONTACT</Link>
              <a href="/Docs/Curriculum-oddy.pdf" download className={styles.cv}>Download CV</a>
            </div>
          </div>
        )}
    </div>
  )
}

