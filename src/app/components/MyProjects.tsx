import React, { useState } from 'react'

export default function MyProjects() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section className="pb-section text-[#DEDEDE]" id="my-projects">
            <div className="container">
                <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                    <h2 className="text-xl uppercase leading-none">
                        MY PROJECTS
                    </h2>
                </div>
                <div className="pj-img-con flex flex-wrap gap-[40px]">
                    <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`pj-img-box
                         ${isHovered ? 'active' : ''}
                          border-2 rounded-[20px] w-[calc(50%-20px)] h-[500px]`}
                    >
                        <div className="bg-wrap">
                            <img src="/images/project-1.png" alt="project-1" />
                        </div>
                        <div className="txt-item">
                            <p>BLOG</p>
                            <ul className="hover-list-txt">
                                <li>React</li>
                                <li>Sass</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pj-img-box border-2 rounded-[20px] w-[calc(50%-20px)] h-[500px]"></div>
                    <div className="pj-img-box border-2 rounded-[20px] w-[calc(50%-20px)] h-[500px]"></div>
                    <div className="pj-img-box border-2 rounded-[20px] w-[calc(50%-20px)] h-[500px]"></div>
                </div>
            </div>
        </section>
    )
}
