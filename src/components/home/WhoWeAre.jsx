"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import 'swiper/css';

const aboutUsData = [
    {
        id: 1,
        title: "Who We Are",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio distinctio odit ab earum ipsum magni iste unde architecto quaerat cum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident nesciunt sint, aliquid tenetur accusantium repellendus eveniet natus est eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, minima.",
        image: "/images/who-we-are/1.avif",
    },
    {
        id: 2,
        title: "About The Founder",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio distinctio odit ab earum ipsum magni iste unde architecto quaerat cum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "/images/who-we-are/2.avif",
    },
];

const WhoWeAre = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = aboutUsData[activeIndex];

    return (
        <section className="pl-0 pt-[5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between items-center flex-wrap">

            {/* Left Image */}
            <div className="w-[48%] relative">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                <div className='bg-primary/70 w-full absolute bottom-0 z-10'>
                    <div className="flex justify-end z-20">
                        <button 
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="
                                w-[70px] sm:w-[60px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px]
                                h-[70px] sm:h-[60px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                                flex items-center justify-center bg-white hover:bg-secondary transition 
                                text-[2.2rem] sm:text-[2rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            "
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="
                                w-[70px] sm:w-[60px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px]
                                h-[70px] sm:h-[60px] lg:h-[60px] xl:h-[65px] 2xl:h-[70px]
                                flex items-center justify-center bg-white hover:bg-secondary transition 
                                text-[2.2rem] sm:text-[2rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            "
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </div>
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