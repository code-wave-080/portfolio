'use client'

import {useEffect, useState} from "react";

export default function Template({children}: {children: React.ReactNode}) {
    const [stars, setStars] = useState<
        { top: string; left: string; size: string; animate: boolean }[]
    >([])

    useEffect(() => {
        const generatedStars = Array.from({ length: 50 }, () => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3}px`,
            animate: Math.random() > 0.5, // 50% 확률로 깜빡이는 애니메이션 적용
        }))
        setStars(generatedStars)
    }, [])

    return (
        <>
            <div className="fixed inset-0 -z-50 bg-[#212121] hide-scrollbar pointer-events-none">
                {/* 별 배경 */}
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className={`absolute bg-white rounded-full ${
                            star.animate ? 'twinkle-move' : ''
                        }`}
                        style={{
                            width: star.size,
                            height: star.size,
                            top: star.top,
                            left: star.left,
                        }}
                    />
                ))}
            </div>
            {children}
        </>
    )
}