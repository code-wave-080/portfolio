'use client'

import TransitionLink from '@/components/TransitionLink'
import { use, useEffect, useRef, useState } from 'react'
import { ChevronLeft } from 'lucide-react'

interface Project {
    title: string
    description: string
    year: string
}

interface ProjectPageProps {
    id: string
}

export default function ProjectPage({
    params,
}: {
    params: Promise<ProjectPageProps>
}) {
    const { id } = use(params) as ProjectPageProps
    const containerRef = useRef<HTMLDivElement>(null)
    const [project, setProject] = useState<Project | null>(null)

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`/api/meta/${id}`)
            const data = await res.json()
            setProject(data)
        }

        fetchProject().catch(console.error)
    }, [id])

    return (
        <section className="pt-5 pb-14">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="inline-flex gap-2 items-center group h-12"
                >
                    <ChevronLeft
                        size={35}
                        strokeWidth={1.25}
                        className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300"
                    />
                    Back
                </TransitionLink>

                <div
                    className="top-0 min-h-[calc(100svh-100px)] flex mt-16"
                    id="info"
                >
                    <div className="relative w-full">
                        <div className="flex items-start gap-6 mx-auto mb-10 max-w-[635px]">
                            <h1 className="fade-in-later text-4xl md:text-[60px] leading-none overflow-hidden">
                                <span className="inline-block text-[#DEDEDE]">
                                    {project?.title}
                                </span>
                            </h1>

                            <div className="fade-in-later opacity-0 flex gap-2"></div>
                        </div>

                        <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Year
                                </p>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Tech & Technique
                                </p>

                                <div className="text-lg"></div>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Description
                                </p>

                                <div className="text-lg prose-xl markdown-text"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto"
                    id="images"
                ></div>
            </div>
        </section>
    )
}
