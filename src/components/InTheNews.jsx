"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const newsData = [
    {
        id: 1,
        number: "01",
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
        link: "#",
    },
    {
        id: 2,
        number: "02",
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
        link: "#",
    },
    {
        id: 3,
        number: "03",
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
        link: "#",
    },
    {
        id: 4,
        number: "04",
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 4",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
        link: "#",
    },
    {
        id: 5,
        number: "05",
        img: "/images/sectors/protective-solutions/news/1.png",
        title: "Lorem Ipsum 5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.",
        link: "#",
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
        <section className="pt-[2rem] sm:pt-[2.2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap">

            {/* Left */}
            <div className="w-[60%]">
                <div>
                    01
                </div>
                <h6>
                    In The <br /> News
                </h6>

                {/* Slider */}
                <div>
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
                                        className="overflow-hidden h-[80vh] flex items-end cursor-pointer"
                                        onClick={() => swiperRef.current?.slideToLoop(index)}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className={`
                                            w-full object-cover transition-all duration-500 ease-in-out 
                                            ${isActive ? "h-[550px]" : "h-[280px]"}
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
            <div className="w-[35%]">
                <span>
                    {activeData.title}
                </span>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, quas.
                </p>

                {/* Next Btn */}
                <button className="
                    w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                    text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                " id="news-next" onClick={handleNext}>
                    ›
                </button>
            </div>

        </section>
    )
}

export default InTheNews
