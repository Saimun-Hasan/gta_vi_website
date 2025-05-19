'use client'

import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useGSAP(() => {
        if (typeof window === 'undefined') return;
        const lenis = new Lenis();
        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);
        }

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.trigger',
                start: 'top+=10',
                end: '+=800',
                scrub: 1,
                pin: true,
                markers: true,
            },
        });

        gsap.set('.hero-image', { scale: 1.3, opacity: 1 });
        gsap.set('.second-image', { scale: 1.3, opacity: 1 });
        gsap.set('.comingMay', { scale: 1.1, opacity: 0 });
        gsap.set('.mask-image', {
            '--mask-size': '3000%',
            '--mask-position': 'center'
        });

        heroTimeline.to('.hero-image', { scale: 1, opacity: 1, duration: 2 }, 0);
        heroTimeline.to('.second-image', { scale: 1, opacity: 0, duration: 2 }, 0);
        heroTimeline.to(
            '.mask-image',
            {
                '--mask-size': '20%',
                '--mask-position': 'center',
                duration: 2.75,
                ease: "power1.Out"
            }, 0
        );

        heroTimeline.to(['.hero-image', '.mask-image'], {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        }, 3);

        gsap.timeline({
            scrollTrigger: {
                trigger: '.second-section',
                start: 'center bottom',
                end: 'center center',
                scrub: true,
                markers: true,
            }
        }).to('.comingMay', {
            scale: 1,
            opacity: 1,
            duration: 20,
            ease: "power1.in"
        });
    }, []);

    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 items-center">
                <div className="w-full h-[100dvh] trigger">
                    <div className="relative mask-image w-full h-full overflow-hidden"
                        style={{
                            WebkitMaskImage: `url('/assets/images/vistack.svg')`,
                            maskImage: `url('/assets/images/vistack.svg')`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "var(--mask-position)",
                            maskPosition: "var(--mask-position)",
                            WebkitMaskSize: "var(--mask-size)",
                            maskSize: "var(--mask-size)",
                            WebkitMaskComposite: "source-in",
                            maskComposite: "source-in",
                            maskMode: "alpha",
                            opacity: "var(--mask-opacity)",
                            transition: "opacity 0.3s ease"
                        }}>
                        <Image
                            src="/assets/images/Jason_and_Lucia_02/heroKeyArt.webp"
                            alt="Jason and Lucia Hero Image"
                            fill
                            priority
                            className="object-cover hero-image z-10"
                            unoptimized={true}
                        />
                        <Image
                            src="/assets/images/Jason_and_Lucia_02/heroKeyArt_2.webp"
                            alt="Jason and Lucia Hero Image"
                            fill
                            priority
                            className="object-cover second-image z-20"
                            unoptimized={true}
                        />
                    </div>
                </div>

                <section className="w-full max-w-6xl mx-auto py-12 h-[200vh]   comingMay" /* style={{
                    opacity: "var(--mask-opacity, 0)",
                    maskImage: "radial-gradient(circle at 50% -34.4444vh, rgb(0, 0, 0) 9.5238vh, rgba(0, 0, 0, 0) 83.1746vh)",
                    WebkitMaskImage: "radial-gradient(circle at 50% -34.4444vh, rgb(0, 0, 0) 9.5238vh, rgba(0, 0, 0, 0) 83.1746vh)",
                    transition: "opacity 0.5s ease"
                }} */>
                    <div className="flex flex-col items-center justify-center second-section">
                        <Image
                            src="/assets/images/vi.webp"
                            alt="Jason and Lucia Hero Image"
                            width={350}
                            height={350}
                            unoptimized={true}
                        />
                        <h3 className="text-[16vh] text-center uppercase bg-clip-text font-gta font-bold leading-[8.5rem] mt-5"
                            style={{
                                color: "#ffb0c4",
                                letterSpacing: '-.0125em',
                                backgroundImage: "radial-gradient(circle at 50% 61.6666vh, rgb(255, 212, 129) 0vh, rgb(237, 70, 108) 50vh, rgb(124, 34, 102) 90vh, rgba(32, 31, 66, 0) 124.537vh)",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            COMING
                            <br />
                            MAY 26
                            <br />
                            2026
                        </h3>
                    </div>
                </section>
            </main >

            <footer className="py-8 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div >
    );
}