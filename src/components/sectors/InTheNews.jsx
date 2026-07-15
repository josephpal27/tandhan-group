"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import "swiper/css";

const InTheNews = ({ news }) => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeData = news[activeIndex];

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="pt-[3rem] sm:pt-[3.5rem] lg:pt-[1rem] xl:pt-[1.5rem] 2xl:pt-[2rem] flex justify-between flex-wrap">

            {/* Left */}
            <div className="w-full lg:w-[60%]">
                <div className="
                    bg-primary text-[1.2rem] sm:text-[1.4rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem] font-semibold w-[40px] sm:w-[45px] lg:w-[57px] xl:w-[62px] 2xl:w-[70px] flex justify-center items-center aspect-square
                    mb-[1.5rem] sm:mb-[1.7rem] lg:mb-[2.1rem] xl:mb-[2.3rem] 2xl:mb-[2.5rem] text-white
                ">
                    0{activeData.id}
                </div>
                <motion.h6
                    className="relative z-50"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    In The <br /> News
                </motion.h6>
                <div className="relative z-50">
                    <p className="mt-[0.7rem] lg:mt-[1rem] w-full lg:w-[50%] hidden lg:block">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem.
                    </p>
                </div>

                {/* Slider */}
                <div className="mt-[-32rem] sm:mt-[-26rem] lg:mt-[-15.8rem] xl:mt-[-18rem] 2xl:mt-[-20rem]">
                    <Swiper
                        dir="rtl"
                        slidesPerView={2.6}
                        spaceBetween={16}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="!z-0"
                        breakpoints={{
                        0: { spaceBetween: 10, },
                        640: { spaceBetween: 15, },
                        991: { spaceBetween: 16, },
                    }}
                    >
                        {news.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <SwiperSlide key={item.id}>
                                    <div
                                        dir="ltr"
                                        className="overflow-hidden h-[85vh] flex items-end cursor-pointer"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            onClick={() => swiperRef.current?.slideToLoop(index)}
                                            className={`
                                            w-full object-cover transition-all duration-500 ease-in-out 
                                            ${isActive ? "aspect-[9/17]" : "aspect-[1/0.9]"}
                                        `}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>

            {/* Right */}
            <div className="w-full lg:w-[35%] flex flex-col justify-end mt-[1rem] lg:mt-0">
                <span className="
                    text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold
                ">
                    {activeData.title}
                </span>
                <p className="mt-[0.3rem] lg:mt-[1.2rem]">
                    {activeData.description}
                </p>

                {/* Next Btn */}
                <button className="
                    mt-[0.5rem] sm:mt-[1rem] lg:mt-[3.5rem] xl:mt-[3.8rem] 2xl:mt-[4rem]
                    w-[45px] sm:w-[50px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[45px] sm:h-[50px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                    text-[2.1rem] sm:text-[2.5rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    active:scale-[0.85] border-primary border-[2px] lg:border-[3px] border-r-[2px]
                    ml-auto lg:ml-0
                " id="news-next" onClick={handleNext}>
                    ›
                </button>
            </div>

        </section>
    )
}

export default InTheNews
