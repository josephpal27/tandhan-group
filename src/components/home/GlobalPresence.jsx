"use client";

import { useState, useRef, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";

const locations = [
    {
        id: 1,
        country: "India",
        image: "/images/our-presence/india.png",
        brand: "Tandhan Denim",
        address: "Demo Address 1",
    },
    {
        id: 2,
        country: "Afghanistan",
        image: "/images/our-presence/afghanistan.png",
        brand: "Paktika Ahmadi Trading Co. Ltd.",
        address: "Demo Address 2",
    },
]

const GlobalPresence = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const timerRef = useRef(null);

    const activeLocation = locations[activeIndex];

    const handleNext = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setFading(true);
        timerRef.current = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % locations.length);
            setFading(false);
        }, 200);
    };

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <section className="mt-[4rem] px-0 relative">

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
            <div className="absolute w-full h-full left-0 top-0 px-[1rem] sm:px-[5%] lg:px-[7%] py-[5rem]">
                <div className="w-[30%] h-full bg-white shadow-[rgba(0,0,0,0.30)_0px_3px_8px]">
                    {/* Top */}
                    <div className="relative">
                        <img src="/images/demo-1.jpg" alt="Map" loading="lazy" className="w-full" />
                        {/* Layer */}
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/50 flex items-end">
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
                    <div className="p-[1rem]">
                        <span className="block text-[1.5rem] font-semibold">
                            {activeLocation.brand}
                        </span>
                        <a href="/" className="flex items-center gap-[0.5rem] mt-[0.5rem]">
                            <SlLocationPin /> {activeLocation.address}
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GlobalPresence
