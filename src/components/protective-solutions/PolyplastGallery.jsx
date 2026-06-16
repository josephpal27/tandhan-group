"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const GalleryData = [
    { id: 1, image: "/images/sectors/protective-solutions/gallery/1.png", },
    { id: 2, image: "/images/sectors/protective-solutions/gallery/1.png", },
    { id: 3, image: "/images/sectors/protective-solutions/gallery/1.png", },
    { id: 4, image: "/images/sectors/protective-solutions/gallery/1.png", },
    { id: 5, image: "/images/sectors/protective-solutions/gallery/1.png", },
]

const PolyplastGallery = () => {

    const [featuredIndex, setFeaturedIndex] = useState(1);

    return (
        <section className="px-0 pt-[3rem] sm:pt-[1.5rem] lg:pt-[1rem] xl:pt-[1.5rem] 2xl:pt-[2rem] overflow-hidden">

            {/* Top */}
            <div className="px-[1rem] sm:px-[5%] lg:px-[7%]">
                <h5>
                    Gallery
                </h5>
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-[50%]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident magni.
                </p>
            </div>

            {/* Bottom */}
            <div className="mt-[6rem]">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    slidesPerView={4}
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
                            slidesPerView: 2, // for mobile
                        },
                        640: {
                            slidesPerView: 3, // tablet
                        },
                        991: {
                            slidesPerView: 4, // tablet and up
                            spaceBetween: 0,
                        },
                    }}
                    onSlideChange={(swiper) => {
                        setFeaturedIndex(
                            (swiper.realIndex + 1) % GalleryData.length
                        );
                    }}
                    id="gallery-swiper"
                >
                    {GalleryData.map((item, index) => {
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
                <div className="flex justify-end items-center mt-[1rem] pr-[1rem] sm:pr-[5%] lg:pr-[7%]">
                    <button className="
                            w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        " id="gallery-prev">
                        ‹
                    </button>
                    <button className="
                            w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                        " id="gallery-next">
                        ›
                    </button>
                </div>

            </div>

        </section>
    )
}

export default PolyplastGallery
