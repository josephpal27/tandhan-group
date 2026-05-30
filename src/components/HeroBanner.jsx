'use client';

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

export default function HeroBanner() {
    const bgRef = useRef(null);

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
        <section className="relative h-[112dvh] overflow-hidden">

            {/* Parallax Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute top-[-10%] left-0 w-full h-[110%] bg-cover bg-center will-change-transform"
                    style={{ backgroundImage: "url('/images/banners/home-banner.avif')" }}
                />
            </div>

            {/* Red overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-50% to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 text-white flex flex-col justify-end h-full 
            pb-[8rem] sm:pb-[8rem] lg:pb-[9rem] xl:pb-[10rem] 2xl:pb-[11rem]">
                <motion.h1
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Delivering Beyond <br /> Possible Solutions
                </motion.h1>
                <p className="mt-[1.5rem] w-[40%]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem.
                </p>
            </div>

        </section>
    );
}