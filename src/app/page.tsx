'use client'
import { useState } from 'react'
import ScrollProgress from '@/app/components/ScrollProgress'
import Banner from '@/app/components/Banner'
import AboutMe from '@/app/components/AboutMe'
import MyStack from '@/app/components/MyStack'
import MyExperience from '@/app/components/MyExperience'
import MyProjects from '@/app/components/MyProjects'

export default function Home() {
    const [translateY, setTranslateY] = useState<number>(-100)

    return (
        /*<div
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
            <div className="page-">
                <Banner />
                <AboutMe />
                <MyStack />
                <MyExperience />
                <MyProjects />
            </div>
            <ScrollProgress value={translateY} />
        </div>*/
        <div className="page-">
            <Banner />
            <AboutMe />
            <MyStack />
            <MyExperience />
            <MyProjects />
        </div>
    )
}
