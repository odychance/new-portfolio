import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({ text1Ref, text2Ref, imageRef, bandsRef }) => {
    const text1 = text1Ref.current
    const text2 = text2Ref.current
    const image = imageRef.current
    const bands = bandsRef.current

    gsap.fromTo(text1, {
        opacity: 0,
        x: -200
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: text1, 
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut",
            start: "top 80%",
            end: "top 55%"
        }
    })
    gsap.fromTo(text2, {
        opacity: 0,
        x: 200
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: text2, 
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut",
            start: "top 80%",
            end: "top 55%"
        }
    })
    gsap.fromTo(image, {
        opacity: 0,
        y: 200
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: image, 
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut",
            start: "top 80%",
            end: "top 55%"
        }
    })
    gsap.fromTo(bands, {
        opacity: 0,
        y: 200
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: bands, 
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut",
            start: "top 110%",
            end: "top 100%"
        }
    })
}

export default anim