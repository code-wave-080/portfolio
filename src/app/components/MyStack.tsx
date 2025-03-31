import JavascriptIcon from '@/icons/javascript.svg'
import TypescriptIcon from '@/icons/typescript.svg'
import VueIcon from '@/icons/vuedotjs.svg'
import ReactIcon from '@/icons/react.svg'
import NextIcon from '@/icons/nextdotjs.svg'
import TailwindIcon from '@/icons/tailwindcss.svg'
import FramerIcon from '@/icons/framer.svg'
import SassIcon from '@/icons/sass.svg'
import StyledComponentsIcon from '@/icons/styledcomponents.svg'
import GitIcon from '@/icons/git.svg'
import GithubIcon from '@/icons/github.svg'
import VercelIcon from '@/icons/vercel.svg'
import FirebaseIcon from '@/icons/firebase.svg'
import EslintIcon from '@/icons/eslint.svg'
import PrettierIcon from '@/icons/prettier.svg'
import StorybookIcon from '@/icons/storybook.svg'
import IntellijIcon from '@/icons/intellijidea.svg'
import EchartsIcon from '@/icons/apacheecharts.svg'
import SlackIcon from '@/icons/slack.svg'
import NotionIcon from '@/icons/notion.svg'
import FigmaIcon from '@/icons/figma.svg'
import GiraIcon from '@/icons/jira.svg'
import React from 'react'

export default function MyStack() {
    const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
        javascript: JavascriptIcon,
        typescript: TypescriptIcon,
        vuedotjs: VueIcon,
        react: ReactIcon,
        nextdotjs: NextIcon,
        tailwindcss: TailwindIcon,
        sass: SassIcon,
        styledComponents: StyledComponentsIcon,
        framer: FramerIcon,
        git: GitIcon,
        github: GithubIcon,
        vercel: VercelIcon,
        firebase: FirebaseIcon,
        eslint: EslintIcon,
        prettier: PrettierIcon,
        storybook: StorybookIcon,
        intellij: IntellijIcon,
        echarts: EchartsIcon,
        slack: SlackIcon,
        notion: NotionIcon,
        figma: FigmaIcon,
        jira: GiraIcon,
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
                                    const Icon = iconMap[item.value]
                                    return (
                                        <div
                                            className="slide-up flex gap-3.5 items-center leading-none"
                                            key={index}
                                        >
                                            <div className="rounded-full w-10 h-10 bg-[#313131] overflow-hidden flex items-center justify-center">
                                                {Icon && (
                                                    <Icon
                                                        className="w-full h-full"
                                                        style={{
                                                            fill: item.color,
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
    )
}
