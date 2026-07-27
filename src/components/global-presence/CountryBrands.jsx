"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { headingVariant } from "@/utils/animations";
import { globalPresenceData } from "@/data/globalPresenceData";
import { motion } from "framer-motion"; // still used for the heading's whileInView

const CountryBrands = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCountry = globalPresenceData[activeIndex];

    const isAnimating = useRef(false);
    const nameRef = useRef(null);
    const flagRef = useRef(null);
    const dotRefs = useRef([]);
    const logoRefs = useRef([]);

    // reset ref arrays every render before the map populates them
    dotRefs.current = [];
    logoRefs.current = [];

    const goTo = (getNextIndex) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const tl = gsap.timeline({
            onComplete: () => setActiveIndex(getNextIndex),
        });

        tl.to(nameRef.current, {
            x: -30,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
        })
            .to(
                flagRef.current,
                { x: -30, opacity: 0, duration: 0.3, ease: "power2.in" },
                "-=0.15"
            )
            .to(
                dotRefs.current,
                { scale: 0, duration: 0.25, ease: "power2.in", stagger: 0.1 },
                "-=0.2"
            )
            .to(
                logoRefs.current,
                { opacity: 0, duration: 0.2, ease: "power2.in", stagger: 0.1 },
                "<"
            );
    };

    const nextCountry = () =>
        goTo((prev) => (prev === globalPresenceData.length - 1 ? 0 : prev + 1));

    const prevCountry = () =>
        goTo((prev) => (prev === 0 ? globalPresenceData.length - 1 : prev - 1));

    // enter animation whenever activeIndex changes (also runs on mount)
    useEffect(() => {
        gsap.set(nameRef.current, { x: 30, opacity: 0 });
        gsap.set(flagRef.current, { x: 30, opacity: 0 });
        gsap.set(dotRefs.current, { scale: 0 });
        gsap.set(logoRefs.current, { opacity: 0 });

        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false;
            },
        });

        tl.to(nameRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
        })
            .to(
                flagRef.current,
                { x: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
                "-=0.2"
            )
            .to(
                dotRefs.current,
                {
                    scale: 1,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                    stagger: 0.12,
                },
                "-=0.15"
            )
            .to(
                logoRefs.current,
                { opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.12 },
                "<"
            );

        return () => tl.kill();
    }, [activeIndex]);

    return (
        <section className="pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem] px-0">
            {/* Top */}
            <div className="flex px-[1rem] sm:px-[5%] lg:px-[7%]">
                {/* Top Left */}
                <div className="w-[65%]">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Lorem Ipsum
                    </motion.h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[65%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex quis perferendis recusandae suscipit quo, quidem libero aut.
                    </p>

                    {/* Flag */}
                    <div className="mt-[3rem] sm:mt-[2rem] lg:mt-[2.4rem] xl:mt-[2.7rem] 2xl:mt-[3rem]">
                        <span ref={nameRef} className="block text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:text-[3rem] font-semibold">
                            {activeCountry.country}
                        </span>
                        <img
                            ref={flagRef}
                            src={activeCountry.flag}
                            alt={activeCountry.country}
                            loading="lazy"
                            className="w-[40%] mt-[1rem]"
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-end mr-[-3px]">
                        <button
                            className="
                                w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                                h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                                flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition
                                text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                                border-primary border-[2px] lg:border-[3px] border-r-[2px]
                            "
                            onClick={prevCountry}
                        >
                            ‹
                        </button>
                        <button
                            className="
                                w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                                h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                                flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition
                                text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                                border-primary border-[2px] lg:border-[3px] border-l-[2px]
                            "
                            onClick={nextCountry}
                        >
                            ›
                        </button>
                    </div>
                </div>

                {/* Top Right */}
                <div className="w-[35%] border-primary border-l-[5px]">
                    {activeCountry.logo.map((logo, index) => (
                        <div key={index} className="relative flex items-center mb-[1.8rem] sm:mb-[2rem] lg:mb-[3rem] xl:mb-[3.3rem] 2xl:mb-[3.5rem]">
                            {/* Dot */}
                            <div className="absolute left-0 top-0 -translate-x-[55%] z-10">
                                <div
                                    ref={(el) => {
                                        if (el) dotRefs.current[index] = el;
                                    }}
                                    className="
                                        bg-white
                                        flex items-center justify-center
                                        border-primary border-[4px]
                                        rounded-full
                                        w-[45px] sm:w-[50px] lg:w-[39px] xl:w-[42px] 2xl:w-[45px]
                                        aspect-square
                                    "
                                >
                                    <div className="aspect-square w-[10px] bg-primary rounded-full"></div>
                                </div>
                            </div>

                            {/* Logo */}
                            <div className="ml-[3.5rem]">
                                <img
                                    ref={(el) => {
                                        if (el) logoRefs.current[index] = el;
                                    }}
                                    src={logo}
                                    alt=""
                                    loading="lazy"
                                    className="w-full h-[45px] sm:h-[50px] lg:h-[39px] xl:h-[42px] 2xl:h-[45px] object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-wrap">
                {/* Bottom Left */}
                <div className="w-[63.25%] p-[1.5rem] sm:p-[2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem] pl-[7%] bg-primary text-gray-300 flex flex-wrap">
                    {globalPresenceData.map((item, index) => (
                        <div key={item.id} className="flex items-center">
                            <button
                                onClick={() => setActiveIndex(index)}
                                className={`transition ${
                                    index === activeIndex
                                        ? "text-white font-semibold"
                                        : "text-gray-300 hover:text-white"
                                }`}
                            >
                                {item.country}
                            </button>

                            {index !== globalPresenceData.length - 1 && (
                                <span className="mx-3">|</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Right */}
                <div className="w-[36.75%] p-[1.5rem] sm:p-[2rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem] pr-[7%] bg-[#a3a3a3]">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing nam, quidem. Lorem ipsum dolor sit amet, adipisicing elit. Praesentium consectetur excepturi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CountryBrands;