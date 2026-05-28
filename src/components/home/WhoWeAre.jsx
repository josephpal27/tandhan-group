"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';

const aboutUsData = [
    {
        id: 1,
        title: "Who We Are",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio distinctio odit ab earum ipsum magni iste unde architecto quaerat cum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident nesciunt sint, aliquid tenetur accusantium repellendus eveniet natus est eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima.",
        image: "/images/demo.avif",
    },
    {
        id: 2,
        title: "About The Founder",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio distinctio odit ab earum ipsum magni iste unde architecto quaerat cum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/images/demo.avif",
    },
];

const WhoWeAre = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = aboutUsData[activeIndex];

    return (
        <section className="pl-0 pt-[5rem] flex justify-between items-center flex-wrap">

            {/* Left Image */}
            <div className="w-[48%] relative">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    loop={true}
                    className="w-full"
                >
                    {aboutUsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Arrows */}
                <div className="absolute bottom-0 right-0 z-10 flex">
                    <button
                        ref={prevRef}
                        className="
                            w-[70px] h-[70px] flex items-center justify-center bg-white hover:bg-gray-100 transition 
                            text-[2rem]
                        "
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                    <button
                        ref={nextRef}
                        className="
                            w-[70px] h-[70px] flex items-center justify-center bg-white hover:bg-gray-100 transition 
                            text-[2rem]
                        "
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-[47%]">
                <h2>{activeItem.title}</h2>
                <p className="mt-[1.5rem]">{activeItem.desc}</p>
            </div>

        </section>
    );
};

export default WhoWeAre;