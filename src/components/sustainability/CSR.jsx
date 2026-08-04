"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const CSR = () => {
    return (
        <section className="
            bg-[url('/images/sustainability/csr-mob-banner.avif')] lg:bg-[url('/images/sustainability/csr-banner.avif')] bg-cover bg-center bg-no-repeat text-white
            pb-[1rem] sm:pb-[1.5rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]
            h-[60dvh] lg:h-[80dvh] flex flex-col justify-end relative

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
            <p className="mt-[0.7rem] lg:mt-[1.3rem] w-full lg:w-[60%] relative z-10">
                At Tandhan, growth is measured not only by business success but by the positive difference we create in people's lives. Through the Tandhan Foundation, we work to strengthen communities by expanding access to education, healthcare, skill development, and social welfare. Every initiative reflects our belief that meaningful progress is achieved when businesses and communities grow together. 
            </p>

            {/* Layer */}
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-primary/60"></div>
        </section>
    )
}

export default CSR
