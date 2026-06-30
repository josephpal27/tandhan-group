"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const Values = () => {
    return (
        <section className="
            pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            px-0 flex justify-between flex-wrap
        ">

            {/* Left */}
            <div className="w-[50%] bg-[url('/images/services/3.avif')] bg-center bg-cover bg-no-repeat pl-[12%] relative">
                {/* Layer */}
                <div className="w-full h-full absolute top-0 left-0 bg-primary/50"></div>
                {/* Content Box */}
                <div className="
                    bg-primary/60 text-white h-full relative z-10
                    px-[3.5rem] sm:px-[3rem] lg:px-[2.5rem] xl:px-[3rem] 2xl:px-[3.5rem] 
                    py-[3rem] sm:py-[3rem] lg:py-[2rem] xl:py-[2.5rem] 2xl:py-[3rem] 
                ">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Lorem Ipsum
                    </motion.h3>
                    <p className="mt-[0.7rem] lg:mt-[1.8rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, et neque. Deserunt quod modi ipsam optio natus itaque quisquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus veniam, soluta aut ut similique, culpa nisi aliquam, perferendis explicabo dolore possimus incidunt corporis! Earum voluptatibus sequi consequatur.
                    </p>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, et neque. Deserunt quod modi ipsam optio natus itaque quisquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="w-[50%] pr-[4%] bg-primary">
                <img src="/images/footer-bg.avif" alt="Values Image" loading="lazy" className="w-full" />
            </div>

        </section>
    )
}

export default Values
