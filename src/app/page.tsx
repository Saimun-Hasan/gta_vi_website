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


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".trigger",
                scrub: 1,
                pin: true,
                markers: true,
                start: 'top+=10',
                end: '+=800',
            },
        });

        tl.set('.main_hero_logo', { scale: 1.3, opacity: 1 });
        tl.set('.main_hero_cover', { scale: 1.3, opacity: 1 });
        tl.set('.main_hero', {
            opacity: 1,
            '--mask-size': '3000%',
            '--mask-position': 'center',
        });
        tl.set('.overlay', { opacity: 0 });
        tl.set('.section-02', { visibility: "hidden", opacity: 0 });



        tl.to(
            ".main_hero_logo",
            {
                scale: 1,
                opacity: 0,
                duration: 2,
            },
            "<"
        );

        tl.to(
            ".main_hero_cover",
            {
                scale: 1,
                opacity: 0,
                duration: 2,
            },
            "<"
        );
        /* tl.to(
            ".main_hero",
            {
                opacity: 0,
                backgroundSize: "28dvh",
                duration: 1.5,
            },
            0
        ); */
        tl.to(
            '.main_hero',
            {
                '--mask-size': '20%',
                '--mask-position': 'center',
                duration: 2.75,
                ease: "power1.Out"
            }, 0
        );
        tl.set('.overlay', {
            opacity: 1,
            backgroundSize: "30dvh",
            duration: 2
        }, '<+=2');


        tl.to(['.main_hero'], {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                ScrollTrigger.refresh();
            }
        }, 3);

        tl.fromTo(
            ".hero-text",
            {
                backgroundImage: `radial-gradient(
                    circle at 50% 200vh,
                    rgba(255, 214, 135, 0) 0,
                    rgba(157, 47, 106, 0.5) 90vh,
                    rgba(157, 47, 106, 0.8) 120vh,
                    rgba(32, 31, 66, 0) 150vh
                )`,
            },
            {
                backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
                    rgb(247, 77, 82) 50.011vh,
                    rgb(145, 42, 105) 90.0183vh,
                    rgba(32, 31, 66, 0) 140.599vh)`,
                duration: 3,
            },
            "<1.2"
        );

        tl.fromTo(
            ".coming_soon_logo",

            {
                opacity: 0,
                maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
            },
            {
                opacity: 1,
                maskImage: `radial-gradient(
                    circle at 50% 105.594%,
                    rgb(0, 0, 0) 62.9372%,
                    rgba(0, 0, 0, 0) 81.4686%
                    )`,
                duration: 3,
            },
            "<0.2"
        );

        tl.set(".main_hero", { opacity: 0 });

        tl.to(".section-1", { scale: 0.85, duration: 3 }, "<-=3");

        tl.set(
            ".section-1",
            {
                maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
            },
            "<+=2.1"
        );

        tl.to(
            ".section-1",
            {
                maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
                duration: 2,
            },
            "<+=0.2"
        );

        tl.to(
            ".coming_soon_logo",
            {
                opacity: 0,
                duration: 2,
            },
            "<1.5"
        );

        tl.set(".section-1", { opacity: 0 });
        tl.set(".section-02", { visibility: "visible" });

        tl.to(".section-02", { opacity: 1, duration: 3 }, "<+=0.2");

        tl.fromTo(
            ".section-02",
            {
                backgroundImage: `radial-gradient(
                    circle at 50% 200vh,
                    rgba(255, 214, 135, 0) 0,
                    rgba(157, 47, 106, 0.5) 90vh,
                    rgba(157, 47, 106, 0.8) 120vh,
                    rgba(32, 31, 66, 0) 150vh
                )`,
            },
            {
                backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
                    rgb(247, 77, 82) 50.011vh,
                    rgb(145, 42, 105) 90.0183vh,
                    rgba(32, 31, 66, 0) 140.599vh)`,
                duration: 3,
            },
            "<1.2"
        );
    });

    return (
        <>
            <main className="trigger">

                <div className="section-1">
                    <div className="overlay"></div>

                    <div className="main_hero overflow-hidden">
                        <Image
                            src="/assets/images/Jason_and_Lucia_02/heroKeyArt_2.webp"
                            alt="Jason and Lucia Hero Image"
                            fill
                            priority
                            className="main_hero_logo"
                            unoptimized={true}
                        />
                        <Image
                            src="/assets/images/Jason_and_Lucia_02/heroKeyArt.webp"
                            alt="Jason and Lucia Hero Image"
                            fill
                            priority
                            className="main_hero_cover"
                            unoptimized={true}
                        />
                    </div>
                    <div className="coming_soon_section">
                        <div className="coming_soon_logo"></div>
                        <div>
                            <h3 className="font-gta font-bold hero-text">
                                Coming<br />
                                May 26<br />
                                2026
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="section-02">
                    <h3 className="font-gta font-bold">Vice City, USA.</h3>
                    <p className="font-gta">
                        Jason and Lucia have always known the deck is stacked against them.
                        But when an easy score goes wrong, they find themselves on the darkest
                        side of the sunniest place in America, in the middle of a criminal
                        conspiracy stretching across the state of Leonida — forced to rely on
                        each other more than ever if they want to make it out alive.
                    </p>
                </div>
            </main>

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
        </ >
    );
}