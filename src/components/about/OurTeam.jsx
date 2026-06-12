"use client";

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
        name: "John Doe",
        position: "CEO",
        image: "/images/founder.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam officiis.",
    },
    {
        id: 2,
        name: "John Doe",
        position: "Founder",
        image: "/images/founder.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore.",
    },
    {
        id: 3,
        name: "John Doe",
        position: "Partner",
        image: "/images/founder.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus.",
    },
    {
        id: 4,
        name: "John Doe",
        position: "Developer",
        image: "/images/founder.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore.",
    },
    {
        id: 5,
        name: "John Doe",
        position: "Designer",
        image: "/images/founder.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus.",
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
        <section className="pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[5.5rem] xl:pt-[6rem] 2xl:pt-[6.5rem] flex justify-between flex-wrap mb-[6rem] sm:mb-[3rem] lg:mb-[5rem] xl:mb-[5.5rem] 2xl:mb-[6rem]">

            {/* Left Content */}
            <div className="w-full lg:w-[35%]">
                <motion.h5
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our <br /> Team
                </motion.h5>
                <p className={`
                    mt-[0.7rem] lg:mt-[1.2rem]
                    ${descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"} transition-all duration-300
                `}>
                    {teamData[activeIndex]?.desc}
                </p>
            </div>

            {/* Slider */}
            <div className="w-full lg:w-[60%] relative pl-[1rem] pt-[1rem]">
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
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={700}
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
                                        block mt-[1.2rem] text-[1.5rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold
                                        ${isActive ? "text-black" : "text-transparent"}
                                    `}>
                                        {item.name}
                                    </span>
                                    <p className={`
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
                <div className="absolute bottom-0 right-0 flex justify-between items-center z-[999] w-[45%]">
                    <div>
                        <div id="team-pagination" className="flex items-center gap-[0.4rem]" />
                    </div>
                    <div className="flex items-center gap-[1rem]">
                        <button className="
                            w-[40px] sm:w-[45px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]
                            h-[40px] sm:h-[45px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]
                            flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        " id="team-prev">
                            ‹
                        </button>
                        <button className="
                            w-[40px] sm:w-[45px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]
                            h-[40px] sm:h-[45px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]
                            flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                            text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        " id="team-next">
                            ›
                        </button>
                    </div>
                </div>

                {/* Blue Card */}
                <div className="absolute top-0 left-0 w-[34.7%] h-full border-primary border-[2px] shadow-[0px_4px_12px_rgba(26,43,168,0.5)] rounded-[5px] z-50"></div>

            </div>

        </section>
    )
}

export default OurTeam
