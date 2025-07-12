import { ReactNode } from 'react'
import SectionFlower from '@/components/SectionFlower'

interface Props {
    icon?: ReactNode
    className?: string
    classNames?: {
        container?: string
        title?: string
        icon?: string
    }
    title: string
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    function cn(...args: (string | undefined | false | null)[]) {
        return args.filter(Boolean).join(' ')
    }

    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container
            )}
        >
            {icon ? (
                icon
            ) : (
                <SectionFlower
                    width={25}
                    style={{ animationDuration: '7s' }}
                    className={cn('animate-spin', classNames?.icon)}
                />
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none',
                    classNames?.title
                )}
            >
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle
