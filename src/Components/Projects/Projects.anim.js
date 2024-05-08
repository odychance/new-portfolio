import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({ textsRef, projectsRef }) => {
    const projects = [...projectsRef.current.children]
    const texts = [...textsRef.current.children]

    console.log(projects)

    texts.forEach( (el, i) => {
        gsap.from(el, {
            x: i === 0 ? -300 : 500,
            opacity: 0
        })

        gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                toggleActions: "play none reverse none",
                ease: "power4.easeInOut",
                start: "top 80%",
                end: "top 55%",
            }
        })

    })

    projects.forEach((el, i) => {
        gsap.from(el, {
            x: i % 2 === 0 ? 300 : -300,
            opacity: 0,
        })
        
        gsap.to(el, {
            duration: .5,
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 55%",
                ease: "power4.easeInOut",
                toggleActions: "play none reverse none",
            }
        })
    })

}

export default anim