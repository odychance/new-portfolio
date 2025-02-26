import { useState } from 'react'
import { Navbar, Hero, DarkModeBtn, About, Projects, Courses, Contact, Cursor, SmothScroll } from '../Components'

const Index = () => {
  const [ darkMode, setDarkMode ] = useState(false)
  return (
    <>
        <Cursor darkMode={darkMode} />
        <SmothScroll>

        <Navbar darkMode={darkMode}/>
        <Hero darkMode={darkMode}/>
        <About darkMode={darkMode}/>
        <Projects darkMode={darkMode} />
        <Courses darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <DarkModeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </SmothScroll>
    </>
  )
}

export default Index