import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Sidebar from '@/app/components/Sidebar'
import Footer from '@/app/components/Footer'
import React from 'react'
import ScrollProgress from '@/app/components/ScrollProgress'
import Preloader from '@/components/Preloader'
import ParticleBackground from '@/components/ParticleBackground'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: '포트폴리오 | 윤다연',
    description: '프론트엔드 개발자 윤다연의 포트폴리오입니다.',
    openGraph: {
        title: '포트폴리오 | 윤다연',
        description: 'Next.js 기반으로 만든 프론트엔드 개발자 포트폴리오입니다.',
        url: 'https://portfolio-beta-seven-69.vercel.app/',
        siteName: '윤다연 포트폴리오',
        images: [
            {
                url: 'https://portfolio-beta-seven-69.vercel.app/images/og-thumbnail.png',
                width: 1200,
                height: 630,
                alt: 'Portfolio Thumbnail',
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Sidebar />
                <main>{children}</main>
                <Footer />

                <Preloader />
                <ScrollProgress />
                <ParticleBackground />
            </body>
        </html>
    )
}
