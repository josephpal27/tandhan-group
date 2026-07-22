"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headingVariantLeft } from "@/utils/animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { initiativesData } from "@/data/initiativesData";

const Initiatives = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            pt-[1.5rem] sm:pt-[2.5rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem]
            pb-[2rem] sm:pb-[3rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
        ">

            {/* Head */}
            <div className="
                flex justify-between items-center flex-wrap
                pb-[1rem]
                border-primary border-b-[2px]
            ">
                {/* Heading */}
                <div className="w-[90%] overflow-hidden">
                    <motion.h6
                        variants={headingVariantLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Recent Initiatives
                    </motion.h6>
                </div>
                {/* Navigation */}
                <div className="w-[4%] lg:w-[7%]">
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="
                            w-0 lg:w-[50px] xl:w-[55px] 2xl:w-[60px]
                            h-0 lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white lg:hover:bg-primary lg:hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-0 lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                            lg:active:scale-[0.85] 
                        "
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            </div>

            {/* Initiatives */}
            <div className="mt-[1.5rem] lg:mt-[2.5rem] overflow-hidden">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    speed={700}
                    className="w-full"
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // for mobile
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2, // tablet
                            spaceBetween: 15,
                        },
                        991: {
                            slidesPerView: 3, // tablet and up
                            spaceBetween: 20,
                        },
                    }}
                >
                    {initiativesData.map((post) => (
                        <SwiperSlide key={post.id} className="relative mb-[1.5rem] lg:mb-0">
                            <div>
                                <img src={post.image} alt={post.title} loading="lazy" className="w-full" />
                            </div>
                            <div className="mt-[1.1rem] lg:mt-[1.5rem]">
                                <span className="
                                        text-[1.3rem] sm:text-[1.4rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] 
                                        leading-[1] font-semibold
                                    ">
                                    {post.title}
                                </span>
                                <p className="mt-[0.5rem] lg:mt-[0.8rem]">
                                    {post.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default Initiatives
