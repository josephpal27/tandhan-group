"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const Values = () => {
    return (
        <section className="
            pt-[3rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            px-0 flex justify-between flex-wrap
        ">

            {/* Left */}
            <div className="w-full lg:w-[50%] bg-[url('/images/building-from-the-east-1.avif')] bg-center bg-cover bg-no-repeat pl-[1rem] lg:pl-[12%] relative">
                {/* Layer */}
                <div className="w-full h-full absolute top-0 left-0 bg-primary/50"></div>
                {/* Content Box */}
                <div className="
                    bg-primary/60 text-white h-full relative z-10
                    px-[1.5rem] sm:px-[3rem] lg:px-[2.5rem] xl:px-[3rem] 2xl:px-[3.5rem] 
                    py-[2rem] sm:py-[3rem] lg:py-[2rem] xl:py-[2.5rem] 2xl:py-[3rem] 
                ">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Building From <br/> The East
                    </motion.h3>
                    <p className="mt-[0.7rem] lg:mt-[1.8rem]">
                        Tandhan was built from the East because we saw potential where others saw limitations. Guided by instinct and strengthened by experience, we chose to invest in a region rich in talent, opportunity, and industrial promise.
                    </p>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Today, that conviction continues to shape our growth. With strategic access through Kolkata Port, a diversified manufacturing ecosystem, export-led operations, and a strong presence across emerging markets, Eastern India remains the foundation from which we build for the world.
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[50%] pr-[1rem] lg:pr-[4%] bg-primary">
                <img src="/images/building-from-the-east.avif" alt="Values Image" loading="lazy" className="w-full" />
            </div>

        </section>
    )
}

export default Values
