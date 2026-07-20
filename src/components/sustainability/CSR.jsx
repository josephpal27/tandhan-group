"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const CSR = () => {
    return (
        <section className="
            bg-[url('/images/sustainability/csr-banner.avif')] bg-cover bg-center bg-no-repeat text-white
            pt-[6rem] sm:pt-[7rem] lg:pt-[9rem] xl:pt-[9.5rem] 2xl:pt-[10rem]
            pb-[1rem] sm:pb-[1.5rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]

            mt-[2rem] lg:mt-[5.5rem]
        ">
            <motion.h4
                className="relative z-50"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                CSR
            </motion.h4>
            <p className="mt-[0.7rem] lg:mt-[1.3rem] w-full lg:w-[60%]">
                At Tandhan, growth is measured not only by business success but by the positive difference we create in people's lives. Through the Tandhan Foundation, we work to strengthen communities by expanding access to education, healthcare, skill development, and social welfare. 
            </p>
        </section>
    )
}

export default CSR
