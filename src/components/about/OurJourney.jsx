"use client";

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { FaArrowAltCircleRight } from "react-icons/fa";

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
                <h3>
                    Our <br /> Journey
                </h3>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet, adipisic elit. Id ut vitae dolorum suscipit facilis, sint nisi nulla consequatur laudantium quaerat.
                </p>

                {/* Controller */}
                <div className="flex gap-[2rem] mt-[2.5rem]">
                    <div>
                        <FaArrowAltCircleRight
                            className="text-[2.5rem] cursor-pointer text-primary hover:text-[#000073] transition duration-150 hover:scale-105 active:scale-90 mt-[0.3rem]"
                            onClick={() => swiperRef.current?.slideNext()}
                        />
                    </div>
                    <div>
                        {/* Years Slider */}
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
                                                ? "text-primary font-bold text-[2.2rem]"
                                                : "text-gray-400 text-[1.6rem]"
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
            <div className="
                w-[73%] overflow-hidden
            ">
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
                                h-full bg-[#e0e1ee] flex flex-col justify-end p-[1.3rem]
                                transition-all duration-300
                                ${activeIndex === index
                                    ? "bg-primary text-white"
                                    : ""
                                }
                                
                            `}>
                                <span className={`
                                    text-[3.4rem] 
                                    font-bold block
                                    mt-[2rem]
                                `}>
                                    {item.year}
                                </span>

                                <span className={`
                                    block
                                    text-[1.5rem] font-semibold
                                    mt-[0.8rem]
                                `}>
                                    {item.title}
                                </span>

                                <p className={`
                                    mt-[0.6rem] 
                                    text-[0.95rem]
                                `}>
                                    {item.desc}
                                </p>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full mt-[2rem]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default OurJourney
