"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const energyOverviewData = [
    {
        id: 1,
        image: "/images/sectors/energy-solutions/brand-overview/1.png",
    },
    {
        id: 2,
        image: "/images/sectors/energy-solutions/brand-overview/1.png",
    },
]

const EnergyBrandOverview = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            pt-[5rem] sm:pt-[2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            flex justify-between flex-wrap relative
        ">

            <span>
                Tandhan <br /> Power
            </span>

            {/* Content */}
            <div className="
                w-[48%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)] relative z-[50] bg-white
                top-[-8rem] 
                right-[-4.5rem] 
                p-[4rem]
            ">
                <h3>
                    Brand <br /> Overview
                </h3>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi id rerum eius qui laborum, nostrum dolore cumque quas dolor rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* Slider */}
            <div className="w-[52%] relative">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    className="w-full"
                >
                    {energyOverviewData.map((item) => (
                        <SwiperSlide key={item.id} className="relative">
                            <img
                                src={item.image}
                                alt={`Slide ${item.id}`}
                                loading="lazy"
                                className="w-full aspect-[3/2] object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-primary/20">
                                <img 
                                    src="/images/sectors/energy-solutions/brand-overview/logo.png" 
                                    alt="Logo" 
                                    loading="lazy"
                                    className="w-[35%]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Arrows */}
                <div className='bg-primary/60 w-full absolute bottom-0 z-10'>
                    <div className="flex justify-end z-20">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="
                                w-[40px] sm:w-[45px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px]
                                h-[40px] sm:h-[45px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                                flex items-center justify-center bg-white hover:bg-primary hover:text-white transition 
                                text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            "
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="
                                w-[40px] sm:w-[45px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px]
                                h-[40px] sm:h-[45px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                                flex items-center justify-center bg-white hover:bg-primary hover:text-white transition 
                                text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            "
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default EnergyBrandOverview
