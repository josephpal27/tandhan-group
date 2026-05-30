"use client";

import { globalPresenceData } from "@/data/globalPresenceData";
import { useState, useRef, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const GlobalPresence = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);

    const activeLocation = globalPresenceData[activeIndex];

    const handleNext = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setFading(true);
        timerRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % globalPresenceData.length);
            setFading(false);
        }, 200);
    };

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <section className="mt-[5rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem] 
        mb-[1rem] px-0 relative">

            {/* Head */}
            <div className="
                px-[1rem] sm:px-[5%] lg:px-[7%]
            ">
                <motion.h6
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Global Presence
                </motion.h6>
                <p className="w-[50%] mt-[1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam corporis soluta minus, dolores molestias Lorem, ipsum.
                </p>
            </div>

            <div className="relative mt-[2.5rem] sm:mt-[2rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]">
                {/* Map Image */}
                <div>
                    <img
                        src={activeLocation.image}
                        alt={activeLocation.country}
                        loading="lazy aspect-[5/4] object-cover"
                        className={`
                        w-full h-screen object-cover transition-opacity duration-[400ms] 
                        ${fading ? "opacity-0" : "opacity-100"}
                    `}
                    />
                </div>

                {/* Content Box */}
                <div className="absolute w-full h-full left-0 top-0 px-[1rem] sm:px-[5%] lg:px-[7%] 
            py-[4.5rem] sm:py-[3rem] lg:py-[3.5rem] xl:py-[4rem] 2xl:py-[4.5rem]">
                    <div className="w-[30%] h-full bg-white shadow-[rgba(0,0,0,0.30)_0px_3px_8px]">
                        {/* Top */}
                        <div className="relative">
                            <img
                                src={activeLocation.industryImage}
                                alt={activeLocation.country}
                                loading="lazy"
                                className="w-full"
                            />
                            {/* Layer */}
                            <div className="absolute top-0 left-0 w-full h-full bg-primary/30 flex items-end">
                                <div className="w-[90%] flex justify-between">
                                    <div className="
                                    bg-white w-[80%] 
                                    py-[2rem] sm:py-[1.5rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem]
                                    px-[1rem]
                                ">
                                        <span className="text-[1.4rem] sm:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-semibold block">
                                            {activeLocation.country}
                                        </span>
                                    </div>
                                    <div onClick={handleNext} className="
                                    bg-secondary hover:bg-primary text-white w-[20%] flex justify-center items-center 
                                    text-[3rem] sm:text-[2rem] lg:text-[2.8rem] xl:text-[2.9rem] 2xl:text-[3rem]
                                    cursor-pointer transition select-none
                                ">
                                        ›
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="px-[1rem] pt-[0.5rem]">
                            {activeLocation.brands.map((item, index) => (
                                <div
                                    key={index}
                                    className={`py-[0.8rem] sm:py-[0.9rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem] ${index !== 0 ? "border-t border-gray-200" : ""}`}
                                >
                                    <span className="block text-[1.3rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold">
                                        {item.brand}
                                    </span>

                                    <div className="flex justify-between mt-[0.5rem]">
                                        <div className="w-[5%]">
                                            <SlLocationPin className="mt-[0.3rem] sm:mt-[0.2rem] lg:mt-[0.25rem] xl:mt-[0.29rem] 2xl:mt-[0.3rem]" />
                                        </div>
                                        <div className="w-[93%]">
                                            <p className="text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                                                {item.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GlobalPresence
