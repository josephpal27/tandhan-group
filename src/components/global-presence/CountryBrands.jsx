"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { globalPresenceData } from "@/data/globalPresenceData";

const fadeLeft = {
    initial: {
        opacity: 0,
        x: 30,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: {
            duration: 0.3,
            ease: "easeIn",
        },
    },
};

// const container = {
//     animate: {
//         transition: {
//             staggerChildren: 0.08,
//         },
//     },
// };

// const dot = {
//     initial: {
//         opacity: 0,
//         scale: 0.5,
//     },
//     animate: {
//         opacity: 1,
//         scale: 1,
//         transition: {
//             duration: 0.28,
//             ease: "easeOut",
//         },
//     },
//     exit: {
//         opacity: 0,
//         scale: 0.5,
//         transition: {
//             duration: 0.18,
//         },
//     },
// };

// const logoImage = {
//     initial: {
//         opacity: 0,
//     },
//     animate: {
//         opacity: 1,
//         transition: {
//             duration: 0.35,
//         },
//     },
//     exit: {
//         opacity: 0,
//         transition: {
//             duration: 0.2,
//         },
//     },
// };

const CountryBrands = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const activeCountry = globalPresenceData[activeIndex];

    const nextCountry = () => {
        setActiveIndex((prev) =>
            prev === globalPresenceData.length - 1 ? 0 : prev + 1
        );
    };

    const prevCountry = () => {
        setActiveIndex((prev) =>
            prev === 0 ? globalPresenceData.length - 1 : prev - 1
        );
    };

    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem] px-0
        ">

            {/* Top */}
            <div className="flex px-[1rem] sm:px-[5%] lg:px-[7%]">
                {/* Top Left */}
                <div className="w-[65%]">
                    <h3>
                        Lorem Ipsum
                    </h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[65%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex quis perferendis recusandae suscipit quo, quidem libero aut.
                    </p>

                    {/* Flag */}
                    <div className="mt-[3rem]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeCountry.country}
                                variants={fadeLeft}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="block text-[3rem] font-semibold"
                            >
                                {activeCountry.country}
                            </motion.span>
                        </AnimatePresence>
                        <img
                            src={activeCountry.flag}
                            alt={activeCountry.country}
                            loading="lazy"
                            className="w-[40%] mt-[1rem]"
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-end mr-[-3px]">
                        <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " onClick={prevCountry}>
                            ‹
                        </button>
                        <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-l-[2px]
                        " onClick={nextCountry}>
                            ›
                        </button>
                    </div>
                </div>

                {/* Top Right */}
                <div className="w-[35%] border-primary border-l-[5px]">

                    {activeCountry.logo.map((logo, index) => (
                        <div
                            key={index}
                            className="relative flex items-center mb-[3.5rem]"
                        >
                    {/* Dot */}
                    <div className="absolute left-0 top-0 -translate-x-[55%] z-10">
                                <div
                                    className="
                                    bg-white
                                    flex items-center justify-center
                                    border-primary border-[4px]
                                    rounded-full
                                    w-[45px]
                                    aspect-square
                                "
                                >
                                    <div className="aspect-square w-[10px] bg-primary rounded-full"></div>
                                </div>
                            </div>

                    {/* Logo */}
                    <div className="ml-[3.5rem]">
                                <img
                                    src={logo}
                                    alt=""
                                    loading="lazy"
                                    className="w-full h-[45px] object-contain"
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div >

            {/* Bottom */}
            < div className="flex flex-wrap" >
                {/* Bottom Left */}
                <div div className="w-[63.25%] p-[2rem] pl-[7%] bg-primary text-gray-300 flex flex-wrap" >
                    {globalPresenceData.map((item, index) => (
                        <div key={item.id} className="flex items-center">
                            <button
                                onClick={() => setActiveIndex(index)}
                                className={`transition ${index === activeIndex
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
                </div >

                {/* Bottom Right */}
                <div div className="w-[36.75%] p-[2rem] pr-[7%] bg-[#a3a3a3]" >
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing nam, quidem. Lorem ipsum dolor sit amet, adipisicing elit. Praesentium consectetur excepturi.
                    </p>
                </div >
            </div >

        </section >
    )
}

export default CountryBrands
