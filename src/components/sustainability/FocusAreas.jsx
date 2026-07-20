"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const focusData = [
    {
        id: 1,
        title: "Education",
        desc: "Creating learning opportunities through digital education initiatives and programmes that empower the next generation.",
        image: "/images/sustainability/focus/1.avif",
    },
    {
        id: 2,
        title: "Skill Development",
        desc: "Equipping young people with practical skills that enhance employability and create pathways to sustainable livelihoods.",
        image: "/images/sustainability/focus/2.avif",
    },
    {
        id: 3,
        title: "Healthcare",
        desc: "Organising medical camps, preventive health initiatives, and community wellness programmes to improve access to quality healthcare.",
        image: "/images/sustainability/focus/3.avif",
    },
    {
        id: 4,
        title: "Community Development",
        desc: "Supporting initiatives that improve quality of life through environmental awareness, social welfare, and community engagement.",
        image: "/images/sustainability/focus/4.avif",
    },
]

const FocusAreas = () => {

    const [activeIndex, setActiveIndex] = useState(1); // 2nd card active on load

    return (
        <section className="pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]">
            <motion.h5
                className="relative z-50"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Our <br /> Focus Areas
            </motion.h5>

            {/* Row */}
            <div className="
                flex justify-between flex-wrap 
                mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
            ">
                {focusData.map((value, index) => {

                    const isActive = index === activeIndex;

                    return (
                        <div key={index} onMouseOver={() => setActiveIndex(index)} className="
                            w-[48%] lg:w-[23%] relative cursor-pointer transition-all duration-300
                            hover:scale-[1.05]
                            mb-[1.5rem] lg:mb-0
                        ">
                            {/* Image only renders for active card */}
                            <img
                                src={value.image}
                                alt={value.title}
                                loading="lazy"
                                className={`
                                    w-full transition-all duration-300
                                    ${isActive ? "opacity-100 lg:scale-[1.05]" : "opacity-10"}
                                `}
                            />
                            <div className={`
                                absolute top-0 left-0 w-full h-full
                                flex flex-col justify-end transition-all duration-300
                                p-[0.8rem] sm:p-[1rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
                                ${isActive ? "bg-primary/80 text-white shadow-2xl lg:scale-[1.05]" : "bg-transparent text-primary"}
                            `}>
                                <span className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold leading-[1.2]">
                                    {value.title}
                                </span>
                                <p className="mt-[0.5rem] lg:mt-[0.9rem] text-[0.65rem] sm:text-[0.75rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]">
                                    {value.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default FocusAreas
