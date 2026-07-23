"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamData = [
    {
        id: 1,
        name: "Amit Jalan",
        position: "Director",
        image: "/images/team/amit-jalan.avif",
    },
    {
        id: 2,
        name: "Ankit Jalan",
        position: "Director",
        image: "/images/team/ankit-jalan.avif",
    },
    {
        id: 3,
        name: "Anuj Jalan",
        position: "Director",
        image: "/images/team/anuj-jalan.avif",
    },
    {
        id: 4,
        name: "Prachi Jalan",
        position: "Director",
        image: "/images/team/prachi-jalan.avif",
    },
    {
        id: 5,
        name: "Divyanshi Jalan",
        position: "Director",
        image: "/images/team/divyanshi-jalan.avif",
    },
    {
        id: 6,
        name: "Daivik Jalan",
        position: "Director",
        image: "/images/team/daivik-jalan.avif",
    },
    {
        id: 7,
        name: "Sandeep Dahiya",
        position: "CEO, Tandhan Denim",
        image: "/images/team/sandeep-dahiya.avif",
    },
    {
        id: 8,
        name: "Harpreet Singh Chadha",
        position: "CEO, Tandhan Power",
        image: "/images/team/harpreet-singh.avif",
    },
    
]

const OurTeam = () => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [descVisible, setDescVisible] = useState(true);

    const handleSlideChange = (swiper) => {
        setDescVisible(false);
        setTimeout(() => {
            setActiveIndex(swiper.realIndex);
            setDescVisible(true);
        }, 300);
    };

    return (
        <section className="pt-[3rem] sm:pt-[3.2rem] lg:pt-[5.5rem] xl:pt-[6rem] 2xl:pt-[6.5rem] flex justify-between flex-wrap mb-[3.5rem] sm:mb-[4.5rem] lg:mb-[5rem] xl:mb-[5.5rem] 2xl:mb-[6rem]">

            {/* Left Content */}
            <div className="w-full lg:w-[30%]">
                <motion.h6
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our <br /> Leaders
                </motion.h6>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Meet the leaders shaping Tandhan's future through purpose, experience, and vision.
                </p>
                <Link href="/" className="
                    mt-[1.3rem] lg:mt-[2rem] block w-max bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                    py-[0.4rem] px-[1.4rem]
                ">
                    View More
                </Link>

            </div>

            {/* Slider */}
            <div className="w-full lg:w-[65%] relative pl-[0.6rem] lg:pl-[1rem] pt-[0.6rem] lg:pt-[1rem] mt-[1.8rem] lg:mt-0">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    navigation={{
                        prevEl: '#team-prev',
                        nextEl: '#team-next',
                    }}
                    pagination={{
                        el: '#team-pagination',
                        clickable: true,
                    }}
                    slidesPerView={2}
                    spaceBetween={25}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={700}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2, // for mobile
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2, // tablet
                            spaceBetween: 20,
                        },
                        991: {
                            slidesPerView: 2, // tablet and up
                            spaceBetween: 25,
                        },
                    }}
                    className="w-full"
                >
                    {teamData.map((item, index) => {

                        const isActive = index === activeIndex;

                        return (
                            <SwiperSlide key={index}>
                                <div className="relative w-full overflow-hidden pb-[1.3rem]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="w-full"
                                    />
                                    <span className={`
                                        block mt-[1.2rem] text-[1.2rem] sm:text-[1.25rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold
                                        ${isActive ? "text-black" : "text-transparent"}
                                    `}>
                                        {item.name}
                                    </span>
                                    <p className={`
                                        text-[0.9rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                        ${isActive ? "text-black" : "text-transparent"}
                                    `}>
                                        {item.position}
                                    </p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* Pagination & Navigation */}
                <div className="absolute bottom-0 right-0 flex justify-end lg:justify-between items-center z-[999] w-[47%]">
                    <div className="hidden lg:block">
                        <div id="team-pagination" className="flex items-center gap-[0.4rem]" />
                    </div>
                    <div className="flex items-center">
                        <button className="
                            w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary 
                            border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                            border-r-[1.5px] sm:border-r-[1.5px] lg:border-r-[1.5px] xl:border-r-[1.5px] 2xl:border-r-[2px]
                        " id="team-prev">
                            ‹
                        </button> 
                        <button className="
                            w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary 
                            border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                            border-l-[1.5px] sm:border-l-[1.5px] lg:border-l-[1.5px] xl:border-l-[1.5px] 2xl:border-l-[2px]
                        " id="team-next">
                            ›
                        </button>
                    </div>
                </div>

                {/* Blue Card */}
                <div className="absolute top-0 left-0 w-[85.7%] lg:w-[51.35%] h-full border-primary border-[2px] shadow-[0px_4px_12px_rgba(0,0,0,0.5)] rounded-[5px] z-50"></div>

            </div>

        </section>
    )
}

export default OurTeam
