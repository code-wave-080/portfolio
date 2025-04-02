'use client'

import { useEffect, useState } from 'react'
import ScrollProgress from '@/app/components/ScrollProgress'
import Sidebar from '@/app/components/Sidebar'
import Banner from '@/app/components/Banner'
import AboutMe from '@/app/components/AboutMe'
import MyStack from '@/app/components/MyStack'
import MyExperience from "@/app/components/MyExperience";
import Footer from '@/app/components/Footer'

export default function Home() {
    const [translateY, setTranslateY] = useState<number>(-100)
    const [stars, setStars] = useState<
        { top: string; left: string; size: string; animate: boolean }[]
    >([])

    useEffect(() => {
        const generatedStars = Array.from({ length: 50 }, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3}px`,
            animate: Math.random() > 0.5, // 50% 확률로 깜빡이는 애니메이션 적용
        }))
        setStars(generatedStars)
    }, [])

    return (
        <div
            className="relative w-full h-screen overflow-x-hidden overflow-y-auto hide-scrollbar bg-[#212121]"
            onScroll={(e) => {
                const { scrollTop, scrollHeight, clientHeight } =
                    e.currentTarget
                const scrollPercentage =
                    (scrollTop / (scrollHeight - clientHeight)) * 100

                // translateY 값 업데이트 (예: -100%에서 0%로 이동)
                setTranslateY(-100 + scrollPercentage)
            }}
        >
            {stars.map((star, i) => (
                <div
                    key={i}
                    className={`fixed bg-white rounded-full ${star.animate ? 'twinkle-move' : ''}`}
                    style={{
                        width: star.size,
                        height: star.size,
                        top: star.top,
                        left: star.left,
                    }}
                />
            ))}
            <Sidebar />
            <div className="page-">
                <Banner />
                <AboutMe />
                <MyStack />
                <MyExperience />
                <Footer />
            </div>
            <ScrollProgress value={translateY} />
        </div>
    )
}
