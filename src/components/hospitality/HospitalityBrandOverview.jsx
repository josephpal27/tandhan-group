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
        <section>

            {/* Top */}
            <div className="
                flex justify-between flex-wrap
                pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            ">
                {/* Main Display Image */}
                <div className="w-[49%]">
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
                <div className="w-[48%]">
                    <h3>
                        Brand Overview
                    </h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita officia rem voluptatum mollitia consequatur, quaerat dolores voluptas dolor maiores sit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, quidem? Saepe autem cumque libero quasi eligendi error magni dolores deleniti assumenda voluptates voluptatum quia nulla itaque, adipisci accusamus! Enim, corporis.
                    </p>
                </div>
            </div>

            {/* Slider */}
            <div className="mt-[1.5rem]">
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
            <div className="flex justify-end mt-[1.5rem]">
                <button className="
                    w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                    text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    border-primary border-[2px] lg:border-[3px] border-r-[2px]
                " id="item-prev">
                    ‹
                </button>
                <button className="
                    w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
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
