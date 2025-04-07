'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type ProjectItem = {
    id: string
    img: string
    title: string
    stacks: Array<string>
}

type ProjectItems = Array<ProjectItem>

export default function MyProjects() {
    const router = useRouter()
    const [hoveredId, setHoveredId] = useState<string | null>()

    const items: ProjectItems = [
        {
            id: '1',
            img: '/images/project-1.png',
            title: 'BLOG',
            stacks: ['React', 'Sass', 'Firebase'],
        },
        {
            id: '2',
            img: '/images/project-1.png',
            title: 'BLOG',
            stacks: ['React', 'Sass', 'Firebase'],
        },
        {
            id: '3',
            img: '/images/project-1.png',
            title: 'BLOG',
            stacks: ['React', 'Sass', 'Firebase'],
        },
        {
            id: '4',
            img: '/images/project-1.png',
            title: 'BLOG',
            stacks: ['React', 'Sass', 'Firebase'],
        },
    ]

    function handleProjectNavigate({ id }: ProjectItem) {
        router.push(`/projects/${id}`)
    }

    return (
        <section className="pb-section text-[#DEDEDE]" id="my-projects">
            <div className="container">
                <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                    <h2 className="text-xl uppercase leading-none">
                        MY PROJECTS
                    </h2>
                </div>
                <div className="pj-img-con flex flex-wrap gap-[40px]">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => handleProjectNavigate(item)}
                            className={`pj-img-box
                            ${hoveredId === item.id ? 'active' : ''}
                            border-2 rounded-[20px] w-[calc(50%-20px)] h-[500px]`}
                        >
                            <div className="bg-wrap">
                                <img src={item.img} alt="project-1" />
                            </div>
                            <div className="txt-item">
                                <p>{item.title}</p>
                                <ul className="hover-list-txt">
                                    <li>React</li>
                                    <li>Sass</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
