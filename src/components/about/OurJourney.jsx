"use client";

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const journeyData = [
    {
        id: 1,
        year: 2001,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 2,
        year: 2002,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 3,
        year: 2003,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 4,
        year: 2004,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 5,
        year: 2005,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
]

const OurJourney = () => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const [arrowStep, setArrowStep] = useState(44);

    useEffect(() => {
        const updateStep = () => {
            const width = window.innerWidth;
            if (width >= 1536) {
                setArrowStep(44); // 2xl
            } else if (width >= 1280) {
                setArrowStep(41); // xl
            } else if (width >= 1024) {
                setArrowStep(39); // lg
            } else {
                setArrowStep(38); // md & below
            }
        };

        updateStep();
        window.addEventListener("resize", updateStep);

        return () => window.removeEventListener("resize", updateStep);
    }, []);

    return (
        <section className="
            pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap
            pr-0
        ">

            {/* Left Content */}
            <div className="
                w-[27%]
                pt-[4rem]
                pr-[2rem]
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
                    Lorem ipsum dolor sit amet, adipisic elit. Id ut vitae dolorum suscipit facilis, sint nisi nulla consequatur laudantium quaerat.
                </p>

                {/* Controller */}
                <div className="
                    flex gap-[2rem] sm:gap-[1.8rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-[2rem]
                    mt-[2.5rem] sm:mt-[2rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                ">

                    {/* Arrow */}
                    <div>
                        <FaArrowAltCircleRight
                            className="
                                text-[2.5rem] sm:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem]
                                cursor-pointer text-primary hover:text-[#000073] transition duration-300
                                mt-[5px]
                            "
                            style={{
                                transform: `translateY(${activeIndex * arrowStep}px)`
                            }}
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>

                    {/* Years Slider */}
                    <div>
                        <Swiper
                            direction="vertical"
                            slidesPerView={3}
                            spaceBetween={5}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {journeyData.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        onClick={() => {
                                            swiperRef.current?.slideToLoop(index);
                                        }}
                                        className={`
                                            cursor-pointer text-center transition-all duration-300
                                            ${activeIndex === index
                                                ? "text-primary font-bold text-[2.2rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.2rem]"
                                                : "text-gray-400 text-[1.6rem] sm:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem]"
                                            }
                                        `}
                                    >
                                        {item.year}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>

            {/* Right Slider */}
            <motion.div 
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-[73%] overflow-hidden"
            >
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={5}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                >
                    {journeyData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`
                                h-full bg-[#e0e1ee] flex flex-col justify-end p-[1.3rem] sm:p-[1.2rem] lg:p-[1.1rem] xl:p-[1.2rem] 2xl:p-[1.3rem]
                                transition-all duration-300
                                ${activeIndex === index
                                    ? "bg-primary text-white"
                                    : ""
                                }
                                
                            `}>
                                <span className={`
                                    text-[3.4rem] sm:text-[3rem] lg:text-[3rem] xl:text-[3.2rem] 2xl:text-[3.4rem]
                                    font-bold block
                                    mt-[2rem] sm:mt-[1.8rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                                `}>
                                    {item.year}
                                </span>

                                <span className={`
                                    block
                                    text-[1.5rem] sm:text-[1.4rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-semibold
                                    mt-[0.8rem] 
                                `}>
                                    {item.title}
                                </span>

                                <p className={`
                                    mt-[0.6rem] 
                                    text-[0.95rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]
                                `}>
                                    {item.desc}
                                </p>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full mt-[2rem] sm:mt-[1.8rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    )
}

export default OurJourney
