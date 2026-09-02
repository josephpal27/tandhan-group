"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { useState } from "react";

const ourValuesData = [
    {
        id: 1,
        title: "Integrity",
        desc: "We uphold the highest standards of honesty, accountability and transparency, wherever we do business. Guided by ethics, we respect the principles and perspectives of every market we enter, building trust that transcends borders and strengthens every relationship.",
        image: "/images/values/1.avif",
    },
    {
        id: 2,
        title: "Foresight",
        desc: "We look beyond the immediate and beyond familiar horizons, anticipating change and recognising opportunities across evolving markets. Guided by experience and sound judgment, we turn global possibilities into enduring value.",
        image: "/images/values/2.avif",
    },
    {
        id: 3,
        title: "Sustainability",
        desc: "We believe responsible growth should create a positive impact wherever we operate. By embracing responsible manufacturing, resource stewardship and conscious business practices, we work towards a more resilient future for the communities and markets we are part of.",
        image: "/images/values/3.avif",
    },
    {
        id: 4,
        title: "Inclusivity",
        desc: "We believe progress becomes greater when different people, perspectives and cultures come together. By fostering respect, collaboration and equal opportunity across diverse communities, we create an environment where everyone can contribute and shared success can transcend borders.",
        image: "/images/values/4.avif",
    },
]

const OurValues = () => {

    const [activeIndex, setActiveIndex] = useState(1); // 2nd card active on load

    return (
        <section className="
            pt-[1.8rem] sm:pt-[2.2rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem]
        ">
            {/* Top Content */}
            <div className="flex flex-col items-center text-center">
                <motion.h4
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Values
                </motion.h4>
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[65%]">
                    Our values shape every decision we make no matter in which part of the world - guiding how we build businesses, foster partnerships, empower people and pursue growth with responsibility, integrity and purpose.
                </p>
            </div>

            {/* Row */}
            <div className="
                flex justify-between flex-wrap 
                mt-[1.8rem] sm:mt-[2.2rem] lg:mt-[2.5rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
            ">
                {ourValuesData.map((value, index) => {

                    const isActive = index === activeIndex;
                    
                    return(
                        <div key={index} onClick={() => setActiveIndex(index)} className="
                            w-[48%] lg:w-[23%] relative cursor-pointer transition-all duration-300
                            lg:hover:scale-[1.05]
                            mb-[1.2rem] lg:mb-0
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
                                flex flex-col lg:justify-end transition-all duration-300
                                p-[0.5rem] sm:p-[0.7rem] lg:p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                ${isActive ? "bg-primary/80 text-white shadow-2xl lg:scale-[1.05]" : "bg-transparent text-primary"}
                            `}>
                                <span className="block text-[1.3rem] sm:text-[1.4rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem] mb-[0.2rem] lg:mb-[1rem]">
                                    0{value.id}.
                                </span>
                                <span className="text-[1.1rem] sm:text-[1.2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold">
                                    {value.title}
                                </span>
                                <p className="mt-[0.5rem] lg:mt-[0.6rem] text-[0.65rem] sm:text-[0.75rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]">
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

export default OurValues
