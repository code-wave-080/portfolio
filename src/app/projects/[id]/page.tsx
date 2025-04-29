'use client'

import TransitionLink from '@/components/TransitionLink'
import { use, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface Project {
    id: string
    title: string
    description: string
    url: string
    year: string
    techStacks: Array<string>
    images: Array<string>
    role: string
    sourceCode: string
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

    console.log(project)

    useGSAP(
        () => {
            if (!containerRef.current) {
                return
            }

            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 30,
            })
            const tl = gsap.timeline({
                delay: 0.5,
            })

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            })
        },
        { scope: containerRef }
    )

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

                            <div className="fade-in-later opacity-0 flex gap-2">
                                {project?.url && (
                                    <a
                                        href={project?.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="hover:text-pink-500"
                                    >
                                        <ExternalLink size={30} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Year
                                </p>

                                <div className="text-lg">{project?.year}</div>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Tech & Technique
                                </p>

                                <div className="inline-flex items-center gap-2 text-lg">
                                    {project?.techStacks.map((stack) => (
                                        <div
                                            className="border border-gray-300 rounded-full px-3 py-1 text-sm"
                                            key={stack}
                                        >
                                            {stack}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-muted-foreground font-anton mb-3">
                                    Description
                                </p>

                                <div className="text-lg prose-xl markdown-text">
                                    {/*{parse(project.description)}*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto"
                    id="images"
                >
                </div>
            </div>
        </section>
    )
}
