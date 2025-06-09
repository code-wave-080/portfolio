import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function MyExperience() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    const data = [
        {
            id: '1',
            projectName: '화물 적재 시뮬레이션',
            startDate: '2025.05',
            endDate: null,
        },
        { id: '2', projectName: 'Arches', startDate: '2023.01', endDate: null },
        {
            id: '3',
            projectName: '공통 컴포넌트 문서화',
            startDate: '2023.09',
            endDate: '2024.01',
        },
        {
            id: '4',
            projectName: 'Maru',
            startDate: '2022.01',
            endDate: '2022.12',
        },
    ]

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
                    <div className="experience-item group">
                        <div className="experience-item-title mb-8">
                            <p className="text-xl">XENOIMPACT</p>
                            <div>
                                <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton font-bold transition-all duration-900 bg-gradient-to-r from-pink-500 to-white from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                    Frontend Developer
                                    <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center"></span>
                                </h4>
                            </div>
                            <p className="text-lg text-muted-foreground">
                                2022년 01월 - 현재
                            </p>
                        </div>
                        <div className="flex flex-col gap-8">
                            {data.map((item, index) => (
                                <div
                                    className="relative"
                                    key={item.id}
                                    onMouseEnter={() => setHoveredId(item.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <div className="flex items-center gap-5">
                                        <div
                                            className={`w-[20px] h-[20px] rounded-full z-1 ${
                                                hoveredId === item.id
                                                    ? 'bg-pink-500'
                                                    : 'bg-white'
                                            }`}
                                        ></div>
                                        <h4
                                            className={`text-lg font-bold transition-transform duration-300 ${
                                                hoveredId === item.id
                                                    ? 'scale-110'
                                                    : ''
                                            }`}
                                        >
                                            {item.projectName}
                                        </h4>
                                    </div>
                                    <div className="pl-10">
                                        <span>
                                            {`${item.startDate} - ${item.endDate ?? '진행 중'}`}
                                        </span>
                                    </div>
                                    {data.length !== index + 1 && (
                                        <div className="absolute top-[20px] left-[10px] h-[70px] border-l border-[#DEDEDE] border-dashed z-0"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
