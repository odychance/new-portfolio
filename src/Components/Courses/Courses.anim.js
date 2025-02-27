import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const anim = ({ titleRef, coursesRef }) => {

    const title = [...titleRef.current.children]
    const courses = [...coursesRef.current.children]

    title.forEach((el, i) => {
        gsap.set(el, {
            x: i % 2 === 0 ? -400 : 400,
            opacity: 0
        })

        gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "top 60%",
                toggleActions: "play none reverse none"
            }
        })
    })

    courses.forEach((el, i) => {
        gsap.set( el, {
            x: 300,
            opacity: 0
        })

        gsap.to(el, {
            x: 0,
            opacity: 1,
            delay: i * .5,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none reverse none"
            }
        })
    })
}   

export default anim