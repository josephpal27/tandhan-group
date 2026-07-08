"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const SectorsCTA = ({cta}) => {
    return (
        <section className="
            relative px-0 mt-[2rem] sm:mt-[2.2rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem] 
            mb-[1rem]
        ">
            <img src={cta.image} alt="CTA Image" loading="lazy" className="w-full" />
            <div className="
                absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center
                px-[1rem] sm:px-[5%] lg:px-[7%] bg-gradient-to-b from-primary/40 to-primary/100
            ">
                <motion.h6
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {cta.title}
                </motion.h6>
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-[70%]">
                    {cta.desc}
                </p>
                <Link href={cta.url} className="mt-[2rem] border-[2px] font-semibold border-white px-[1.5rem] py-[0.4rem] hover:bg-white hover:text-primary transition">
                    Visit Site
                </Link>
            </div>
        </section>
    )
}

export default SectorsCTA
