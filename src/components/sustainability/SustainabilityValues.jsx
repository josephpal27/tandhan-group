"use client";

import { useState } from "react";

const valuesData = [
    {
        id: 1,
        title: "Responsible <br/> Manufacturing",
        desc: "We adopt efficient manufacturing processes that reduce waste, optimise resources, and deliver products built for long-term performance.",
        image: "/images/sustainability/values/1.avif",
    },
    {
        id: 2,
        title: "Resource <br/> Conservation",
        desc: "We adopt efficient manufacturing processes that reduce waste, optimise resources, and deliver products built for long-term performance.",
        image: "/images/sustainability/values/2.avif",
    },
    {
        id: 3,
        title: "Renewable <br/> Energy",
        desc: "We continue to expand renewable energy adoption and advanced energy solutions that support a lower-carbon future.",
        image: "/images/sustainability/values/3.avif",
    },
    {
        id: 4,
        title: "Innovation for <br/> Sustainability",
        desc: "We develop products that improve efficiency, extend product life, and enable more sustainable agricultural, industrial, and infrastructure practices.",
        image: "/images/sustainability/values/4.avif",
    },
]

const SustainabilityValues = () => {

    const [activeIndex, setActiveIndex] = useState(1); // 2nd card active on load

    return (
        <section className="
            pt-[3rem] sm:pt-[4rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
        ">
            {/* Row */}
            <div className="
                flex justify-between flex-wrap 
            ">
                {valuesData.map((value, index) => {

                    const isActive = index === activeIndex;

                    return (
                        <div key={index} onClick={() => setActiveIndex(index)} className="
                            w-[48%] lg:w-[23%] relative cursor-pointer transition-all duration-300
                            lg:hover:scale-[1.05]
                            mb-[1.2rem] lg:mb-0
                        ">
                            {/* Image only renders for active card */}
                            <img
                                src={value.image}
                                alt={value.title}
                                loading="lazy"
                                className={`
                                    w-full transition-all duration-300
                                    ${isActive ? "opacity-100 lg:scale-[1.05]" : "opacity-10"}
                                `}
                            />
                            <div className={`
                                absolute top-0 left-0 w-full h-full
                                flex flex-col lg:justify-end transition-all duration-300
                                p-[0.5rem] sm:p-[0.7rem] lg:p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]
                                ${isActive ? "bg-primary/80 text-white shadow-2xl lg:scale-[1.05]" : "bg-transparent text-primary"}
                            `}>
                                <span className="block text-[1.5rem] sm:text-[1.6rem] lg:text-[3.4rem] xl:text-[3.7rem] 2xl:text-[4rem] mb-[0.5rem] lg:mb-[1rem]">
                                    0{value.id}.
                                </span>
                                <span className="text-[1.1rem] sm:text-[1.2rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem] font-semibold leading-[1.2]" dangerouslySetInnerHTML={{__html: value.title}} />
                                <p className="mt-[0.7rem] lg:mt-[0.9rem] text-[0.8rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem]">
                                    {value.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SustainabilityValues
