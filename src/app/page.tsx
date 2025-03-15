'use client'

import { useState } from 'react'

export default function Home() {
    const [translateY, setTranslateY] = useState<number>(-100)

    return (
        <div
            className="h-screen overflow-y-auto bg-gray-100"
            onScroll={(e) => {
                const { scrollTop, scrollHeight, clientHeight } =
                    e.currentTarget
                const scrollPercentage =
                    (scrollTop / (scrollHeight - clientHeight)) * 100

                // translateY 값 업데이트 (예: -100%에서 0%로 이동)
                setTranslateY(-100 + scrollPercentage)
            }}
        >
            <div className="grid grid-rows-[0px_1fr_65px] bg-[#212121]">
                <div className="sticky top-0 z-[4]">
                    <button className="group size-12 absolute top-5 right-5 md:right-10">
                        <span className="inline-block w-3/5 h-0.5 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] md:group-hover:rotate-12 bg-[#DEDEDE]"></span>
                        <span className="inline-block w-3/5 h-0.5 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] md:group-hover:-rotate-12 bg-[#DEDEDE]"></span>
                    </button>
                </div>
                <div className="page-">
                    <section className="relative overflow-hidden" id="banner">
                        <div className="container h-[100svh] min-h-[530px] flex flex-col justify-center ml-20 gap-5">
                            <h1 className="flex flex-col gap-1 text-7xl font-bold font-sans">
                                <span className="text-pink-500">FRONTEND</span>
                                <span className="text-[#DEDEDE]">
                                    DEVELOPER
                                </span>
                            </h1>
                            <p className="text-[#DEDEDE] opacity-70">
                                <span className="text-white font-bold opacity-100">
                                    &quot;코드도 UX도 녹이 슨다.&quot;
                                </span>{' '}
                                지속 가능한 개발을 고민하는 프론트엔드
                                개발자입니다.
                                <br />
                                새로운 기술을 배우고 적용하는 과정에서 끊임없이
                                성장하는 개발자를 목표로 합니다.
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
                    </section>
                </div>
                <div className="footer"></div>
            </div>
            <div className="fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-[#313131] overflow-hidden">
                <div
                    className="w-full bg-pink-500 rounded-full h-full"
                    style={{ transform: `translateY(${translateY}%)` }}
                ></div>
            </div>
        </div>
    )
}
