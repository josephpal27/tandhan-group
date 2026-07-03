"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import Link from "next/link";

const Founder = () => {
    return (
        <section className="
            pt-[1.2rem] sm:pt-[2.2rem] lg:pt-[5.5rem] xl:pt-[6rem] 2xl:pt-[6.5rem]
            flex justify-between flex-wrap
        ">
            {/* Image */}
            <div className="w-full lg:w-[35%]">
                <img
                    src="/images/founder-demo.avif"
                    alt="Founder"
                    loading="lazy"
                    className="w-full"
                />
            </div>

            {/* Content */}
            <div className="
                w-full lg:w-[60%] bg-secondary/10 flex flex-col justify-center relative overflow-hidden
                p-[1rem] sm:p-[1.5rem] lg:p-[3.4rem] xl:p-[3.7rem] 2xl:p-[4rem] 
                mt-[1rem] lg:mt-0
            ">
                <img src="/images/quote.avif" alt="Quote" loading="lazy" className="w-[25%] mb-[1.8rem] sm:mb-[2rem] lg:mb-[2.4rem] xl:mb-[2.7rem] 2xl:mb-[3rem]" />
                <motion.h5
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Founder's Message
                </motion.h5>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat adipisicing elit tenetur dolorum commodi voluptatem debitis itaque facere adipisicing elit accusamus numquam nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-[0.8rem] items-center mt-[0.7rem] lg:mt-[1rem]">
                    <div className="w-[30px] lg:w-[45px] h-[2px] bg-primary"></div>
                    <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-semibold">
                        John Doe
                    </span>
                </div>
                <Link href="/" className="
                    mt-[1.5rem] sm:mt-[1.8rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem] block w-max bg-transparent hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                    py-[0.4rem] px-[1.4rem]
                ">
                    Read More
                </Link>

                {/* Artboard */}
                <img
                    src="/images/artboard.avif"
                    alt="Artboard"
                    loading="lazy"
                    className="w-[40%] lg:w-[60%] filter invert absolute top-[-15%] lg:top-[-39%] right-[-10%] lg:right-[-15%]"
                />
            </div>
        </section>
    )
}

export default Founder
