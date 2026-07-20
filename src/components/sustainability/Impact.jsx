"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const Impact = () => {
    return (
        <section className="
            flex justify-between items-center flex-wrap 
            pt-[1.7rem] sm:pt-[2.2rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem]
        ">

            {/* Image */}
            <div className="w-full lg:w-[55%]">
                <img src="/images/sustainability/tree.avif" alt="Tree" loading="lazy" className="w-full" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[40%] mt-[1.3rem] lg:mt-0">
                <motion.h3
                    className="relative z-50"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                        Lorem Ipsum
                </motion.h3>
                <p className="mt-[0.7rem] lg:mt-[1.3rem]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur officia numquam repudiandae quo ipsum placeat dolorem harum fuga totam et. Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
            </div>

        </section>
    )
}

export default Impact
