"use client";

const teamData = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO",
        image: "/images/founder.png",
    },
    {
        id: 2,
        name: "John Doe",
        position: "Founder",
        image: "/images/founder.png",
    },
    {
        id: 3,
        name: "John Doe",
        position: "Partner",
        image: "/images/founder.png",
    },
    {
        id: 4,
        name: "John Doe",
        position: "Developer",
        image: "/images/founder.png",
    },
    {
        id: 5,
        name: "John Doe",
        position: "Designer",
        image: "/images/founder.png",
    },
]

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const OurTeam = () => {
    return (
        <section className="pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem] flex justify-between flex-wrap mb-[5rem]">

            {/* Left Content */}
            <div className="w-full lg:w-[35%]">
                <h5>
                    Our <br /> Team
                </h5>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore.
                </p>
            </div>

            {/* Slider */}
            <div className="w-full lg:w-[60%] relative pl-[1rem] pt-[1rem]">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={{
                        prevEl: '#team-prev',
                        nextEl: '#team-next',
                    }}
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={700}
                    className="w-full"
                >
                    {teamData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full overflow-hidden text-white pb-[1.3rem]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="w-full"
                                />
                                <span className="
                                    block mt-[1.2rem] text-[1.5rem] font-semibold
                                ">
                                    {item.name}
                                </span>
                                <p>
                                    {item.position}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation */}
                <div className="absolute bottom-0 right-0 flex items-center gap-[1rem] z-[999]">
                    <button className="
                        w-[40px] sm:w-[45px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]
                        h-[40px] sm:h-[45px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]
                        flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                        text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    " id="team-prev">
                        ‹
                    </button>
                    <button className="
                        w-[40px] sm:w-[45px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]
                        h-[40px] sm:h-[45px] lg:h-[40px] xl:h-[45px] 2xl:h-[50px]
                        flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                        text-[1.7rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                    " id="team-next">
                        ›
                    </button>
                </div>

                {/* Blue Card */}
                <div className="absolute top-0 left-0 bg-primary w-[34.7%] h-full"></div>

            </div>

        </section>
    )
}

export default OurTeam
