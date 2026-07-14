"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const featuresData = [
    {
        id: 1,
        title: "Manufacturing <br/> at Scale",
        desc: "Built in the East, trusted by the world. From tarpaulins and denim to power solutions, our manufacturing strength delivers quality, reliability, and scale across global markets.",
        icon: "/images/icons/industry.png",
    },
    {
        id: 2,
        title: "Global Ambition, <br/> Eastern Roots",
        desc: "Rooted in Kolkata, built for the world. What began in Eastern India has grown into a global enterprise with a presence across continents and expanding horizons.",
        icon: "/images/icons/market.png",
    },
    {
        id: 3,
        title: "Responsible <br/> Growth",
        desc: "Growth with purpose at its core. From resource conservation to responsible manufacturing, every step forward is designed to create lasting value for people and the planet.",
        icon: "/images/icons/sustainable.png",
    },
    {
        id: 4,
        title: "Diversified <br/> Resilience",
        desc: "Four industries. One group. A diversified portfolio built to adapt, evolve, and create enduring value through changing markets and business cycles.",
        icon: "/images/icons/stack.png",
    },
];

const FeatureCard = ({ feature }) => (
    <div className="w-full bg-white p-[1.2rem] lg:p-[2rem] border-b-[6px] border-primary group shadow-[rgba(0,0,0,0.15)_0px_3px_8px] h-full">
        <img
            src={feature.icon}
            alt={feature.title}
            loading="lazy"
            className="w-[20%]"
        />
        <span className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] text-black font-semibold block mt-[1rem] leading-[1.2]" dangerouslySetInnerHTML={{ __html: feature.title }} />

        <p className="text-gray-900 mt-[0.5rem] text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
            {feature.desc}
        </p>
    </div>
);

const HomeFeatures = () => {
    const swiperRef = useRef(null);

    return (
        <section className="mt-[1.5rem] lg:mt-[-3rem] xl:mt-[-4rem] 2xl:mt-[-5rem] relative z-50">
            {/* Mobile / Tablet: Swiper */}
            <div className="lg:hidden">
                <Swiper
                    modules={[Pagination]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={1}
                    spaceBetween={16}
                    pagination={{ clickable: true }}
                    id="home-features-swiper"
                    className="!pb-[2.7rem]"
                >
                    {featuresData.map((feature) => (
                        <SwiperSlide key={feature.id}>
                            <FeatureCard feature={feature} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop: original flex grid */}
            <div className="hidden lg:flex justify-between flex-wrap">
                {featuresData.map((feature) => (
                    <div key={feature.id} className="w-[25%] mb-0">
                        <FeatureCard feature={feature} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeFeatures;