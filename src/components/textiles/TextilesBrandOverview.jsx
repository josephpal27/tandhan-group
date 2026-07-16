"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const textilesOverviewData = [
    {
        id: 1,
        image: "/images/sectors/textiles/brand-overview/1.avif",
    },
    {
        id: 2,
        image: "/images/sectors/textiles/brand-overview/1.avif",
    },
]

const TextilesBrandOverview = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            flex justify-between flex-wrap relative
            pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[2rem] sm:pb-[3rem] lg:pb-[4rem] xl:pb-[4.5rem] 2xl:pb-[5rem]
        ">

            <span className="
                absolute bottom-[2rem] sm:bottom-[3rem] lg:bottom-[4rem] xl:bottom-[4.5rem] 2xl:bottom-[5rem] left-0 text-[3rem] sm:text-[3rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7rem] text-[#e7e7e7] font-bold leading-[0.85] hidden lg:block
            ">
                Tandhan <br /> Denim
            </span>

            {/* Content */}
            <div className="
                w-full lg:w-[48%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)] relative z-[50] bg-white h-max
                top-0 lg:top-[5rem] xl:top-[5.5rem] 2xl:top-[6rem]
                right-0 lg:right-[-4rem] xl:right-[-4.5rem] 2xl:right-[-5rem]
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
                    Brand <br /> Overview
                </motion.h3>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quisquam aliquam, nobis praesentium alias aspernatur nemo quibusdam quidem magni aut facilis, nisi hic repellendus reprehenderit. Eum, molestias sapiente. Lorem ipsum dolor, consectetur adipisicing elit.
                </p>
            </div>

            {/* Slider */}
            <div className="w-full lg:w-[50%] relative">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    className="w-full"
                >
                    {textilesOverviewData.map((item) => (
                        <SwiperSlide key={item.id} className="relative">
                            <img
                                src={item.image}
                                alt={`Slide ${item.id}`}
                                loading="lazy"
                                className="w-full object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-primary/20">
                                <img
                                    src="/images/logo/tandhan-denim.png"
                                    alt="Tandhan Denim Logo"
                                    loading="lazy"
                                    className="w-[35%] brightness-0 invert"
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

export default TextilesBrandOverview
