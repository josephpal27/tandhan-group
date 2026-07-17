"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const RelatedBlogsData = [
    {
        id: 1,
        image: "/images/media/demo.png",
        title: "Lorem ipsum dolor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam."
    },
    {
        id: 2,
        image: "/images/media/demo.png",
        title: "Lorem ipsum dolor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam."
    },
    {
        id: 3,
        image: "/images/media/demo.png",
        title: "Lorem ipsum dolor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam."
    },
    {
        id: 4,
        image: "/images/media/demo.png",
        title: "Lorem ipsum dolor",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam."
    },
]

const RelatedBlogs = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            pb-[3rem] sm:pb-[3.5rem] lg:pb-[5rem] xl:pb-[5.5rem] 2xl:pb-[6rem]
        ">

            <h2>
                Related Blogs
            </h2>

            {/* Row */}
            <div className="mt-[1rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    spaceBetween={50}
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
                            spaceBetween: 30,
                        },
                        991: {
                            slidesPerView: 3, // tablet and up
                            spaceBetween: 50,
                        },
                    }}
                    className="!pr-[1rem]"
                >
                    {RelatedBlogsData.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="relative">
                                {/* Image */}
                                <div>
                                    <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                                </div>

                                {/* Content */}
                                <div className="
                                    bg-primary text-white w-[85%] relative z-10
                                    ml-auto mr-[-1rem] mt-[-2.5rem]
                                    p-[1.5rem]
                                ">
                                    <span className="
                                        text-[1.4rem] font-semibold
                                    ">
                                        {item.title}
                                    </span>
                                    <p className="
                                        text-[0.8rem]
                                        mt-[0.5rem]
                                    ">
                                        {item.desc}
                                    </p>
                                    <Link href="/" className="
                                        block mt-[1rem]
                                        border-white border-[1.5px] w-max
                                        px-[0.5rem]
                                        py-[0.2rem]
                                        text-[1rem]
                                    ">
                                        Read More
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </section>
    )
}

export default RelatedBlogs
