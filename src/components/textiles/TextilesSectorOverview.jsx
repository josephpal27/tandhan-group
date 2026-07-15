"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const TextilesSectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="flex justify-between flex-wrap">

            {/* Content */}
            <div className="w-[35%] pt-[5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] relative z-50">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Sector Overview
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
                    border-primary border-[3px]
                    py-[0.45rem] px-[1.4rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Image */}
            <div className="w-[65%]">
                <img 
                    src="/images/sectors/textiles/machine.avif" 
                    alt="Machine" 
                    loading="lazy" 
                    className="w-full" 
                />
            </div>

        </section>
    )
}

export default TextilesSectorOverview
