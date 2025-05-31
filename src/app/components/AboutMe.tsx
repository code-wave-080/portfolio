import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutMe() {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section text-[#DEDEDE]" id="about-me">
            <div ref={containerRef} className="container">
                <p
                    className="text-lg pb-3 border-b text-muted-foreground slide-up-and-fade"
                    style={{
                        transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
                        opacity: 1,
                    }}
                >
                    ABOUT ME
                </p>
                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p
                            className="text-2xl slide-up-and-fade"
                            style={{
                                transform:
                                    'translate(0px, 0px) rotate(0deg) scale(1)',
                                opacity: 1,
                            }}
                        >
                            Hi I&apos;m Yoon DaYeon
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[600px]">
                            <p
                                className="slide-up-and-fade"
                                style={{
                                    transform:
                                        'translate(0px, 0px) rotate(0deg) scale(1)',
                                    opacity: 1,
                                }}
                            >
                                저는 안주하지 않고, 지속 가능한 개발을 끊임없이
                                고민하는 프론트엔드 개발자입니다.
                            </p>
                            <p
                                className="slide-up-and-fade"
                                style={{
                                    transform:
                                        'translate(0px, 0px) rotate(0deg) scale(1)',
                                    opacity: 1,
                                }}
                            >
                                Vue3와 TypeScript 기반의 실무 프로젝트를
                                수행하며, 단순히 기능을 구현하는 데 그치지 않고
                                코드의 품질과 유지보수성, 사용자 경험의 지속
                                가능성까지 고려하는 개발 방식을 고민해왔습니다.
                            </p>
                            <p
                                className="slide-up-and-fade"
                                style={{
                                    transform:
                                        'translate(0px, 0px) rotate(0deg) scale(1)',
                                    opacity: 1,
                                }}
                            >
                                이러한 경험은 자연스럽게 더 나은 개발 방식을
                                탐색하게 만들었고, 개인 프로젝트에서는 React,
                                Next.js, Tailwind CSS 등 최신 기술을 적용하며
                                기술 트렌드에 대한 감각을 키우고 다양한 스타일링
                                기법을 실험해보았습니다. 앞으로도 성능 개선과 더
                                나은 사용자 경험을 위한 고민을 멈추지 않으며,
                                변화하는 환경 속에서도 유연하게 성장하는
                                개발자가 되기 위해 노력하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
