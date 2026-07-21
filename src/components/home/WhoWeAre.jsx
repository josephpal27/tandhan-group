"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import 'swiper/css';
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const aboutUsData = [
    {
        id: 1,
        image: "/images/who-we-are/3.avif",
    },
    {
        id: 2,
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
                    className="text-[1.8rem] sm:text-[2rem] lg:text-[2.3rem] xl:text-[2.4rem] 2xl:text-[2.5rem]"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Diversified by Business. United by Purpose. Built on Instinct.
                </motion.h2>
                <p className="mt-[0.7rem] lg:mt-[1.5rem]">
                    For over three decades, Tandhan Group has grown by seeing opportunities where others saw uncertainty. What began as a trading enterprise has evolved into a diversified global group spanning industrial and agricultural protective solutions, textiles, power solutions, and hospitality.
                </p>
                <p className="mt-[0.7rem] lg:mt-[1rem]">
                    Across industries, markets, and generations, one principle has remained constant: the instinct to anticipate change, act with conviction, and build for the future. Today, with operations across multiple countries and a growing global footprint, Tandhan continues to create products, businesses, and opportunities that empower progress - guided not by trends, but by the confidence to move ahead of them.
                </p>
            </div>

        </section>
    );
};

export default WhoWeAre;