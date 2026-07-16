"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { useState } from "react";

const ourValuesData = [
    {
        id: 1,
        title: "Integrity",
        desc: "We uphold the highest standards of honesty, accountability, and transparency. Every decision we make is guided by ethics, earning the trust of our customers, partners, employees, and communities.",
        image: "/images/values/1.avif",
    },
    {
        id: 2,
        title: "Foresight",
        desc: "We look beyond the immediate, anticipating change and identifying opportunities before they become obvious. Guided by experience and sound judgment, we make decisions that create enduring value.",
        image: "/images/values/2.avif",
    },
    {
        id: 3,
        title: "Sustainability",
        desc: "We believe growth should create a positive impact. Through responsible manufacturing, resource stewardship, and conscious business practices, we are building a more resilient future for generations to come.",
        image: "/images/values/3.avif",
    },
    {
        id: 4,
        title: "Inclusivity",
        desc: "We believe meaningful progress is achieved together. By fostering a culture of respect, collaboration, and equal opportunity, we empower people, strengthen communities, and create shared success.",
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
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[55%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisicing Illo perferendis adipisicing quibusdam ipsam alias harum ut pariatur nesciunt quod tenetur modi.
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
                            w-[47%] lg:w-[23%] relative cursor-pointer transition-all duration-300
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
                                p-[0.8rem] sm:p-[1.2rem] lg:p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                ${isActive ? "bg-primary/80 text-white shadow-2xl lg:scale-[1.05]" : "bg-transparent text-primary"}
                            `}>
                                <span className="block text-[1.5rem] sm:text-[2.2rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem] mb-[0.3rem] lg:mb-[1rem]">
                                    0{value.id}.
                                </span>
                                <span className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold">
                                    {value.title}
                                </span>
                                <p className="mt-[0.7rem] lg:mt-[0.8rem] text-[0.65rem] sm:text-[0.75rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]">
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
