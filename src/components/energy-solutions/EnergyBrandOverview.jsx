"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const energyOverviewData = [
    {
        id: 1,
        image: "/images/sectors/energy-solutions/brand-overview/1.avif",
    },
]

const EnergyBrandOverview = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            pt-[1rem] sm:pt-[1.5rem] lg:pt-[13rem] xl:pt-[13.5rem] 2xl:pt-[14rem]
            flex justify-between flex-wrap relative
            mb-[2rem] sm:mb-[3rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem]
        ">

            <span className="
                absolute bottom-0 left-0 text-[3rem] sm:text-[3rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7rem] text-[#e7e7e7] font-bold leading-[0.85] hidden lg:block
            ">
                Tandhan <br /> Power
            </span>

            {/* Content */}
            <div className="
                w-full lg:w-[48%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)] relative z-[50] bg-white h-max
                top-0 lg:top-[-7rem] xl:top-[-7.5rem] 2xl:top-[-8rem]
                right-0 lg:right-[-3.5rem] xl:right-[-4rem] 2xl:right-[-4.5rem]
                p-[1rem] sm:p-[2rem] lg:p-[2.8rem] xl:p-[3.3rem] 2xl:p-[3.8rem]
                mb-[1rem] lg:mb-0
            ">
                <motion.h3
                    className="relative z-50"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Brand Overview
                </motion.h3>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Tandhan Power is the energy solutions and EPC arm of Tandhan Group, delivering end-to-end power infrastructure across Asia, Africa, and the Middle East. Combining engineering expertise with advanced energy technologies, the company specializes in renewable energy, battery storage, hybrid power systems, and turnkey EPC solutions, enabling customers to build reliable, efficient, and future-ready energy ecosystems.
                </p>
            </div>

            {/* Slider */}
            <div className="w-full lg:w-[52%] relative">
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
                                    src="/images/sectors/energy-solutions/brand-overview/logo.avif"
                                    alt="Tandhan Power Logo"
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
                        <div className="w-[20%] h-[2rem] sm:h-[2.5rem] lg:h-[3.2rem] xl:h-[3.6rem] 2xl:h-[4rem]">

                        </div>
                        {/* <button
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
                        </button> */}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default EnergyBrandOverview
