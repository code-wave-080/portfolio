'use client'

import { use, useEffect, useRef, useState } from 'react'
import TransitionLink from '@/components/TransitionLink'
import { ChevronLeft } from 'lucide-react'
import { CareerItem } from '@/app/components/MyExperience'

interface CareerPageProps {
    id: string
}

export default function CareerPage({
    params,
}: {
    params: Promise<CareerPageProps>
}) {
    const { id } = use(params) as CareerPageProps
    const containerRef = useRef<HTMLDivElement>(null)
    const [career, setCareer] = useState<CareerItem | null>(null)

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`/api/meta/career/${id}`)
            const data = await res.json()
            setCareer(data)
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
                                    {career?.companyName}
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
