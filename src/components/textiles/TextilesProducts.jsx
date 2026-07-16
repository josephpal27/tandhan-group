"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const textilesProductsData = [
    {
        id: 1,
        image: "/images/sectors/textiles/products/1.png",
    },
    {
        id: 2,
        image: "/images/sectors/textiles/products/1.png",
    },
]

const TextilesProducts = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            pb-[2rem] sm:pb-[3rem] lg:pb-[3rem] xl:pb-[3.5rem] 2xl:pb-[4rem]
            flex justify-end relative
        ">
            {/* Slider */}
            <div className="w-[42%] absolute top-[1rem] left-[7%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)]">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    className="w-full"
                >
                    {textilesProductsData.map((item) => (
                        <SwiperSlide key={item.id} className="relative">
                            <img
                                src={item.image}
                                alt={`Slide ${item.id}`}
                                loading="lazy"
                                className="w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Content */}
            <div className="
                w-[80%] shadow-[0px_2px_20px_rgba(0,0,0,0.3)]
                pl-[35%]
            ">
                {/* Top */}
                <div className="pr-[3rem] py-[3.5rem]">
                    <h4>
                        Explore <br /> Our Products
                    </h4>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum dolor, vitae amet soluta sit inventore totam rerum sed laborum.
                    </p>
                    <Link href="/" className="
                        mt-[2.3rem] block w-max bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                        border-primary border-[3px]
                        py-[0.45rem] px-[1.4rem]
                    ">
                        Read More
                    </Link>
                </div>

                {/* Bottom */}
                <div className="flex justify-end">
                    <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " onClick={() => swiperRef.current?.slidePrev()}>
                        ‹
                    </button>
                    <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-l-[2px]
                        " onClick={() => swiperRef.current?.slideNext()}>
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TextilesProducts
