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
        title: "The Beginning",
        desc: `
            <b>1994 | Jalan Sarees Pvt. Ltd. (India)</b>
            <p>Laid the foundation for Tandhan's entrepreneurial journey.</p>
            <b>2001 | Tandhan Fashion Pvt. Ltd. (India)</b>
            <p>Expanded into textiles, strengthening the Group's manufacturing footprint.</p>
            <b>2002 | San Taing Kyaw Co. Ltd. (Myanmar)</b>
            <p>Entered Myanmar, marking Tandhan's first international venture.</p>
            <b>2007 | FMJ Saree Pvt. Ltd. (India)</b>
            <p>Expanded the textile business, strengthening market presence.</p>
        `,
        image: "/images/journey/1.jpg",
    },
    {
        id: 2,
        title: "Diversification Begins",
        desc: `
            <b>2017 | NX Hotel Pvt. Ltd. (India)</b>
            <p>Diversified into hospitality, broadening the Group's portfolio.</p>
            <b>2018 | Tandhan Polyplast Ltd. (India)</b>
            <p>Entered protective solutions through advanced manufacturing.</p>
            <b>2018 | Tandhan Power Technologies Pvt. Ltd. (India)</b>
            <p>Strengthened global trade and international sourcing capabilities.</p>
            <b>2018 | Dhaka Power Traders (Bangladesh)</b>
            <p>Entered the power solutions sector with operations in Bangladesh.</p>
        `,
        image: "/images/journey/1.jpg",
    },
    {
        id: 3,
        title: "Expanding Beyond Borders",
        desc: `
            <b>2022 | Global Power Traders (Sudan)</b>
            <p>Expanded the Group's energy business into Sudan.</p>
            <b>2022 | Power Global General Trading L.L.C. (UAE)</b>
            <p>Established a strategic base in the Middle East.</p>
            <b>2023 | Tandhan Cotton Mills Pvt. Ltd. (India)</b>
            <p>Strengthened textile integration with expanded manufacturing.</p>
            <b>2023 | Sustainable Global Power Tech Ltd. (Nigeria)</b>
            <p>Expanded renewable energy operations into West Africa.</p>
            <b>2023 | Rainbow Power Solutions Pty. Ltd. (South Africa)</b>
            <p>Strengthened the Group's presence in Southern Africa.</p>
            <b>2023 | Simplified Solar Solutions Ltd. (Kenya)</b>
            <p>Expanded the renewable energy footprint in East Africa.</p>
        `,
        image: "/images/journey/1.jpg",
    },
    {
        id: 4,
        title: "Strengthening Global Presence",
        desc: `
            <b>2024 | Paktika Ahmadi Trading Co. Ltd. (Afghanistan)</b>
            <p>Expanded into Afghanistan, strengthening frontier market presence.</p>
            <b>2024 | Unisolar Industries Ltd. (Zambia)</b>
            <p>Extended the Group's renewable energy presence in Africa.</p>
            <b>2025 | Shin Thit Kyaw Co. Ltd. (Myanmar)</b>
            <p>Reinforced Tandhan's long-term commitment to Myanmar.</p>
            <b>2025 | Paktika Ahmadi – Tandhan Power Authorized Service Centre (Afghanistan)</b>
            <p>Strengthened customer support with a dedicated service centre.</p>
        `,
        image: "/images/journey/1.jpg",
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
            pt-[3rem] sm:pt-[3.3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap
            pr-0
        ">

            {/* Left Content */}
            <div className="
                w-full lg:w-[35%]
                pt-0 lg:pt-[4rem]
                pr-[1rem] lg:pr-[2rem]
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
                    gap-[2rem] sm:gap-[1.8rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-[2rem]
                    mt-[2.5rem] sm:mt-[2rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                    hidden lg:flex
                ">

                    {/* Arrow */}
                    <div>
                        <FaArrowAltCircleRight
                            className="
                                text-[2.5rem] sm:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem]
                                cursor-pointer text-primary hover:text-secondary transition duration-300
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
                                            cursor-pointer leading-[1.1] transition-all duration-300
                                            mb-[1.2rem]
                                            text-[1.6rem] sm:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem]
                                            ${activeIndex === index
                                                ? "text-primary font-bold"
                                                : "text-gray-400"
                                            }
                                        `}
                                    >
                                        {item.title}
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
                className="w-full lg:w-[62%] overflow-hidden mt-[1.8rem] lg:mt-0"
            >
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1.2}
                    spaceBetween={5}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2, // for mobile
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2.2, // tablet
                            spaceBetween: 15,
                        },
                        991: {
                            slidesPerView: 1.2, // tablet and up
                            spaceBetween: 5,
                        },
                    }}
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
                                journey-slides
                                h-full bg-[#f2f3f9] flex flex-col justify-end p-[0.85rem] sm:p-[1rem] lg:p-[1.1rem] xl:p-[1.2rem] 2xl:p-[1.3rem]
                                transition-all duration-300
                                ${activeIndex === index
                                    ? "bg-primary text-white"
                                    : ""
                                }
                                
                            `}>
                                {/* <span className={`
                                    block
                                    text-[1.3rem] sm:text-[1.4rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-semibold
                                    mt-[0.4rem] lg:mt-[0.8rem] 
                                `}>
                                    {item.title}
                                </span> */}

                                <div className="" dangerouslySetInnerHTML={{__html: item.desc}} />

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full mt-[1rem] sm:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section >
    )
}

export default OurJourney
