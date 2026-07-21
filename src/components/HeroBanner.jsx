'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

export default function HeroBanner({ image, mobileImage, title, desc }) {
    const bgRef = useRef(null);
    const pathname = usePathname();
    const isMedia = /^\/media\/.+/.test(pathname || '');

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${window.scrollY * 0.8}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`
            relative overflow-hidden
            ${isMedia ? 'h-[55vh] lg:h-[70vh]' : 'h-[70vh] lg:h-[112dvh]'}
        `}>

            {/* Parallax Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute top-[0] lg:top-[-10%] left-0 w-full h-[100%] lg:h-[110%] will-change-transform"
                >
                    {/* Mobile Banner */}
                    <div
                        className="block lg:hidden absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${mobileImage || image}')` }}
                    />
                    {/* Desktop Banner */}
                    <div
                        className="hidden lg:block absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                </div>
            </div>

            {/* Red overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-50% to-transparent z-10" />

            {/* Content */}
            <div className={`
                relative z-20 text-white flex flex-col justify-end h-full 
                pb-[3rem] sm:pb-[4rem] lg:pb-[9rem] xl:pb-[10rem] 2xl:pb-[11rem]
                ${isMedia ? 'pb-[1.2rem] sm:pb-[1.5rem] lg:pb-[1.35rem] xl:pb-[1.7rem] 2xl:pb-[2rem]' : 'pb-[1rem] sm:pb-[2rem] lg:pb-[9rem] xl:pb-[10rem] 2xl:pb-[11rem]'}
            `}>
                <motion.h1
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`
                        ${isMedia ? 'text-[1.3rem] sm:text-[1.5rem] lg:text-[2.4rem] xl:text-[2.7rem] 2xl:text-[3rem]' : ''}    
                    `}
                >
                    {title}
                </motion.h1>
                <p className={`
                    w-full lg:w-[40%]
                     ${isMedia ? 'mt-[0.7rem] lg:mt-[1rem]' : 'mt-[1rem] lg:mt-[1.5rem]'}
                `}>
                    {desc}
                </p>
            </div>

        </section>
    );
}