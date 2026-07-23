'use client';

import { globalPresenceData } from "@/data/globalPresenceData";
import { useState, useRef } from "react";
import { SlLocationPin } from "react-icons/sl";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import Globe from "./Globe";

const OurPresence = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const controlsRef = useRef(null);
    const dragClosestIndexRef = useRef(-1);

    const activeLocation = globalPresenceData[activeIndex];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % globalPresenceData.length);
    };

    const handleDragStart = () => setIsDragging(true);

    const handleClosestChange = (idx) => {
        dragClosestIndexRef.current = idx;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        if (dragClosestIndexRef.current !== -1) {
            setActiveIndex(dragClosestIndexRef.current);
        }
    };

    return (
        <section className="mt-[2.1rem] sm:mt-[2.5rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem] mb-[6rem] relative">
            {/* Head */}
            <div className="">
                <motion.h6
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Global Presence
                </motion.h6>
                <p className="w-full lg:w-[70%] mt-[0.7rem] lg:mt-[1rem]">
                    Tandhan's presence across multiple countries is driven by a simple belief: growth follows opportunity. By combining international ambition with local understanding, we continue to expand our impact across global markets.
                </p>
            </div>

            <div className="relative mt-[1.5rem] sm:mt-[1.7rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem] flex flex-col lg:flex-row justify-between">
                {/* Left controller — unchanged */}
                <div className="w-full lg:w-[30%] h-auto lg:h-[83dvh] bg-white shadow-[rgba(0,0,0,0.30)_0px_3px_8px] relative z-10">
                    {/* Top */}
                    <div className="relative">
                        <img
                            src={activeLocation.industryImage}
                            alt={activeLocation.country}
                            loading="lazy"
                            className="w-full aspect-[3/2] lg:aspect-[5/4]"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/30 flex items-end">
                            <div className="w-[90%] flex justify-between">
                                <div className="bg-white w-[80%] flex items-center py-[0.7rem] sm:py-[0.8rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem] px-[1rem]">
                                    <span className="text-[1.3rem] sm:text-[1.4rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-semibold block">
                                        {activeLocation.country}
                                    </span>
                                </div>
                                <div
                                    onClick={handleNext}
                                    className="bg-primary hover:bg-secondary text-white w-[20%] flex justify-center items-center text-[2rem] sm:text-[2.2rem] lg:text-[2.8rem] xl:text-[2.9rem] 2xl:text-[3rem] cursor-pointer transition select-none"
                                >
                                    ›
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="px-[1rem] pt-[0.5rem]">
                        {activeLocation.brands.length > 0 ? (
                            activeLocation.brands.map((item, index) => (
                                <div
                                    key={index}
                                    className={`py-[0.8rem] sm:py-[0.9rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem] ${index !== 0 ? "border-t border-gray-200" : ""}`}
                                >
                                    <span className="block text-[1.1rem] sm:text-[1.2rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold">
                                        {item.brand}
                                    </span>
                                    <div className="flex justify-between mt-[0.5rem]">
                                        <div className="w-[5%]">
                                            <SlLocationPin className="mt-[0.3rem] sm:mt-[0.2rem] lg:mt-[0.25rem] xl:mt-[0.29rem] 2xl:mt-[0.3rem]" />
                                        </div>
                                        <div className="w-[93%]">
                                            <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                                                {item.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-[0.8rem] sm:py-[0.9rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]">
                                <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-gray-500">
                                    No listings yet for this location.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right — interactive globe box */}
                <div className="w-full lg:w-[65%] h-[350px] lg:h-[83vh] relative">
                    <Globe
                        activeLocation={{
                            country: {
                                lat: activeLocation.lat,
                                lng: activeLocation.lng,
                            },
                        }}
                        controlsRef={controlsRef}
                        isDragging={isDragging}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClosestChange={handleClosestChange}
                        locationsData={globalPresenceData}
                    />
                </div>
            </div>
        </section>
    );
};

export default OurPresence;