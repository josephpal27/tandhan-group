"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { initiativesData } from "@/data/initiativesData";

const Initiatives = () => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem]
            pb-[2rem] sm:pb-[3rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
        ">

            {/* Head */}
            <div className="
                flex justify-between items-center
                pb-[1rem]
                border-primary border-b-[2px]
            ">
                {/* Slider */}
                <div className="w-[90%]">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        loop={true}
                        speed={700}
                        className="w-full"
                    >
                        {initiativesData.map((item) => (
                            <SwiperSlide key={item.id} className="relative">
                                <span className="
                                    text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold leading-[1.2]
                                ">
                                    {item.title}
                                </span>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* Navigation */}
                <div className="w-[7%]">
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="
                            w-[40px] sm:w-[45px] lg:w-[50px] xl:w-[55px] 2xl:w-[60px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                            active:scale-[0.85]
                        "
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            </div>

            {/* Initiatives */}
            <div className="mt-[2.5rem] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-wrap gap-[2%]"
                    >
                        {initiativesData[activeIndex].posts.map((post, index) => (
                            <div key={index} className="w-[32%]">
                                <div>
                                    <img src={post.image} alt={post.title} loading="lazy" className="w-full" />
                                </div>
                                <div className="mt-[1.5rem]">
                                    <span className="
                                        text-[1.2rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] 
                                        leading-[1] font-[500]
                                    ">
                                        {post.title}
                                    </span>
                                    <p className="mt-[0.5rem] lg:mt-[0.8rem]">
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

        </section>
    )
}

export default Initiatives
