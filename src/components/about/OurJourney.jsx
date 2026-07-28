"use client";

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { journeyData } from "@/data/journeyData";

const OurJourney = () => {

    const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const [activeSlide, setActiveSlide] = useState(0);

    const activeContent = journeyData[activeTab].content;

    const handleTabClick = (tabIndex) => {
        if (tabIndex === activeTab) return;
        setActiveTab(tabIndex);
        setActiveSlide(0);
    };

    return (
        <section className="
            pt-[3rem] sm:pt-[3.3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap
            px-0
        ">

            {/* Left Content */}
            <div className="
                w-full lg:w-[33%]
            ">
                <div className="
                    pl-[1rem] sm:pl-[2rem] lg:pl-[3.6rem] xl:pl-[3.8rem] 2xl:pl-[4rem]
                    mt-[0] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                ">
                    <motion.h3
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Our <br /> Journey
                    </motion.h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet, adipisic elit. Id ut vitae dolorum suscipit facilis, sint nisi nulla consequatur.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
                    {journeyData.map((item, index) => {
                        const isActiveTab = activeTab === index;
                        return (
                            <div key={index} onClick={() => handleTabClick(index)} className={`
                                border-gray-200 border-b-[1.7px] last:border-none cursor-pointer
                                py-[0.8rem] sm:py-[1rem] lg:py-[1.1rem] xl:py-[1.3rem] 2xl:py-[1.5rem]
                                pl-[1rem] sm:pl-[2rem] lg:pl-[3.6rem] xl:pl-[3.8rem] 2xl:pl-[4rem]
                                pr-[1rem]
                                flex justify-between items-center
                                transition-colors duration-300
                                ${isActiveTab ? "bg-gray-100" : ""}
                            `}>
                                <span className={`
                                    text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                                    font-semibold
                                `}>
                                    {item.tab}
                                </span>
                                <FaArrowAltCircleRight className={`
                                    text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem]
                                    tarsform rotate-180
                                    ${isActiveTab ? "block" : "hidden"}
                                `} />
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Right Slider */}
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full lg:w-[62%] overflow-hidden mt-[1.2rem] lg:mt-0"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={2.2}
                            spaceBetween={20}
                            loop={activeContent.length > 2}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2, // for mobile
                                    spaceBetween: 13,
                                },
                                640: {
                                    slidesPerView: 2.2, // tablet
                                    spaceBetween: 15,
                                },
                                991: {
                                    slidesPerView: 2.2, // tablet and up
                                    spaceBetween: 20,
                                },
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(swiper) => {
                                setActiveSlide(swiper.realIndex);
                            }}
                        >
                            {activeContent.map((entry, index) => (
                                <SwiperSlide key={`${activeTab}-${index}`}>
                                    <div className={`
                                        journey-slides
                                        h-full bg-[#f2f3f9] flex flex-col justify-end p-[0.8rem] sm:p-[1rem] lg:p-[1.1rem] xl:p-[1.2rem] 2xl:p-[1.3rem]
                                        transition-all duration-300
                                        ${activeSlide === index
                                            ? "bg-primary text-white"
                                            : ""
                                        }
                                        
                                    `}>
                                        {/* Year */}
                                        <span className={`
                                            text-[2rem] sm:text-[2.2rem] lg:text-[3.1rem] xl:text-[3.3rem] 2xl:text-[3.5rem] font-bold
                                            mt-[1rem]
                                        `}>
                                            {entry.year}
                                        </span>

                                        {/* Title */}
                                        <span className={`
                                            block
                                            text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold
                                            mt-[0.4rem] lg:mt-[0.8rem] 
                                            mb-[0.3rem] lg:mb-[0.5rem]
                                        `}>
                                            {entry.title}
                                        </span>

                                        <p>
                                            {entry.desc}
                                        </p>

                                        <img
                                            src={journeyData[activeTab].image}
                                            alt={entry.title}
                                            loading="lazy"
                                            className="w-full mt-[1rem] sm:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    )
}

export default OurJourney