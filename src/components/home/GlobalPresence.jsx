"use client";

import { globalPresenceData } from "@/data/globalPresenceData";
import { useState, useRef, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";

const GlobalPresence = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);

    const activeLocation = globalPresenceData[activeIndex];

    const handleNext = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setFading(true);
        timerRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % globalPresenceData.length);
            setFading(false);
        }, 200);
    };

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <section className="mt-[4rem] mb-[1rem] px-0 relative">

            {/* Map Image */}
            <div>
                <img
                    src={activeLocation.image}
                    alt={activeLocation.country}
                    loading="lazy"
                    className={`
                        w-full h-screen object-cover transition-opacity duration-[400ms] 
                        ${fading ? "opacity-0" : "opacity-100"}
                    `}
                />
            </div>

            {/* Content Box */}
            <div className="absolute w-full h-full left-0 top-0 px-[1rem] sm:px-[5%] lg:px-[7%] py-[4.5rem]">
                <div className="w-[30%] h-full bg-white shadow-[rgba(0,0,0,0.30)_0px_3px_8px]">
                    {/* Top */}
                    <div className="relative">
                        <img src="/images/demo-1.jpg" alt="Map" loading="lazy" className="w-full" />
                        {/* Layer */}
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/30 flex items-end">
                            <div className="w-[90%] flex justify-between">
                                <div className="bg-white w-[80%] py-[2rem] px-[1rem]">
                                    <span className="text-[1.4rem] font-semibold block">
                                        {activeLocation.country}
                                    </span>
                                </div>
                                <div onClick={handleNext} className="
                                    bg-secondary hover:bg-primary text-white w-[20%] flex justify-center items-center 
                                    text-[3rem]
                                    cursor-pointer transition select-none
                                ">
                                    ›
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="px-[1rem] pt-[0.5rem]">
                        {activeLocation.brands.map((item, index) => (
                            <div
                                key={index}
                                className={`py-[0.8rem] ${index !== 0 ? "border-t border-gray-200" : ""}`}
                            >
                                <span className="block text-[1.3rem] font-semibold">
                                    {item.brand}
                                </span>

                                <div className="flex justify-between mt-[0.5rem]">
                                    <div className="w-[5%]">
                                        <SlLocationPin className="mt-[0.3rem]" />
                                    </div>
                                    <div className="w-[93%]">
                                        <p className="text-[1rem]">
                                            {item.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GlobalPresence
