'use client';

import { useRef } from "react";
import { globalPresenceData } from "@/data/globalPresenceData";
import { useGlobalPresence } from "@/contexts/GlobalPresenceContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FlagCard = ({ flag, isActive, onClick }) => (
    <div onClick={onClick} className="group cursor-pointer">
        <img
            src={flag.flag}
            alt="Flag"
            loading="lazy"
            className="w-full rounded-[10px] group-hover:translate-y-[-6px] transition duration-300"
        />
        <p className="text-center mt-[0.6rem] lg:mt-[0.8rem] font-semibold text-primary">
            <span
                className={`
                    inline-block pb-[0.15rem] border-b-2 transition-colors duration-300
                    ${isActive ? "border-primary" : "border-transparent"}
                `}
            >
                {flag.country}
            </span>
        </p>
    </div>
);

const Flags = () => {
    const { activeIndex, setActiveIndex } = useGlobalPresence();
    const swiperRef = useRef(null);

    return (
        <section className="pt-[3rem] sm:pt-[3.5rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem] overflow-hidden">

            {/* Mobile / Tablet: Swiper */}
            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    loop={true}
                    speed={900}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    id="flags-swiper"
                    className="!pb-[3rem] !overflow-visible"
                >
                    {globalPresenceData.map((flag, index) => (
                        <SwiperSlide key={flag.id ?? index}>
                            <FlagCard
                                flag={flag}
                                isActive={activeIndex === index}
                                onClick={() => setActiveIndex(index)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop: Original Grid */}
            <div className="hidden lg:grid lg:grid-cols-7 gap-[2.4rem] xl:gap-[2.7rem] 2xl:gap-[3rem]">
                {globalPresenceData.map((flag, index) => (
                    <FlagCard
                        key={flag.id ?? index}
                        flag={flag}
                        isActive={activeIndex === index}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

        </section>
    );
};

export default Flags;