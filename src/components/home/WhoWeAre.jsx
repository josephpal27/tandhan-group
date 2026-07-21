"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const aboutUsData = [
    {
        id: 1,
        title: "Who We Are",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio distinctio odit ab earum ipsum magni iste unde architecto quaerat cum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident nesciunt sint.",
        image: "/images/who-we-are/1.avif",
    },
    {
        id: 2,
        title: "About The Founder",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio distinctio odit ab earum ipsum magni iste unde architecto quaerat cum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident nesciunt sint.",
        image: "/images/who-we-are/2.avif",
    },
];

const WhoWeAre = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = aboutUsData[activeIndex];

    return (
        <section className="pl-[1rem] sm:pl-[5%] lg:pl-0 pt-[1.5rem] sm:pt-[2.5rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between items-center flex-wrap flex-col-reverse lg:flex-row">

            {/* Left Image */}
            <div className="w-full lg:w-[48%] relative mt-[1.2rem] lg:mt-0">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    loop={true}
                    className="w-full"
                >
                    {aboutUsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full aspect-[3/2] object-cover"
                            />
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

            {/* Right Content */}
            <div className="w-full lg:w-[47%]">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {activeItem.title}
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.5rem]">{activeItem.desc}</p>
            </div>

        </section>
    );
};

export default WhoWeAre;