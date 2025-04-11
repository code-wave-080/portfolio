'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Loading from "@/app/loading";

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => setLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [pathname])

    return (
        <>
            {loading && <Loading />}
            {children}
        </>
    )
}
