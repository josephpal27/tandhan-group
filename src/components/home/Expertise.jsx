"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const expertiseData = [
    {
        id: 1,
        value: 31,
        title: "Years of <br/> Experience",
        icon: "/images/icons/experience.png",
    },
    {
        id: 2,
        value: 3000,
        title: "Clients <br/> Served",
        icon: "/images/icons/clients.png",
    },
    {
        id: 3,
        value: 25,
        title: "Country <br/> Presence",
        icon: "/images/icons/earth.png",
    },
    {
        id: 4,
        value: 2000,
        title: "Total <br/> Workforce",
        icon: "/images/icons/digging.png",
    },
];

// Animated counter hook
const useCountUp = (target, inView) => {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            hasAnimated.current = true;
            const controls = animate(0, target, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (v) => setCount(Math.floor(v)),
            });
            return () => controls.stop();
        }
    }, [inView, target]);

    return count;
};

// Individual stat card
const StatCard = ({ item, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
    const count = useCountUp(item.value, inView);

    return (
        <div key={index} className="w-[25%]" ref={ref}>
            {/* Card Top */}
            <div className="min-h-[20rem] sm:min-h-[15rem] lg:min-h-[17rem] xl:min-h-[19rem] 2xl:min-h-[20rem] flex gap-[1rem]">
                {/* Bar */}
                <div className="w-[13px] sm:w-[10px] lg:w-[10.5px] xl:w-[12px] 2xl:w-[13px] bg-[#c8c8c8] flex items-end">
                    <motion.div
                        className="w-full bg-primary"
                        initial={{ height: "0%" }}
                        animate={inView ? { height: "75%" } : { height: "0%" }}
                        transition={{ duration: 1.4, ease: "easeOut", delay: index * 0.15 }}
                    />
                </div>
                {/* Value */}
                <div>
                    <span className="text-[1.7rem] sm:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold">
                        {count}+
                    </span>
                    <p
                        className="mt-[0.2rem] font-semibold text-[1.2rem] sm:text-[1.3rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                </div>
            </div>

            {/* Card Bottom */}
            <div className="
                bg-primary text-[#f3f3f3]
                h-[12.5rem] sm:h-[10rem] lg:h-[11rem] xl:h-[12rem] 2xl:h-[12.5rem]
                py-[2rem] sm:py-[1.5rem] lg:py-[1.8rem] xl:py-[1.9rem] 2xl:py-[2rem]
                pr-[3rem] sm:pr-[2rem] lg:pr-[2.6rem] xl:pr-[2.8rem] 2xl:pr-[3rem]
            ">
                <img
                    src={item.icon}
                    alt="Icon"
                    loading="lazy"
                    className="w-[20%]"
                />
                <span className="text-[1.3rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] block mt-[1rem]">Lorem Ipsum</span>
                <p className="text-[0.8rem] sm:text-[0.7rem] lg:text-[0.65rem] xl:text-[0.75rem] 2xl:text-[0.8rem] mt-[0.5rem]">
                    Lorem ipsum dolor sit amet elit Lorem, ipsum dolor.
                </p>
            </div>
        </div>
    );
};

const Expertise = () => {
    return (
        <section className="
            px-0
            pt-[2rem] sm:pt-[3.5rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem]
            flex justify-between flex-wrap
        ">
            {/* Left */}
            <div className="w-[35%]">
                {/* Left Top */}
                <div className="min-h-[20rem] sm:min-h-[15rem] lg:min-h-[17rem] xl:min-h-[19rem] 2xl:min-h-[20rem] pl-[20%] pr-[15%]">
                    <span className="text-[3rem] sm:text-[2rem] lg:text-[2.6rem] xl:text-[2.8rem] 2xl:text-[3rem] font-bold">Lorem Ipsum</span>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut
                        voluptatum ut eaque amet qui officia fugit voluptatem.
                    </p>
                </div>
                {/* Left Bottom */}
                <div className="bg-secondary text-white pl-[20%] h-[12.5rem] sm:h-[10rem] lg:h-[11rem] xl:h-[12rem] 2xl:h-[12.5rem] flex justify-between items-center">
                    <div className="w-[77%]">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut
                            voluptatum eaque amet qui officia fugit voluptatem.
                        </p>
                    </div>
                    <div className="w-[15%] bg-primary h-full"></div>
                </div>
            </div>

            {/* Right */}
            <div className="w-[65%] flex justify-between flex-wrap">
                {expertiseData.map((item, index) => (
                    <StatCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Expertise;