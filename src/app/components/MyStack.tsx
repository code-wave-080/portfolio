import * as Icons from '@/icons'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image, { StaticImageData } from 'next/image'

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>> | StaticImageData

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function MyStack() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up')

            if (!slideUpEl?.length) return

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                    end: 'bottom 90%',
                    scrub: 0.5,
                },
            })

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            })
        },
        { scope: containerRef }
    )

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            })

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            })
        },
        { scope: containerRef }
    )

    const iconMap: Record<string, IconComponent> = {
        javascript: Icons.JavascriptIcon,
        typescript: Icons.TypescriptIcon,
        vuedotjs: Icons.VueIcon,
        react: Icons.ReactIcon,
        nextdotjs: Icons.NextIcon,
        tailwindcss: Icons.TailwindIcon,
        sass: Icons.SassIcon,
        emotion: Icons.EmotionIcon,
        styledComponents: Icons.StyledComponentsIcon,
        framer: Icons.FramerIcon,
        git: Icons.GitIcon,
        github: Icons.GithubIcon,
        vercel: Icons.VercelIcon,
        firebase: Icons.FirebaseIcon,
        eslint: Icons.EslintIcon,
        prettier: Icons.PrettierIcon,
        storybook: Icons.StorybookIcon,
        intellij: Icons.IntellijIcon,
        echarts: Icons.EchartsIcon,
        slack: Icons.SlackIcon,
        notion: Icons.NotionIcon,
        figma: Icons.FigmaIcon,
        jira: Icons.GiraIcon,
    }

    const stacks = [
        {
            label: 'Language & Framework',
            value: 'LanguageAndFramework',
            items: [
                { label: 'Javascript', value: 'javascript', color: '#F7DF1E' },
                { label: 'TypeScript', value: 'typescript', color: '#3178C6' },
                { label: 'Vue.js', value: 'vuedotjs', color: '#4FC08D' },
                { label: 'React', value: 'react', color: '#61DAFB' },
                { label: 'Next.js', value: 'nextdotjs', color: '#000000' },
            ],
        },
        {
            label: 'Styling & Animation',
            value: 'StylingAndAnimation',
            items: [
                {
                    label: 'Tailwind CSS',
                    value: 'tailwindcss',
                    color: '#06B6D4',
                },
                { label: 'SASS', value: 'sass', color: '#CC6699' },
                { label: 'Emotion', value: 'emotion', color: '#CC6699' },
                {
                    label: 'styled-components',
                    value: 'styledComponents',
                    color: '#DB7093',
                },
                { label: 'Framer Motion', value: 'framer', color: '#0055FF' },
            ],
        },
        {
            label: 'Deployment & Development Tools',
            value: 'DeploymentAndDevelopmentTools',
            items: [
                { label: 'Git', value: 'git', color: '#F05032' },
                { label: 'GitHub', value: 'github', color: '#181717' },
                { label: 'Vercel', value: 'vercel', color: '#000000' },
                { label: 'Firebase', value: 'firebase', color: '#DD2C00' },
                { label: 'ESLint', value: 'eslint', color: '#4B32C3' },
                { label: 'Prettier', value: 'prettier', color: '#F7B93E' },
                { label: 'Storybook', value: 'storybook', color: '#FF4785' },
                { label: 'intellij', value: 'intellij', color: '#000000' },
            ],
        },
        {
            label: 'Data & Visualization',
            value: 'DataAndVisualization',
            items: [{ label: 'ECharts', value: 'echarts', color: '#AA344D' }],
        },
        {
            label: 'Collaboration & Communication',
            value: 'CollaborationAndCommunication',
            items: [
                { label: 'Slack', value: 'slack', color: '#4A154B' },
                { label: 'Notion', value: 'notion', color: '#000000' },
                { label: 'Figma', value: 'figma', color: '#F24E1E' },
                { label: 'Jira', value: 'jira', color: '#0052CC' },
            ],
        },
    ]

    return (
        <section className="pb-section" id="my-stack" ref={containerRef}>
            <div className="container">
                <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                    <h2 className="text-xl uppercase leading-none">MY STACK</h2>
                </div>
                <div className="space-y-20">
                    <div className="grid sm:grid-cols-12 gap-8">
                        {stacks.map(({ label, items }, index) => (
                            <React.Fragment key={index}>
                                <div className="sm:col-span-5">
                                    <p className="slide-up text-3xl font-anton leading-none text-muted-foreground uppercase font-bold text-[#B5B5B5]">
                                        {label}
                                    </p>
                                </div>
                                <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                    {items.map((item, index) => {
                                        if (iconMap[item.value]) {
                                        }
                                        const Icon = iconMap[item.value]
                                        return (
                                            <div
                                                className="slide-up flex gap-3.5 items-center leading-none"
                                                key={index}
                                            >
                                                <div className="rounded-full w-10 h-10 bg-[#313131] overflow-hidden flex items-center justify-center">
                                                    {typeof Icon ===
                                                    'function' ? (
                                                        <Icon
                                                            className="w-full h-full"
                                                            style={{
                                                                fill: item.color,
                                                            }}
                                                        />
                                                    ) : (
                                                        <Image
                                                            src={
                                                                Icons.EmotionIcon
                                                            }
                                                            alt={item.label}
                                                            className="w-full h-full"
                                                            style={{
                                                                backgroundColor:
                                                                    item.color,
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                                <span className="text-1xl capitalize text-[#DEDEDE]">
                                                    {item.label}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
