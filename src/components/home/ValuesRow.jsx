"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const valuesData = [
    {
        id: 1,
        value: 31,
        title: "Years of Experience",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing sit amet elit.",
    },
    {
        id: 2,
        value: 3000,
        title: "Clients Served",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing  elit.",
    },
    {
        id: 3,
        value: 25,
        title: "Country Presence",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing sit amet elit.",
    },
    {
        id: 4,
        value: 2000,
        title: "Total Workforce",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing sit amet elit.",
    },
];

const Counter = ({ value, inView }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!inView) return;

        const node = ref.current;
        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate(latest) {
                if (node) {
                    node.textContent = Math.round(latest).toLocaleString();
                }
            },
        });

        return () => controls.stop();
    }, [inView, value]);

    return <span ref={ref}>0</span>;
};

const ValueCard = ({ item, isInView }) => (
    <div className="w-full group">
        <span className="text-[2rem] sm:text-[1.7rem] lg:text-[2.6rem] xl:text-[2.8rem] 2xl:text-[3rem] font-semibold">
            <Counter value={item.value} inView={isInView} />+
        </span>
        <div className="w-[20%] lg:w-[30%] group-hover:w-[70%] transition-all duration-300 h-[1px] bg-primary mt-[0.15rem] lg:mt-[0.3rem]"></div>
        <span
            dangerouslySetInnerHTML={{ __html: item.title }}
            className="block mt-[1.2rem] lg:mt-[1.5rem] text-[1.3rem] sm:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold leading-[1]"
        />
        <p className="mt-[0.7rem] lg:mt-[1rem] text-[0.9rem] sm:text-[0.8rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]">
            {item.desc}
        </p>
    </div>
);

const ValuesRow = () => {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

    return (
        <section
            ref={sectionRef}
            className="mt-[2rem] sm:mt-[3rem] lg:mt-[-6rem] xl:mt-[-7rem] 2xl:mt-[-8rem] relative z-50"
        >
            <div className="bg-white text-primary shadow-[0px_5px_15px_rgba(0,0,0,0.5)]">
                {/* Mobile / Tablet: Swiper */}
                <div className="lg:hidden p-[1.2rem] sm:p-[1.5rem] pb-[0.7rem]">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={16}
                        pagination={{ clickable: true }}
                        id="values-swiper"
                        className="!pb-[3rem]"
                    >
                        {valuesData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ValueCard item={item} isInView={isInView} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop: original flex grid */}
                <div className="hidden lg:flex flex-wrap justify-between p-[2.3rem] xl:p-[2.7rem] 2xl:p-[3rem]">
                    {valuesData.map((item) => (
                        <div key={item.id} className="lg:w-[23%]">
                            <ValueCard item={item} isInView={isInView} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ValuesRow