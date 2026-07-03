"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { useState } from "react";

const ourValuesData = [
    {
        id: 1,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/1.avif",
    },
    {
        id: 2,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/2.avif",
    },
    {
        id: 3,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/3.avif",
    },
    {
        id: 4,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/4.avif",
    },
]

const OurValues = () => {

    const [activeIndex, setActiveIndex] = useState(1); // 2nd card active on load

    return (
        <section className="
            pt-[2rem] sm:pt-[2.2rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem]
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
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-[55%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisicing Illo perferendis adipisicing quibusdam ipsam alias harum ut pariatur nesciunt quod tenetur modi.
                </p>
            </div>

            {/* Row */}
            <div className="
                flex justify-between flex-wrap 
                mt-[3rem] sm:mt-[2rem] lg:mt-[2.5rem] xl:mt-[2.8rem] 2xl:mt-[3rem]
            ">
                {ourValuesData.map((value, index) => {

                    const isActive = index === activeIndex;
                    
                    return(
                        <div key={index} onClick={() => setActiveIndex(index)} className="
                            w-[23%] relative cursor-pointer transition-all duration-300
                            hover:scale-[1.05]
                        ">
                            {/* Image only renders for active card */}
                            <img
                                src={value.image}
                                alt={value.title}
                                loading="lazy"
                                className={`
                                    w-full transition-all duration-300
                                    ${isActive ? "opacity-100 scale-[1.05]" : "opacity-10"}
                                `}
                            />
                            <div className={`
                                absolute top-0 left-0 w-full h-full
                                flex flex-col justify-end transition-all duration-300
                                p-[2rem] sm:p-[1.7rem] lg:p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                ${isActive ? "bg-primary/80 text-white shadow-2xl scale-[1.05]" : "bg-transparent text-primary"}
                            `}>
                                <span className="block text-[4rem] sm:text-[3rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem] mb-[1rem]">
                                    0{value.id}.
                                </span>
                                <span className="text-[2rem] sm:text-[2.2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold">
                                    {value.title}
                                </span>
                                <p className="mt-[0.7rem] lg:mt-[0.8rem] text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
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
