import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const anim = ({containerVideoRef, titleRef, videoRef}) => {
    const containerVideo = containerVideoRef.current
    const title = titleRef.current
    const video = videoRef.current

    gsap.fromTo(containerVideo, {
        height: "100%"
    }, {
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
    
    gsap.fromTo(video, {
        scale: 1
    }, {
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

    
    gsap.fromTo( title, {
        x: "20vw",
        opacity: 0,
    }, {
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