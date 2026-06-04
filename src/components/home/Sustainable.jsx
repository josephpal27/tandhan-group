"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";

const sustainableData = [
    {
        id: 1,
        title: "Sustainability",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam fuga magnam odit atque. Dolores, labore? Cum at non tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas consequatur impedit dolorem eaque deleniti ex nobis voluptatem quisquam recusandae.",
        image: "/images/sustainable-bg.avif",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam fuga magnam odit atque. Dolores, labore? Cum at non tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas consequatur impedit dolorem eaque deleniti ex nobis voluptatem quisquam recusandae.",
        image: "/images/sustainable-bg-2.avif",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit laboriosam fuga magnam odit atque. Dolores, labore? Cum at non tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptas consequatur impedit dolorem eaque deleniti ex nobis voluptatem quisquam recusandae.",
        image: "/images/sustainable-bg.avif",
    },
]

const Sustainable = () => {
    const swiperRef = useRef(null);

    return (
        <section className="
            px-0
            mt-[4rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
            relative
        ">
            {/* Prev Button */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                    bg-white/20 hover:bg-white/40 backdrop-blur-sm
                    text-white rounded-full p-2 transition-all duration-300"
            >
                <MdChevronLeft size={33} />
            </button>

            {/* Next Button */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                    bg-white/20 hover:bg-white/40 backdrop-blur-sm
                    text-white rounded-full p-2 transition-all duration-300"
            >
                <MdChevronRight size={33} />
            </button>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                centeredSlides={false}
                loop={true}
                grabCursor={true}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {sustainableData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                        <div className="
                            absolute w-full h-full left-0 top-0 px-[1rem] sm:px-[5%] lg:px-[7%]
                            py-[4rem]
                            flex flex-col justify-center text-white
                        ">
                            <motion.h5
                                variants={headingVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {item.title}
                            </motion.h5>
                            <p className="mt-[1.5rem] w-[50%]">
                                {item.desc}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style>{`
                .swiper-pagination-bullet {
                    background: white;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                }
                .swiper-pagination-bullet-active {
                    background: white;
                    opacity: 1;
                    width: 28px;
                    border-radius: 4px;
                    transition: width 0.3s ease;
                }
            `}</style>

        </section>
    )
}

export default Sustainable