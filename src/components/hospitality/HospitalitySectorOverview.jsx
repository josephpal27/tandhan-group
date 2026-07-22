"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const HospitalitySectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="flex justify-between flex-wrap">

            {/* Content */}
            <div className="w-full lg:w-[37%] pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] relative z-50">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Sector <br /> Overview
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Hospitality, for us, is about creating experiences that leave a lasting impression. Our Hospitality business combines contemporary comfort, thoughtful service, and exceptional spaces to meet the evolving needs of business and leisure travellers alike.
                </p>
                <p className={`
                    mt-[0.7rem] lg:mt-[1rem] w-[90%] overflow-hidden transition-all duration-300
                    ${active ? "max-h-40 opacity-100 mb-[1rem]" : "max-h-0 opacity-0"}
                `}>
                    From refined stays and memorable dining to versatile event venues, we are committed to delivering warm, seamless, and personalised experiences that reflect the trust and quality synonymous with the Tandhan Group.
                </p>
                <button className="
                    mt-[1rem] lg:mt-[1.5rem] bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                    py-[0.45rem] px-[1.4rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[61%] relative mt-[1.8rem] lg:mt-0">
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
