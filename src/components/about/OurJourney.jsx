"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const journeyData = [
    {
        id: 1,
        year: 2001,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 2,
        year: 2002,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 3,
        year: 2003,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
    {
        id: 4,
        year: 2004,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        image: "/images/journey/1.png",
    },
]

const OurJourney = () => {
    return (
        <section className="
            pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem] flex justify-between flex-wrap
            pr-0
        ">

            {/* Left Content */}
            <div className="
                w-[27%]
                pr-[2rem]
            ">
                <h3>
                    Our <br /> Journey
                </h3>
                <p>
                    Lorem ipsum dolor sit amet, adipisic elit. Id ut vitae dolorum suscipit facilis, sint nisi nulla consequatur laudantium quaerat.
                </p>
            </div>

            {/* Right Slider */}
            <div className="
                w-[73%] overflow-hidden
            ">
                <Swiper
                    // onSwiper={(swiper) => (swiperRef.current = swiper)}
                    // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={5}
                    loop={false}
                    className=""
                >
                    {journeyData.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className={`
                                h-full bg-[#e0e1ee] flex flex-col justify-end p-[1.3rem]
                                transition-all duration-300
                                
                            `}>
                                <span className={`
                                    text-[3.4rem] 
                                    font-bold 
                                `}>
                                    {item.year}
                                </span>

                                <span className={`
                                    block
                                    text-[1.5rem] font-semibold
                                    mt-[1rem]
                                `}>
                                    {item.title}
                                </span>

                                <p className={`
                                    mt-[0.6rem] 
                                    text-[0.95rem]
                                `}>
                                    {item.desc}
                                </p>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full mt-[2rem]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default OurJourney
