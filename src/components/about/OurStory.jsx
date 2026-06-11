"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const slides = [
    {
        image: '/images/our-story/1.png',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elitfuhu. Commodi quaerat unde, vero incidunt accusantium odited fugit maiores itaque eveniet, dolor amet recusandae.',
    },
    {
        image: '/images/our-story/1.png',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elitfuhu. Commodi quaerat unde, vero incidunt accusantium odited fugit maiores itaque eveniet, dolor amet recusandae.',
    },
];

const OurStory = () => {

    const swiperRef = useRef(null);

    return (
        <section className="pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap items-center pl-0">

            {/* Slider */}
            <div className="w-[55%] flex justify-between">
                <div className="w-[80%] overflow-hidden">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        loop={true}
                        spaceBetween={15}
                        slidesPerView={1.15}
                        initialSlide={1}
                        className="w-full"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full overflow-hidden">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
                                    <div className="absolute bottom-0 left-0 right-0 p-[2rem]">
                                        <span className="text-white font-semibold text-[2.5rem] sm:text-[1.2rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem]">
                                            {slide.title}
                                        </span>
                                        <p className="text-white mt-[0.7rem]">
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="w-[20%] flex items-end">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="
                            w-[40px] sm:w-[45px] lg:w-[45px] xl:w-[55px] 2xl:w-[60px]
                            h-[40px] sm:h-[45px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                            flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        ">
                        ‹
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="
                            w-[40px] sm:w-[45px] lg:w-[45px] xl:w-[55px] 2xl:w-[60px]
                            h-[40px] sm:h-[45px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                            flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        ">
                        ›
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="w-[44%]">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Story
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat unde, vero incidunt accusantium odit fugit maiores itaque eveniet, dolor amet recusandae aut numquam voluptatem ab tempore quae sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat quae eveniet vitae modi aspernatur adipisci necessitatibus recusandae harum assumenda.
                </p>
                <p className="mt-[0.3rem] lg:mt-[1rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat unde, vero incidunt accusantium odit fugit maiores itaque eveniet, dolor amet recusandae aut numquam voluptatem ab tempore quae sit.
                </p>
            </div>

        </section>
    )
}

export default OurStory
