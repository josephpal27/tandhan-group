"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { useState, useEffect, useCallback } from 'react';

const sectorGroups = [
    [
        { id: 1, image: "/images/sectors/2-2.avif" },
        { id: 2, image: "/images/sectors/3-3.avif" },
        { id: 3, image: "/images/sectors/4-4.avif" },
        { id: 4, image: "/images/sectors/1-1.avif" },
    ],
    [
        { id: 5, image: "/images/sectors/2.avif" },
        { id: 6, image: "/images/sectors/3.avif" },
        { id: 7, image: "/images/sectors/4.avif" },
        { id: 8, image: "/images/sectors/1.avif" },
    ],
];

const Sectors = () => {

    const [activeGroup, setActiveGroup] = useState(0);

    const handleNext = useCallback(() => {
        setActiveGroup(prev =>
            prev === sectorGroups.length - 1 ? 0 : prev + 1
        );
    }, []);

    // const handlePrev = () => {
    //     setActiveGroup(prev =>
    //         prev === 0 ? sectorGroups.length - 1 : prev - 1
    //     );
    // };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3500); // auto-advance every 3.5s

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap items-center">
            <div className="w-full lg:w-[48%] flex justify-between items-start flex-wrap relative">
                {sectorGroups[activeGroup].map((sector, index) => (
                    <motion.div
                        key={`${activeGroup}-${sector.id}`}
                        initial={{
                            rotateY: 90,
                            opacity: 0,
                            scale: 0.95,
                        }}
                        animate={{
                            rotateY: 0,
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.10, // stagger
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`
                            w-[48.5%]
                            relative overflow-hidden
                            mb-[0.7rem] sm:mb-[0.8rem] lg:mb-[1rem] xl:mb-[1.1rem] 2xl:mb-[1.2rem]
                            ${index === 1 ? "mt-[2.5rem] sm:mt-[3rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]" : ""}
                            ${index === 2 ? "mt-[-2.5rem] sm:mt-[-4rem] lg:mt-[-2.6rem] xl:mt-[-2.8rem] 2xl:mt-[-3rem]" : ""}
                        `}
                    >
                        <img
                            src={sector.image}
                            alt=""
                            className="w-full aspect-[5/4] object-cover"
                        />
                    </motion.div>
                ))}

                {/* Navigation */}
                {/* <div className="
                    flex relative lg:absolute lg:right-[-19%] 
                    bottom-[0.5rem] lg:bottom-[1rem] xl:bottom-[1.1rem] 2xl:bottom-[1.2rem]
                ">
                    <button className="
                        w-[45px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                        h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                        flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                        text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        border-primary border-[3px] border-r-[2px]
                    " id="sector-prev" onClick={handlePrev}>
                        ‹
                    </button>
                    <button className="
                        w-[45px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                        h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                        flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                        text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        border-primary border-[3px] border-l-[2px]
                    " id="sector-next" onClick={handleNext}>
                        ›
                    </button>
                </div> */}
            </div>
            <div className="w-full lg:w-[48%] mt-[1.8rem] lg:mt-0">
                <motion.h4
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Sectors <br /> & Businesses
                </motion.h4>
                <p className="mt-[0.7rem] lg:mt-[1.5rem]">
                    Built on instinct and strengthened through diversification, Tandhan Group operates across four sectors. Each sector addresses a distinct need, yet all are united by the same commitment to quality, resilience, and long-term value creation. Together, they form a portfolio designed to serve evolving markets, create opportunities, and drive sustainable growth across India and the world.
                </p>
            </div>
        </section>
    )
}

export default Sectors
