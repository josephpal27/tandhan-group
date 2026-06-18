"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const Founder = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[2.2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            flex justify-between flex-wrap
        ">
            <div className="w-[20%] hidden lg:block">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <img
                        src="/images/qoute.png"
                        alt="Qoute Left"
                        loading="lazy"
                        className="
                        w-[230px] sm:w-[160px] lg:w-[185px] xl:w-[205px] 2xl:w-[230px]
                        mt-[1rem] brightness-0 invert-0
                    "
                    />
                </motion.div>
            </div>
            <div className="w-full lg:w-[79%]">
                {/* Top */}
                <div>
                    <motion.h4
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Founder's Message
                    </motion.h4>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore et a, velit reprehenderit? Deserunt, necessitatibus possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore et a, velit reprehenderit? Deserunt, necessitatibus possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Bottom */}
                <div className="
                    mt-[1.5rem] sm:mt-[1.7rem] lg:mt-[2.4rem] xl:mt-[2.6rem] 2xl:mt-[3.2rem]
                    flex justify-between
                ">
                    <div className="w-[30%] hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, y: -60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <img
                                src="/images/qoute.png"
                                alt="Qoute Left"
                                loading="lazy"
                                className="
                                    w-[230px] sm:w-[160px] lg:w-[185px] xl:w-[205px] 2xl:w-[230px]
                                    rotate-[180deg] brightness-0 invert-0
                                "
                            />
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-[70%] relative group">
                        <img
                            src="/images/founder-demo.png"
                            alt="Founder"
                            loading="lazy"
                            className="w-full h-full"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[1rem] lg:p-[2rem] text-white">
                            <span className="text-[1.4rem] sm:text-[1.5rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-semibold">
                                John Doe
                            </span>
                            <p>
                                - Founder
                            </p>
                        </div>
                        <div className="absolute w-[55%] lg:w-[40%] h-[10px] lg:h-[14px] left-[22.5%] lg:left-[30%] bottom-[-5px] lg:bottom-[-7px] bg-secondary group-hover:w-[70%] group-hover:left-[15%] transition-all duration-300">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder
