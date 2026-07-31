"use client";

import { headingVariant } from "@/utils/animations";
import { motion } from "framer-motion";

const Offices = () => {
    return (
        <section className="pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]">

            {/* Head */}
            <div className="flex flex-col items-center">
                <motion.h3
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                >
                    Offices
                </motion.h3>

                <div className="w-[80px] h-[5px] bg-secondary rounded-full mt-[0.3rem]"></div>
            </div>

        </section>
    )
}

export default Offices
