"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const EnergySectorOverview = () => {

    const [active, setActive] = useState(false);

    return (
        <section className="
            pt-[5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[5rem] sm:pb-[3rem] lg:pb-[3.5rem] xl:pb-[4rem] 2xl:pb-[4.5rem]
            flex justify-between flex-wrap relative overflow-hidden
        ">

            {/* Content */}
            <div className="w-[35%]">
                <h2>
                    Sector <br /> Overview
                </h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur asperiores nihil repellat.
                </p>
                <p className={`
                    mt-[0.7rem] lg:mt-[1rem] overflow-hidden transition-all duration-300
                    ${active ? "max-h-40 opacity-100 mb-[1rem]" : "max-h-0 opacity-0"}
                `}>
                    Lorem ipsum dolor sit amet consectetur elit. Architecto tenetur asperiores nihil repellat adipisicing. Lorem ipsum dolor sit amet asperiores nihil repellat.
                </p>
                <button className="
                    mt-[1.5rem] bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[3px]
                    py-[0.45rem] px-[1.4rem]
                " onClick={() => setActive(!active)}>
                    {active ? "Read Less" : "Read More"}
                </button>
            </div>

            {/* Image */}
            <div className="w-[60%]">
                <img
                    src="/images/sectors/energy-solutions/solar.avif"
                    alt="Solar Panel"
                    loading="lazy"
                    className="w-full mt-[1rem] relative z-50"
                />
            </div>

            {/* Artboard */}
            <img
                src="/images/artboard.avif"
                alt="Artboard"
                loading="lazy"
                className="
                    w-[30%] filter invert absolute opacity-50
                    right-[-5rem] sm:right-[-3rem] lg:right-[-4rem] xl:right-[-4.5rem] 2xl:right-[-5rem]
                    top-[-4rem] sm:top-[-5rem] lg:top-[-6.5rem] xl:top-[-7rem] 2xl:top-[-7.5rem]
                "
            />

        </section>
    )
}

export default EnergySectorOverview
