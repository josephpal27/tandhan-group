"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const PresenceOverview = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            flex justify-between flex-wrap flex-col-reverse lg:flex-row
        ">

            {/* Image */}
            <div className="w-full lg:w-[45%] mt-[2rem] lg:mt-0">
                <img src="/images/presence/overview.png" alt="Overview" loading="lazy" className="w-full" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[50%]">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Global Presence <br /> Overview
                </motion.h2>
                <p className="mt-[1rem] lg:mt-[1.5rem]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nesciunt enim. Enim porro totam aliquid reprehenderit repudiandae asperiores animi maxime nobis labore et consequatur, consequuntur facere doloribus accusamus veritatis voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quaerat.
                </p>
                <p className="mt-[0.7rem] lg:mt-[1rem]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nesciunt enim. Enim asperiores porro totam aliquid reprehenderit repudiandae asperiores animi maxime nobis adipisicing labore et consequatur.
                </p>
            </div>

        </section>
    )
}

export default PresenceOverview
