"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const CareerDetailsBanner = () => {
    return (
        <section className="
            h-[50dvh] lg:h-[65vh] bg-primary text-white flex flex-col justify-end pb-[3rem]
        ">
            <motion.h1
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Careers
            </motion.h1>
            {/* <p className="mt-[0.8rem] lg:mt-[1.2rem] w-full lg:w-[55%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus recusandae itaque labore, asperiores reiciendis exercitationem nemo. Porro, voluptatem iusto.
            </p> */}
        </section>
    )
}

export default CareerDetailsBanner
