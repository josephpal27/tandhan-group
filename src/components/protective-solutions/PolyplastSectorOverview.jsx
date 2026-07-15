"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const PolyplastSectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="flex justify-between flex-wrap relative overflow-hidden">

            {/* Left */}
            <div className="w-full lg:w-[30%] pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] relative z-50">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Sector Overview
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur asperiores nihil repellat.
                </p>
                <p className={`
                    mt-[0.7rem] lg:mt-[1rem] w-[80%] overflow-hidden transition-all duration-300
                    ${active ? "max-h-40 opacity-100 mb-[1rem]" : "max-h-0 opacity-0"}
                `}>
                    Lorem ipsum dolor sit amet consectetur elit. Architecto tenetur asperiores nihil repellat adipisicing.
                </p>
                <button className="
                    mt-[1rem] lg:mt-[1.5rem] bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                    py-[0.45rem] px-[1.4rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Center */}
            <motion.div
                className="w-full lg:w-[32%] mt-[2rem] lg:mt-0"
                initial={{ opacity: 0, y: -450 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: "easeOut",
                }}
            >
                <img
                    src="/images/sectors/protective-solutions/truck-bg.avif"
                    alt="Sector Overview"
                    loading="lazy"
                    className="w-[55%] lg:w-full mx-auto"
                />
            </motion.div>

            {/* Right */}
            <div className="w-full lg:w-[30%] flex items-end pb-[3rem] sm:pb-[1.5rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem] relative z-50 mt-[2rem] lg:mt-0">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima adipisicing tenetur asperiores nihil repellat pariatur explicabo tenetur exercitationem molestiae ducimus fugiat.
                </p>
            </div>

            {/* Truck Image */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end pb-[60%] sm:pb-[65%] lg:pb-[3.7rem] xl:pb-[4.5rem] 2xl:pb-[5rem]">
                <img
                    src="/images/sectors/protective-solutions/truck.avif"
                    alt="Truck"
                    loading="lazy"
                    className="w-[88%] lg:w-[50%]"
                />
            </div>

        </section>
    )
}

export default PolyplastSectorOverview
