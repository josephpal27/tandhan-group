"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const slides = [
    {
        image: '/images/our-story/1.avif',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elitfuhu. Commodi quaerat unde, vero incidunt accusantium odited fugit maiores itaque eveniet, dolor amet recusandae.',
    },
    {
        image: '/images/our-story/1.avif',
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elitfuhu. Commodi quaerat unde, vero incidunt accusantium odited fugit maiores itaque eveniet, dolor amet recusandae.',
    },
];

const OurStory = () => {

    const swiperRef = useRef(null);

    return (
        <section className="pt-[2rem] sm:pt-[2.5rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap items-center pl-0 flex-col-reverse lg:flex-row">

            {/* Slider */}
            <div className="w-full lg:w-[54%] flex justify-between mt-[1.8rem] lg:mt-0">
                <div className="w-[80%] overflow-hidden">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        dir="rtl"
                        loop={true}
                        spaceBetween={12}
                        slidesPerView={1.15}
                        initialSlide={0}
                        breakpoints={{
                            991: {
                                spaceBetween: 15,
                            },
                        }}
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
                                    <div className="absolute bottom-0 left-0 right-0 p-[0.8rem] lg:p-[2rem]" dir="ltr">
                                        <span className="text-white font-semibold text-[1.5rem] sm:text-[1.7rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem]">
                                            {slide.title}
                                        </span>
                                        <p className="text-white mt-[0.3rem] lg:mt-[0.7rem] text-[0.8rem] sm:text-[0.9rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]">
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
                        onClick={() => swiperRef.current?.slideNext()}
                        className="
                            w-[40px] sm:w-[45px] lg:w-[45px] xl:w-[55px] 2xl:w-[60px]
                            h-[40px] sm:h-[45px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary
                            border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                            border-r-[1.5px] sm:border-r-[1.5px] lg:border-r-[1.5px] xl:border-r-[1.5px] 2xl:border-r-[2px]
                        ">
                        ‹
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="
                            w-[40px] sm:w-[45px] lg:w-[45px] xl:w-[55px] 2xl:w-[60px]
                            h-[40px] sm:h-[45px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary
                            border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                            border-l-[1.5px] sm:border-l-[1.5px] lg:border-l-[1.5px] xl:border-l-[1.5px] 2xl:border-l-[2px]
                        ">
                        ›
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-[46%] pl-[1rem] lg:pl-0">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    The Tandhan Story
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.5rem]">
                    Founded in Kolkata in 1994, Tandhan Group has spent over three decades building businesses that solve real-world challenges. Today, with a presence across 25+ countries, we operate across protective solutions, textiles, energy, and hospitality.
                </p>
                <p className="mt-[0.3rem] lg:mt-[1rem]">
                    Driven by innovation, integrity, and manufacturing excellence, our 2,000+ people create more than products - they build partnerships, livelihoods, and opportunities. Every venture we etiquette is guided by a shared belief: meaningful growth is achieved when business success creates value for people, communities, and markets alike.
                </p>
            </div>

        </section>
    )
}

export default OurStory
