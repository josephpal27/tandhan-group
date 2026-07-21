"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import "swiper/css";

const SectorsGallery = ({gallery}) => {

    const [featuredIndex, setFeaturedIndex] = useState(1);

    return (
        <section className="px-0 pt-[1.5rem] sm:pt-[2.5rem] lg:pt-[0.2rem] xl:pt-[0.5rem] 2xl:pt-[1rem] overflow-hidden">

            {/* Top */}
            <div className="px-[1rem] sm:px-[5%] lg:px-[7%]">
                <motion.h5
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Gallery
                </motion.h5>
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[50%]">
                    {gallery.desc}
                </p>
            </div>

            {/* Bottom */}
            <div className="mt-[2.5rem] sm:mt-[3rem] lg:mt-[4.7rem] xl:mt-[5.5rem] 2xl:mt-[6rem]">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={5}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    speed={700}
                    navigation={{
                        prevEl: '#gallery-prev',
                        nextEl: '#gallery-next',
                    }}
                    pagination={{
                        el: '#team-pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 3, // for mobile
                        },
                        640: {
                            slidesPerView: 4, // tablet
                        },
                        991: {
                            slidesPerView: 5, // tablet and up
                            spaceBetween: 0,
                        },
                    }}
                    onSlideChange={(swiper) => {
                        setFeaturedIndex(
                            (swiper.realIndex + 1) % gallery.images.length
                        );
                    }}
                    id="gallery-swiper"
                >
                    {gallery.images.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={featuredIndex === index ? "featured-slide" : ""}>
                                <div className={`gallery-card ${featuredIndex === index ? "featured" : ""}`}>
                                    <img src={item.image} alt={`Gallery Image ${index + 1}`} loading="lazy" className="w-full" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* Pagination & Navigation */}
                <div className="flex justify-end items-center mt-[2.5rem] lg:mt-[1.2rem] pr-[1rem] sm:pr-[5%] lg:pr-[7%]">
                    <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " id="gallery-prev">
                        ‹
                    </button>
                    <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-l-[2px]
                        " id="gallery-next">
                        ›
                    </button>
                </div>

            </div>

        </section>
    )
}

export default SectorsGallery
