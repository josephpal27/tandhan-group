'use client';

import { useEffect, useRef } from 'react';

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
        <section className="relative h-screen overflow-hidden">

            {/* Parallax Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    ref={bgRef}
                    className="absolute top-[-10%] left-0 w-full h-[110%] bg-cover bg-center will-change-transform"
                    style={{ backgroundImage: "url('/images/banners/banner.avif')" }}
                />
            </div>

            {/* Red overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-red-900/60 via-50% to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 px-[7%] text-white flex flex-col justify-end h-full pb-[4rem]">
                <h1 className="text-[5rem] leading-[1.1] font-bold">
                    Delivering Beyond <br /> Possible Solutions
                </h1>
                <p className="mt-[1.5rem] w-[50%]">
                    Amwerk supports customers through every step of the manufacturing process. From prototyping to delivery, each customer is assigned a dedicated support team to seamlessly move programs through production.
                </p>
            </div>
        </section>
    );
}