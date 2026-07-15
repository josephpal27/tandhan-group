"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const EnergySectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="
            pb-[4rem] sm:pb-[4.5rem] lg:pb-[3.5rem] xl:pb-[4rem] 2xl:pb-[4.5rem]
            flex justify-between flex-wrap flex-col-reverse lg:flex-row overflow-hidden lg:overflow-visible
        ">

            {/* Image */}
            <div className="w-full lg:w-[53%] relative h-max mt-[2rem] lg:mt-0">
                <img
                    src="/images/sectors/energy-solutions/solar-bg.avif"
                    alt="Solar Background"
                    loading="lazy"
                    className="w-full relative z-50"
                />
                <motion.img
                    src="/images/sectors/energy-solutions/solar.avif"
                    alt="Solar Panel"
                    loading="lazy"
                    className="w-[97%] lg:w-full absolute bottom-[-1.5rem] lg:bottom-[-4rem] z-50 ml-[1.5%] lg:ml-0"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.2 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[40%] pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] relative">
                <motion.h2
                    className="relative z-50"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Sector <br /> Overview
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Reliable energy is the foundation of growth. Our Energy Solutions business delivers integrated power, renewable energy, and energy storage solutions that help industries, businesses, and communities operate with confidence.
                </p>
                <p className={`
                    mt-[0.7rem] lg:mt-[1rem] overflow-hidden transition-all duration-300
                    ${active ? "max-h-40 opacity-100 mb-[1rem]" : "max-h-0 opacity-0"}
                `}>
                    From conventional power backup to next-generation solar and battery technologies, we combine engineering expertise with dependable execution to build resilient energy infrastructure that powers progress across emerging markets.
                </p>
                <button className="
                    mt-[1rem] lg:mt-[1.5rem] bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                    py-[0.45rem] px-[1.4rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>

                {/* Artboard */}
                <img
                    src="/images/artboard.avif"
                    alt="Artboard"
                    loading="lazy"
                    className="
                        w-[60%] lg:w-[80%] filter invert absolute opacity-50
                        right-[-4rem] sm:right-[-5rem] lg:right-[-4rem] xl:right-[-4.5rem] 2xl:right-[-5rem]
                        top-[-3rem] sm:top-[-4rem] lg:top-[-6.5rem] xl:top-[-7rem] 2xl:top-[-7.5rem]
                    "
                />

            </div>

        </section>
    )
}

export default EnergySectorOverview
