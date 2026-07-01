"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const productsData = [
    {
        id: 1,
        title: "Truck Cover",
        desc: "Lorem ipsum dolor sit amet consectetur, adipis elit. Consequatur, temporibus exercitationem elit temporibus voluptate.",
        image: "/images/sectors/protective-solutions/products/1.png",
    },
    {
        id: 2,
        title: "Goods Cover",
        desc: "Lorem ipsum dolor sit amet consectetur, adipis elit. Consequatur, temporibus exercitationem elit temporibus voluptate.",
        image: "/images/sectors/protective-solutions/products/2.png",
    },
    {
        id: 3,
        title: "Truck Cover",
        desc: "Lorem ipsum dolor sit amet consectetur, adipis elit. Consequatur, temporibus exercitationem elit temporibus voluptate.",
        image: "/images/sectors/protective-solutions/products/1.png",
    },
    {
        id: 4,
        title: "Goods Cover",
        desc: "Lorem ipsum dolor sit amet consectetur, adipis elit. Consequatur, temporibus exercitationem elit temporibus voluptate.",
        image: "/images/sectors/protective-solutions/products/2.png",
    },
]

const PolyplastProducts = () => {
    return (
        <section className="px-0">

            {/* Top */}
            <div className="relative">
                <img src="/images/product-bg.png" alt="Products Background" loading="lazy" className="w-full" />
                <div className="px-[1rem] sm:px-[5%] lg:px-[7%] absolute top-0 left-0 w-full h-full text-white pt-[5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]">
                    <motion.h4
                        variants={headingVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Our Products
                    </motion.h4>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem] w-[50%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident magni.
                    </p>
                </div>
            </div>

            {/* Bottom */}
            <div className="px-[1rem] sm:px-[5%] lg:px-[7%] mt-[-9rem] sm:mt-[-4rem] lg:mt-[-7rem] xl:mt-[-8rem] 2xl:mt-[-9rem]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}
                    spaceBetween={60}
                    loop={true}
                    navigation={{
                        prevEl: '#products-prev',
                        nextEl: '#products-next',
                    }}
                    pagination={{
                        el: '#team-pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // for mobile
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2, // tablet
                            spaceBetween: 15,
                        },
                        991: {
                            slidesPerView: 2, // tablet and up
                            spaceBetween: 60,
                        },
                    }}
                >
                    {productsData.map((product, index) => {
                        return (
                            <SwiperSlide key={index} className="relative">
                                <img src={product.image} alt={product.title} loading="lazy" className="w-[70%]" />
                                <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center pl-[35%] pr-[5px]">
                                    <div className="
                                        bg-white p-[2rem] sm:p-[1.5rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem] text-black 
                                        min-h-[55%] border-primary border-[2px] shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,1)]
                                    ">
                                        <span className="
                                            text-[1.8rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] font-semibold
                                        ">
                                            {product.title}
                                        </span>
                                        <p className="mt-[0.3rem] lg:mt-[0.5rem]">
                                            {product.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* Pagination & Navigation */}
                <div className="flex justify-center items-center py-[4rem] sm:py-[2rem] lg:py-[3.6rem] xl:py-[3.8rem] 2xl:py-[4rem] relative">
                    <div className="hidden lg:block">
                        <div id="team-pagination" className="flex items-center gap-[0.4rem]" />
                    </div>
                    <div className="flex items-center absolute right-0">
                        <button className="
                            w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " id="products-prev">
                            ‹
                        </button>
                        <button className="
                            w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " id="products-next">
                            ›
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default PolyplastProducts
