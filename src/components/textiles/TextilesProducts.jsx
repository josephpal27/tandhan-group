"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const textilesProductsData = [
    {
        id: 1,
        image: "/images/sectors/textiles/products/1.avif",
    },
    {
        id: 2,
        image: "/images/sectors/textiles/products/1.avif",
    },
]

const TextilesProducts = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            pt-[1.7rem] sm:pt-[2.2rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            pb-[0.5rem] sm:pb-[1rem] lg:pb-[3rem] xl:pb-[3.5rem] 2xl:pb-[4rem]
            flex justify-start lg:justify-end flex-wrap relative
        ">

            {/* Content */}
            <div className="
                w-full lg:w-[80%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)]
                pl-[1rem] lg:pl-[35%]
            ">
                {/* Top */}
                <div className="
                    pr-[1rem] sm:pr-[1.5rem] lg:pr-[2.4rem] xl:pr-[2.7rem] 2xl:pr-[3rem]
                    pt-[1.5rem] sm:pt-[2rem] lg:pt-[2.9rem] xl:pt-[3.2rem] 2xl:pt-[3.5rem]
                    pb-[3rem] sm:pb-[4rem] lg:pb-[6rem] xl:pb-[6.7rem] 2xl:pb-[7rem]
                ">
                    <motion.h4
                        className="relative z-50"
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Explore <br /> Our Products
                    </motion.h4>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        More than denim, we engineer fabrics that define tomorrow's fashion. Tandhan Denim blends advanced manufacturing, world-class technology and meticulous quality control to create premium denim for global brands. With sustainability, innovation and craftsmanship at the core of every process, we transform raw fibre into fabrics that deliver lasting performance and timeless appeal.
                    </p>
                </div>

                {/* Bottom */}
                <div className="flex justify-end mt-[-1rem]">
                    <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " onClick={() => swiperRef.current?.slidePrev()}>
                        ‹
                    </button>
                    <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-l-[2px]
                        " onClick={() => swiperRef.current?.slideNext()}>
                        ›
                    </button>
                </div>
            </div>

            {/* Slider */}
            <div className="w-[72%] lg:w-[42%] relative lg:absolute top-[-2.5rem] lg:top-[1rem] left-0 lg:left-[7%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)]">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    className="w-full"
                >
                    {textilesProductsData.map((item) => (
                        <SwiperSlide key={item.id} className="relative">
                            <img
                                src={item.image}
                                alt={`Slide ${item.id}`}
                                loading="lazy"
                                className="w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}

export default TextilesProducts
