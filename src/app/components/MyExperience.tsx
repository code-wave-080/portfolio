import React from "react";

export default function MyExperience() {
    return (
        <section className="pb-section text-[#DEDEDE]" id="my-experience">
            <div className="container">
                <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                    <h2 className="text-xl uppercase leading-none">MY EXPERIENCE</h2>
                </div>
                <div className="grid gap-14">
                    <div className="experience-item">
                        <p className="text-xl font-bold">
                            XENOIMPACT
                        </p>
                        <div className="group">
                            <h4 className="text-4xl xs:text-6xl flex gap-4 font-anton font-bold transition-all duration-900 bg-gradient-to-r from-pink-500 to-white from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group hover:bg-left">
                                Frontend Developer
                                <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center"></span>
                            </h4>
                        </div>
                        <p className="text-lg text-muted-foreground">2022년 01월 - 현재</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
