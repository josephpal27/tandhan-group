"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const latestNewsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam soluta minus, dolores molestias Lorem.",
        image: "/images/latest-news/1.avif",
        url: "/",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam soluta minus, dolores molestias Lorem.",
        image: "/images/latest-news/2.avif",
        url: "/",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam soluta minus, dolores molestias Lorem.",
        image: "/images/latest-news/3.avif",
        url: "/",
    },
]

const LatestNews = () => {
    return (
        <section className="pt-[2.5rem] sm:pt-[3rem] lg:pt-[3.5rem] xl:pt-[4rem] 2xl:pt-[4.5rem]">
            <div className="flex flex-col items-center text-center">
                <motion.h6
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Latest News
                </motion.h6>
                <p className="w-full lg:w-[50%] mt-[0.7rem] lg:mt-[1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam corporis soluta minus, dolores molestias Lorem, ipsum.
                </p>
            </div>

            {/* Row */}
            <div className="mt-[1.5rem] sm:mt-[1.7rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem] flex justify-between flex-wrap">
                {latestNewsData.map((item) => {
                    return (
                        <div key={item.id} className="
                            w-full lg:w-[31%] bg-primary relative mb-[1rem] lg:mb-0
                        ">
                            <div className="relative">
                                <img src={item.image} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                                <div className="
                                    absolute top-0 left-0 bg-secondary p-[0.7rem] lg:p-[1rem]
                                    text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold
                                ">
                                    0{item.id}
                                </div>
                            </div>
                            <div className="
                                text-white
                                px-[1rem] sm:px-[1.1rem] lg:px-[1.2rem] xl:px-[1.4rem] 2xl:px-[1.5rem]
                                pt-[1rem] sm:pt-[1.1rem] lg:pt-[1.2rem] xl:pt-[1.4rem] 2xl:pt-[1.5rem]
                                pb-[4.2rem] sm:pb-[5rem] lg:pb-[5.6rem] xl:pb-[5.8rem] 2xl:pb-[6rem]
                            ">
                                <span className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold">
                                    {item.title}
                                </span>
                                <p className="mt-[0.5rem] text-[0.85rem] sm:text-[0.95rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                                    {item.desc}
                                </p>
                                <a href="/" className="
                                    absolute bottom-0 right-0 
                                    w-[50px] sm:w-[55px] lg:w-[60px] xl:w-[65px] 2xl:w-[70px] 
                                    aspect-square bg-secondary
                                    flex justify-center items-center 
                                    text-[2.2rem] sm:text-[2.4rem] lg:text-[2.6rem] xl:text-[2.8rem] 2xl:text-[3rem]
                                    text-black
                                    transition duration-300 hover:bg-[#ced430]
                                ">
                                    ›
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default LatestNews
