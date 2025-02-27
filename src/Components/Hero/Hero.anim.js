import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const anim = ({containerVideoRef, titleRef, videoRef}) => {
    const containerVideo = containerVideoRef.current
    const title = titleRef.current
    const video = videoRef.current

    gsap.set(containerVideo, {
        height: "100%"
    })
    
    gsap.to(containerVideo, {
        height: "60%",
        duration: 1,
        scrollTrigger: {
            trigger: containerVideo,
            start: "bottom 100%",
            end: "bottom 99%", 
            toggleActions: "play none reverse none",
            ease: "power4.easeInOut"
        }
    })
    
    gsap.set(video, {
        scale: 1
    })
    
    gsap.to(video, {
        scale: 1.6,
        duration: 2,
        scrollTrigger: {
            trigger: containerVideo,
            start: "bottom 100%",
            end: "bottom 99%", 
            toggleActions: "play none reverse none",
            ease: "power1.easeInOut"
        }
    })
    
    gsap.set(title, {
        x: "-20vw",
        opacity: 0,
    })
    gsap.to(title, {
        x: 0,
        opacity: .7,
        duration: .5,
        scrollTrigger: {
            trigger: containerVideo,
            start: "bottom 100%",
            end: "bottom 99%", 
            toggleActions: "play none reverse none",
        }
    })

}

export default anim