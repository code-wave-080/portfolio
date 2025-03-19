export default function MyStack() {
    const stacks = [
        'Javascript',
        'TypeScript',
        'Vue',
        'React',
        'Next.js',
        'Tailwind CSS',
        'Frammer Motion',
        'SASS',
    ]

    return (
        <div className="container">
            <div className="flex items-center gap-4 mb-10 text-[#DEDEDE]">
                <h2 className="text-xl uppercase leading-none">MY STACK</h2>
            </div>
            <div className="space-y-20">
                <div className="grid sm:grid-cols-12 gap-8">
                    <div className="sm:col-span-5">
                        <p
                            className="slide-up text-3xl font-anton leading-none text-muted-foreground uppercase font-bold text-[#B5B5B5]"
                            style={{
                                translate: 'none',
                                rotate: 'none',
                                scale: 'none',
                                transform: `translate(0px, 0px)`,
                                opacity: 1,
                            }}
                        >
                            FRONTEND
                        </p>
                    </div>
                    <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                        {stacks.map((stack, index) => (
                            <div
                                className="slide-up flex gap-3.5 items-center leading-none"
                                key={index}
                            >
                                <div className="rounded-full w-10 h-10 bg-[#313131]">
                                    <img src="" alt="" />
                                </div>
                                <span className="text-1xl capitalize text-[#DEDEDE]">
                                    {stack}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
