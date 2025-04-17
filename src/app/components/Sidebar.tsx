'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type MenuItem = {
    label: string
    value: string
}

type MenuItems = Array<MenuItem>

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // 네비게이션 아이템 애니메이션 옵션 (stagger 효과를 줄 수 있음)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const items: MenuItems = [
        {
            label: 'Home',
            value: 'home',
        },
        {
            label: 'About me',
            value: 'about-me',
        },
        {
            label: 'My stack',
            value: 'my-stack',
        },
        {
            label: 'My experience',
            value: 'my-experience',
        },
        {
            label: 'My projects',
            value: 'my-projects',
        },
    ]

    const toggleMenu = () => setIsOpen((prev) => !prev)

    const handleScrollTo = ({ value }: MenuItem) => {
        const element = document.getElementById(value)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <>
            {/* 네비게이션 바 (메뉴 버튼) */}
            <div className="sticky top-0 z-[5]">
                <button
                    className="group size-12 absolute top-5 right-5 md:right-5"
                    onClick={() => toggleMenu()}
                >
                    <span
                        className={`inline-block w-3/5 h-0.5 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 bg-[#DEDEDE] ${isOpen ? 'rotate-45 -translate-y-1/2' : '-translate-y-[5px] md:group-hover:rotate-12'}`}
                    ></span>
                    <span
                        className={`inline-block w-3/5 h-0.5 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 bg-[#DEDEDE] ${isOpen ? '-rotate-45 -translate-y-1/2' : 'translate-y-[5px] md:group-hover:-rotate-12'}`}
                    ></span>
                </button>
            </div>

            {/* 오버레이 (배경 어둡게) */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black opacity-60 z-[4]"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* 메뉴 오버레이 */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu"
                        initial={{ x: '100%', borderRadius: '100px' }}
                        animate={{ x: 0, borderRadius: '0px' }}
                        exit={{ x: '100%', borderRadius: '100px' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="fixed top-0 right-0 w-[90vw] sm:w-[450px] min-w-[280px] max-w-full h-full bg-[#313131] z-[4] flex flex-col items-center justify-center"
                    >
                        {/* 메뉴 아이템 리스트 */}
                        <motion.ul
                            className="space-y-7 text-center"
                            // initial="hidden"
                            // animate="visible"
                            // transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                        >
                            {items.map((item) => (
                                <motion.li
                                    key={item.value}
                                    variants={itemVariants}
                                    className="text-2xl text-[#DEDEDE] cursor-pointer transition-transform duration-200 hover:scale-110"
                                    onClick={() => handleScrollTo(item)}
                                >
                                    {item.label}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
