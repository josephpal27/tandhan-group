"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const HospitalitySectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="flex justify-between flex-wrap">

            {/* Content */}
            <div className="w-[27%] pt-[5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] relative z-50">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Sector <br /> Overview
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur elit. Architecto tenetur asperiores nihil repellat.
                </p>
                <p className={`
                    mt-[0.7rem] lg:mt-[1rem] w-[90%] overflow-hidden transition-all duration-300
                    ${active ? "max-h-40 opacity-100 mb-[1rem]" : "max-h-0 opacity-0"}
                `}>
                    Lorem ipsum dolor sit amet consectetur elit. Architecto tenetur asperiores nihil repellat adipisicing.
                </p>
                <button className="
                    mt-[1.5rem] bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                    py-[0.45rem] px-[1.4rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Image */}
            {/* <div className="w-[18%] relative">
                <img
                    src="/images/sectors/hospitality/bg.avif"
                    alt="Background"
                    loading="lazy"
                    className="w-full"
                />
                <img
                    src="/images/sectors/hospitality/umbrella-base.png"
                    alt="Umbrella Base"
                    loading="lazy"
                    className="w-full absolute bottom-0 left-0 scale-[2.2]"
                />
            </div> */}

            {/* Right */}
            <div className="w-[61%] relative">
                {/* <span className="
                    block [writing-mode:vertical-rl] rotate-180 
                    text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7rem]
                    text-[#e7e7e7] font-bold leading-[0.85] tracking-[0.02em] absolute top-0 right-[-10%]
                ">
                    HOSPITALITY
                </span> */}
                <img
                    src="/images/sectors/hospitality/umbrella-base.avif"
                    alt="Umbrella Base"
                    loading="lazy"
                    className="w-full"
                />
            </div>

        </section>
    )
}

export default HospitalitySectorOverview
