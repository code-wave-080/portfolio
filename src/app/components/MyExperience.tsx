import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function MyExperience() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            })

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            })
        },
        { scope: containerRef }
    )

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            })

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            })
        },
        { scope: containerRef }
    )

    return (
        <section className="pb-section text-[#DEDEDE]" id="my-experience">
            <div ref={containerRef} className="container">
                <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                    <h2 className="text-xl uppercase leading-none">
                        MY EXPERIENCE
                    </h2>
                </div>
                <div className="grid gap-14 cursor-pointer">
                    <div className="experience-item">
                        <p className="text-xl">XENOIMPACT</p>
                        <div className="group">
                            <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton font-bold transition-all duration-900 bg-gradient-to-r from-pink-500 to-white from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group hover:bg-left">
                                Frontend Developer
                                <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center"></span>
                            </h4>
                        </div>
                        <p className="text-lg text-muted-foreground">
                            2022년 01월 - 현재
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
