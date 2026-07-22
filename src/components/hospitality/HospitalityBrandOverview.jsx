"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const brandOverviewData = [
    { id: 1, image: "/images/sectors/hospitality/brand-overview/1.avif", },
    { id: 2, image: "/images/sectors/hospitality/brand-overview/2.avif", },
    { id: 3, image: "/images/sectors/hospitality/brand-overview/3.avif", },
    { id: 4, image: "/images/sectors/hospitality/brand-overview/4.avif", },
    { id: 5, image: "/images/sectors/hospitality/brand-overview/5.avif", },
]

const HospitalityBrandOverview = () => {

    const mainSwiperRef = useRef(null);
    const thumbSwiperRef = useRef(null);

    const handleThumbChange = (swiper) => {
        if (!mainSwiperRef.current) return;
        const length = brandOverviewData.length;
        const mainIndex = (swiper.realIndex - 1 + length) % length;
        mainSwiperRef.current.slideToLoop(mainIndex);
    };

    return (
        <section className="
            pt-[2.5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[2.5rem] sm:pb-[3rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]
        ">

            {/* Top */}
            <div className="
                flex justify-between flex-wrap items-center flex-col-reverse lg:flex-row
            ">
                {/* Main Display Image */}
                <div className="w-full lg:w-[49%] mt-[1.5rem] lg:mt-0">
                    <Swiper
                        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                        slidesPerView={1}
                        loop={true}
                        allowTouchMove={false}
                        simulateTouch={false}
                        speed={500}
                        dir="rtl"
                    >
                        {brandOverviewData.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item.image}
                                        alt={`Slide ${item.id}`}
                                        loading="lazy"
                                        className="w-full"
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                {/* Content */}
                <div className="w-full lg:w-[48%]">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Brand <br /> Overview
                    </motion.h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        NX Hotels is Tandhan Group's hospitality brand, offering contemporary stays designed for today's business and leisure travellers. Strategically located on Kolkata's EM Bypass, the hotel combines modern accommodation, curated dining, elegant event spaces, and personalised service to create a comfortable and memorable guest experience. Every stay reflects our commitment to quality, and attention to detail.
                    </p>
                </div>
            </div>

            {/* Slider */}
            <div className="mt-[0.7rem] lg:mt-[1.5rem]">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (thumbSwiperRef.current = swiper)}
                    onSlideChange={handleThumbChange}
                    slidesPerView={4}
                    spaceBetween={25}
                    loop={true}
                    initialSlide={1}
                    navigation={{
                        prevEl: '#item-prev',
                        nextEl: '#item-next',
                    }}
                    breakpoints={{
                        0: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 15 },
                        991: { slidesPerView: 4, spaceBetween: 25 },
                    }}
                >
                    {brandOverviewData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.image}
                                    alt={`Slide ${item.id}`}
                                    loading="lazy"
                                    className="w-full"
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            {/* Navigation */}
            <div className="flex justify-end mt-[0.7rem] lg:mt-[1.5rem]">
                <button className="
                    w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                    text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    border-primary border-[2px] lg:border-[3px] border-r-[2px]
                " id="item-prev">
                    ‹
                </button>
                <button className="
                    w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                    text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    border-primary border-[2px] lg:border-[3px] border-l-[2px]
                " id="item-next">
                    ›
                </button>
            </div>

        </section>
    )
}

export default HospitalityBrandOverview
