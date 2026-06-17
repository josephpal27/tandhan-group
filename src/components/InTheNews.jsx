"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const newsData = [
    {
        id: 1,
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
    },
    {
        id: 2,
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
    },
    {
        id: 3,
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
    },
    {
        id: 4,
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
    },
    {
        id: 5,
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
    },
];

const InTheNews = () => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeData = newsData[activeIndex];

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="pt-[2rem] sm:pt-[2.2rem] lg:pt-[1rem] xl:pt-[1.5rem] 2xl:pt-[2rem] flex justify-between flex-wrap">

            {/* Left */}
            <div className="w-[60%]">
                <div className="
                    bg-secondary text-[2.5rem] font-semibold w-[70px] flex justify-center items-center aspect-square
                    mb-[2.5rem]
                ">
                    0{activeData.id}
                </div>
                <h6>
                    In The <br /> News
                </h6>
                <p className="mt-[0.7rem] lg:mt-[1rem] w-[50%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem.
                </p>

                {/* Slider */}
                <div className="mt-[-20rem]">
                    <Swiper
                        dir="rtl"
                        slidesPerView={2.6}
                        spaceBetween={16}
                        loop={true}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {newsData.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <SwiperSlide key={item.id}>
                                    <div
                                        dir="ltr"
                                        className="overflow-hidden h-[85vh] flex items-end cursor-pointer"
                                        onClick={() => swiperRef.current?.slideToLoop(index)}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
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
            <div className="w-[35%] flex flex-col justify-end">
                <span className="
                    text-[2rem] font-semibold
                ">
                    {activeData.title}
                </span>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, quas.
                </p>

                {/* Next Btn */}
                <button className="
                    mt-[4rem]
                    w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                    text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    active:scale-[0.85]
                " id="news-next" onClick={handleNext}>
                    ›
                </button>
            </div>

        </section>
    )
}

export default InTheNews
