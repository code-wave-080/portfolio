import JavascriptIcon from '@/icons/javascript.svg';
import TypescriptIcon from '@/icons/typescript.svg';
import VueIcon from '@/icons/vuedotjs.svg';
import ReactIcon from '@/icons/react.svg';
import NextIcon from '@/icons/nextdotjs.svg';
import TailwindIcon from '@/icons/tailwindcss.svg';
import FramerIcon from '@/icons/framer.svg';
import SassIcon from '@/icons/sass.svg';

export default function MyStack() {
    const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
        javascript: JavascriptIcon,
        typescript: TypescriptIcon,
        vuedotjs: VueIcon,
        react: ReactIcon,
        nextdotjs: NextIcon,
        tailwindcss: TailwindIcon,
        framer: FramerIcon,
        sass: SassIcon,
    };

    const stack = {
        frontend: [
            { label: 'Javascript', value: 'javascript', color: '#F7DF1E' },
            { label: 'TypeScript', value: 'typescript', color: '#3178C6' },
            { label: 'Vue.js', value: 'vuedotjs', color: '#4FC08D' },
            { label: 'React', value: 'react', color: '#61DAFB' },
            { label: 'Next.js', value: 'nextdotjs', color: '#000000' },
            { label: 'Tailwind CSS', value: 'tailwindcss', color: '#06B6D4' },
            { label: 'Framer Motion', value: 'framer', color: '#0055FF' },
            { label: 'SASS', value: 'sass', color: '#CC6699' },
        ],
    };

    return (
        <div className="container">
            <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                <h2 className="text-xl uppercase leading-none">MY STACK</h2>
            </div>
            <div className="space-y-20">
                <div className="grid sm:grid-cols-12 gap-8">
                    <div className="sm:col-span-5">
                        <p className="slide-up text-3xl font-anton leading-none text-muted-foreground uppercase font-bold text-[#B5B5B5]">
                            FRONTEND
                        </p>
                    </div>
                    <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                        {stack.frontend.map((item, index) => {
                            const Icon = iconMap[item.value];
                            return (
                                <div
                                    className="slide-up flex gap-3.5 items-center leading-none"
                                    key={index}
                                >
                                    <div className="rounded-full w-10 h-10 bg-[#313131] overflow-hidden flex items-center justify-center">
                                        {Icon && (
                                            <Icon
                                                className="w-full h-full"
                                                style={{ fill: item.color }}
                                            />
                                        )}
                                    </div>
                                    <span className="text-1xl capitalize text-[#DEDEDE]">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
