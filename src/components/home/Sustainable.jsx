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
        desc: "<b>Building for tomorrow begins with how we operate today</b>. Across our businesses, we are embedding responsible manufacturing, resource conservation, and operational efficiency into every stage of growth. From water recycling and renewable energy adoption to making products that sustain livelihoods, Tandhan is committed to creating long-term value while reducing its environmental footprint and strengthening the communities we serve.",
        image: "/images/sustainable-bg-2.avif",
    },
    {
        id: 2,
        title: "CSR",
        desc: "<b>Growth is meaningful only when it creates opportunities for others</b>. Through the Tandhan Foundation, we invest in education, skill development, healthcare, and community well-being. Our initiatives are designed to create lasting impact, empower future generations, and contribute to inclusive progress - ensuring that as our businesses grow, the communities around us grow stronger too.",
        image: "/images/sustainable-bg.avif",
    },
]

const Sustainable = () => {

    const swiperRef = useRef(null);

    return (
        <section className="
            px-0
            mt-[2rem] sm:mt-[2.5rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
            relative
        ">
            {/* Prev Button */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block
                    bg-white/20 hover:bg-white/40 backdrop-blur-sm
                    text-white rounded-full transition-all duration-300
                    p-[0.5rem] lg:p-[0.3rem] xl:p-[0.4rem] 2xl:p-[0.5rem]
                ">
                <MdChevronLeft className="text-[2rem] sm:text-[2rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]" />
            </button>

            {/* Next Button */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block
                    bg-white/20 hover:bg-white/40 backdrop-blur-sm
                    text-white rounded-full transition-all duration-300
                    p-[0.5rem] lg:p-[0.3rem] xl:p-[0.4rem] 2xl:p-[0.5rem]
                ">
                <MdChevronRight className="text-[2rem] sm:text-[2rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]" />
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
                        <img src={item.image} alt={item.title} loading="lazy" className="w-full h-[45vh] lg:h-auto object-cover" />
                        <div className="
                            absolute w-full h-full left-0 top-0 px-[1rem] sm:px-[5%] lg:px-[7%]
                            py-[4rem]
                            flex flex-col justify-end text-white
                        ">
                            <motion.h5
                                variants={headingVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {item.title}
                            </motion.h5>
                            <p className="mt-[0.7rem] lg:mt-[1.5rem] w-full lg:w-[50%]" dangerouslySetInnerHTML={{ __html: item.desc }} />
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
                    border-radius: 7px;
                    transition: width 0.3s ease;
                }
            `}</style>

        </section>
    )
}

export default Sustainable