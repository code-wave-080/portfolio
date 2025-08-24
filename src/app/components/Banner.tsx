'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Banner() {
    const containerRef = React.useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            })

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 }
            )
        },
        { scope: containerRef }
    )

    return (
        <section className="relative overflow-hidden" id="home">
            <div
                ref={containerRef}
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
            >
                <div className="max-md:grow max-md:flex flex flex-col justify-center items-start max-w-[544px] gap-5">
                    <h1 className="banner-title flex flex-col gap-1 text-6xl sm:text-[74px] font-bold font-sans slide-up-and-fade">
                        <span className="text-pink-500">FRONTEND</span>
                        <span className="text-[#DEDEDE]">DEVELOPER</span>
                    </h1>
                    <p className="text-[#DEDEDE] opacity-70 slide-up-and-fade">
                        <span className="text-white font-bold opacity-100">
                            &quot;코드도 UX도 녹이 슨다.&quot;
                        </span>{' '}
                        지속 가능한 개발을 탐구하는 프론트엔드 개발자입니다.
                        <br />
                        새로운 기술을 배우고 적용하는 과정에서 끊임없이 성장하는
                        개발자를 목표로 합니다.
                    </p>
                    <a
                        href=""
                        className="group w-45 h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-pink-500 text-white font-bold hover:bg-primary-hover hover:text-pink-500 mt-4 banner-button slide-up-and-fade"
                    >
                        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                        <span className="z-[1]">HIRE ME</span>
                    </a>
                </div>
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade flex flex-col gap-1">
                        <h5 className="text-3xl sm:text-3.5xl font-anton font-bold text-pink-500">
                            3+
                        </h5>
                        <p className="text-[#DEDEDE] text-sm opacity-70">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade flex flex-col gap-1">
                        <h5 className="text-3xl sm:text-3.5xl font-anton font-bold text-pink-500">
                            6+
                        </h5>
                        <p className="text-[#DEDEDE] text-sm opacity-70">
                            Completed Projects
                        </p>
                    </div>
                    <div className="slide-up-and-fade flex flex-col gap-1">
                        <h5 className="text-3xl sm:text-3.5xl font-anton font-bold text-pink-500">
                            5.8K+
                        </h5>
                        <p className="text-[#DEDEDE] text-sm opacity-70">
                            Lines of Code Written
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
