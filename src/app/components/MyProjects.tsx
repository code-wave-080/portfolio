'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

interface ProjectItem {
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
            id: 'mcard',
            img: '/images/mcard.png',
            title: 'CARD',
            stacks: ['React', 'Sass', 'Firebase'],
        },
        {
            id: 'wedding',
            img: '/images/wedding.png',
            title: 'WEDDING',
            stacks: ['React', 'Sass', 'Firebase'],
        },
        /*{
            id: '3',
            img: '/images/project-3.png',
            title: 'TWITTER',
            stacks: ['React', 'Sass', 'Firebase'],
        },
        {
            id: '4',
            img: '/images/project-4.png',
            title: 'BLOG',
            stacks: ['React', 'Sass', 'Firebase'],
        },*/
    ]

    function handleProjectNavigate({ id }: ProjectItem) {
        router.push(`/projects/${id}`)
    }

    return (
        <section className="pb-section text-[#DEDEDE]" id="my-projects">
            <div className="container">
                <SectionTitle title="MY PROJECTS"></SectionTitle>
                <div className="pj-img-con flex flex-wrap gap-[40px]">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => handleProjectNavigate(item)}
                            className={`pj-img-box
                            ${hoveredId === item.id ? 'active' : ''}
                            border-2 rounded-[20px] overflow-hidden w-[calc(50%-20px)] h-[500px]`}
                        >
                            <div className="bg-wrap relative w-full h-full">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>
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
