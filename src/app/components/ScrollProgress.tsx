'use client'

export default function ScrollProgress({ value }: { value: number }) {
    return (
        <div className="fixed top-[50svh] right-[20px] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-[#313131] overflow-hidden">
            <div
                className="w-full bg-pink-500 rounded-full h-full"
                style={{ transform: `translateY(${value}%)` }}
            ></div>
        </div>
    )
}
