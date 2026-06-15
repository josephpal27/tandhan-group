'use client';

import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { IoHomeOutline } from "react-icons/io5";

export default function SectorsBanner({image, title, desc}) {
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
        <section className="relative h-[100dvh] lg:h-[112dvh] overflow-hidden">

            {/* Parallax Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute top-[0] lg:top-[-10%] left-0 w-full h-[100%] lg:h-[110%] bg-cover bg-center will-change-transform"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>

            {/* Red overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-50% to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 text-white flex flex-col justify-end h-full 
            pb-[3rem] sm:pb-[4rem] lg:pb-[9rem] xl:pb-[10rem] 2xl:pb-[11rem]">
                <motion.h1
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h1>
                <p className="mt-[1rem] lg:mt-[1.5rem] w-full lg:w-[40%]">
                    {desc}
                </p>
                <p className="flex gap-[0.7rem] mt-[1.7rem] font-semibold">
                   <IoHomeOutline className="text-[1.4rem]" /> Business - Polyplast
                </p>
            </div>

        </section>
    );
}