"use client";

import { useState } from "react";

const ourValuesData = [
    {
        id: 1,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/1.avif",
    },
    {
        id: 2,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/1.avif",
    },
    {
        id: 3,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/1.avif",
    },
    {
        id: 4,
        title: "lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat under.",
        image: "/images/values/1.avif",
    },
]

const OurValues = () => {

    const [activeIndex, setActiveIndex] = useState(1); // 2nd card active on load

    return (
        <section className="
            pt-[2rem] sm:pt-[2.2rem] lg:pt-[3.5rem] xl:pt-[4rem] 2xl:pt-[4.5rem]
        ">
            {/* Top Content */}
            <div className="flex flex-col items-center text-center">
                <h4>
                    Our Values
                </h4>
                <p className="mt-[0.7rem] lg:mt-[1.2rem] w-[55%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisicing Illo perferendis adipisicing quibusdam ipsam alias harum ut pariatur nesciunt quod tenetur modi.
                </p>
            </div>

            {/* Row */}
            <div className="
                flex justify-between flex-wrap mt-[2.5rem]
            ">
                {ourValuesData.map((value, index) => {

                    const isActive = index === activeIndex;
                    
                    return(
                        <div key={index} onClick={() => setActiveIndex(index)} className="
                            w-[23%] relative cursor-pointer transition-all duration-300
                        ">
                            {/* Image only renders for active card */}
                            <img
                                src={value.image}
                                alt={value.title}
                                loading="lazy"
                                className={`
                                    w-full transition-opacity duration-300
                                    ${isActive ? "opacity-100" : "opacity-0"}
                                `}
                            />
                            <div className={`
                                absolute top-0 left-0 w-full h-full
                                flex flex-col justify-end transition-colors duration-300
                                p-[2rem]
                                ${isActive ? "bg-primary/80 text-white shadow-2xl" : "bg-white text-primary"}
                            `}>
                                <span className="block text-[4rem] mb-[1rem]">
                                    0{value.id}.
                                </span>
                                <span className="text-[2rem] font-semibold">
                                    {value.title}
                                </span>
                                <p className="mt-[0.7rem] lg:mt-[0.8rem] text-[1rem]">
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

export default OurValues
