"use client";

import { useState } from "react";


const SectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="flex justify-between flex-wrap relative">

            {/* Left */}
            <div className="w-[30%] pt-[5rem] relative z-50">
                <h2>
                    Sector Overview
                </h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur asperiores nihil repellat.
                </p>
                <p className={`
                    mt-[0.7rem] lg:mt-[1rem] w-[80%] overflow-hidden transition-all duration-300
                    ${active ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                `}>
                    Lorem ipsum dolor sit amet consectetur elit. Architecto tenetur asperiores nihil repellat adipisicing.
                </p>
                <button className="
                    mt-[2.5rem] bg-secondary hover:bg-primary text-white font-semibold transition
                    py-[0.5rem] px-[1.5rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Center */}
            <div className="w-[32%]">
                <img 
                    src="/images/sectors/protective-solutions/overview-bg.png" 
                    alt="Sector Overview" 
                    loading="lazy" 
                    className="w-full" 
                />
            </div>

            {/* Right */}
            <div className="w-[30%] flex items-end pb-[3rem] relative z-50">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima adipisicing tenetur asperiores nihil repellat pariatur explicabo tenetur exercitationem molestiae ducimus fugiat.
                </p>
            </div>

            {/* Truck Image */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end pb-[5rem]">
                <img 
                    src="/images/sectors/protective-solutions/truck.png" 
                    alt="Truck" 
                    loading="lazy" 
                    className="w-[50%]" 
                />
            </div>

        </section>
    )
}

export default SectorOverview
