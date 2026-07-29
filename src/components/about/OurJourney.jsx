"use client";

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
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
            pt-[3rem] sm:pt-[3.3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem] flex justify-between flex-wrap
            px-0
        ">

            {/* Left Content */}
            <div className="
                w-full lg:w-[30%]
            ">
                <div className="
                    pl-[1rem] sm:pl-[2rem] lg:pl-[3.6rem] xl:pl-[3.8rem] 2xl:pl-[4rem]
                    mt-[0] lg:mt-[0.3rem] xl:mt-[0.4rem] 2xl:mt-[0.5rem]
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
                        Lorem ipsum dolor sit amet, adipisic elit. Id ut vitae dolorum suscipit facilis sint nisi.
                    </p>
                </div>

                {/* Tabs */}
                <div className="mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
                    {journeyData.map((item, index) => {
                        const isActiveTab = activeTab === index;
                        return (
                            <div key={index} onClick={() => handleTabClick(index)} className={`
                                border-gray-200 border-b-[1.7px] last:border-none cursor-pointer
                                py-[0.8rem] sm:py-[1rem] lg:py-[0.9rem] xl:py-[1.1rem] 2xl:py-[1.3rem]
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
                className="w-full lg:w-[65%] overflow-hidden mt-[1.2rem] lg:mt-0"
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
                            modules={[Navigation, FreeMode]}
                            slidesPerView={3.2}
                            spaceBetween={0}
                            grabCursor={true}
                            freeMode={{
                                enabled: true,
                                momentum: true,
                                momentumRatio: 1,
                                momentumVelocityRatio: 1,
                                sticky: false,
                            }}
                            loop={activeContent.length > 2}
                            breakpoints={{
                                0: { slidesPerView: 1.2, spaceBetween: 13 },
                                640: { slidesPerView: 2.2, spaceBetween: 15 },
                                991: { slidesPerView: 3.2, spaceBetween: 0 },
                            }}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        >
                            {activeContent.map((entry, index) => {
                                const isActive = activeSlide === index;
                                return (
                                    <SwiperSlide key={`${activeTab}-${index}`}>
                                        <div
                                            onMouseEnter={() => setActiveSlide(index)}
                                            className={`
                                                journey-slides group
                                                h-full flex flex-col justify-end 
                                                p-[1rem] sm:p-[1.2rem] lg:p-[1.1rem] xl:p-[1.2rem] 2xl:p-[1.3rem] 
                                                !pb-0
                                                border-gray-200 border-r-[2px]
                                                transition-all duration-300
                                                ${isActive ? "bg-primary text-[#fff]" : "bg-[#fff] text-primary"}
                                            `}
                                        >
                                            {/* Year */}
                                            <span className="text-[2rem] sm:text-[2.2rem] lg:text-[2.6rem] xl:text-[2.8rem] 2xl:text-[3rem] font-bold mt-[1rem] lg:mt-[2rem]">
                                                {entry.year}
                                            </span>

                                            {/* Title */}
                                            <span className="block leading-[1.3] text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold mt-[1rem] lg:mt-[1.7rem] mb-[0.5rem] lg:mb-[0.7rem]">
                                                {entry.title}
                                            </span>

                                            <p>{entry.desc}</p>

                                            <img
                                                src={journeyData[activeTab].image}
                                                alt={entry.title}
                                                loading="lazy"
                                                className={`
                                                    w-full mt-[2.5rem] sm:mt-[3rem] lg:mt-[3.6rem] xl:mt-[3.8rem] 2xl:mt-[4rem]
                                                    transition duration-500
                                                    ${isActive
                                                        ? "translate-y-[-1rem] sm:translate-y-[-1.2rem] lg:translate-y-[-1.1rem] xl:translate-y-[-1.2rem] 2xl:translate-y-[-1.3rem]"
                                                        : ""}
                                                `}
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    )
}

export default OurJourney