"use client";

import Link from "next/link"
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const PolyplastBrandOverview = () => {
    return (
        <section className="
            mt-[0.5rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
            mb-[3rem] sm:mb-[3.5rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem]
            px-0 bg-primary
        ">
            <div className="flex justify-between flex-wrap pl-[1rem] sm:pl-[5%] lg:pl-[7%] pr-[1rem] lg:pr-0 text-white">
                <div className="w-full lg:w-[43%] flex flex-col justify-center pt-[2rem] lg:pt-0">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Brand Overview
                    </motion.h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem] lg:w-[95%]">
                        Tandhan Polyplast is one of Eastern India's leading manufacturers of high-performance polymer solutions, serving customers across India and international markets. Backed by advanced manufacturing facilities, stringent quality standards, and a growing export footprint, the company produces durable, application-specific solutions that meet the evolving needs of agriculture, infrastructure, and industry.
                    </p>
                    <Link href="/" className="
                        mt-[2rem] lg:mt-[2.5rem] bg-primary hover:bg-white w-max text-white hover:text-primary font-semibold transition
                        border-white border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                        py-[0.45rem] px-[1.4rem]
                    ">
                        Read More
                    </Link>
                </div>
                <div className="w-full lg:w-[54%] relative mt-[2.5rem] lg:mt-0 pb-[1rem] lg:pb-0">
                    <img src="/images/paper-roll.png" alt="Brand Overview" loading="lazy" className="w-full" />
                    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-[#000000b8]">
                        <img src="/images/logo/tandhan-polyplast.png" alt="Tandhan Polyplast" loading="lazy" className="w-[40%] invert brightness-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PolyplastBrandOverview
