"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const sectorsData = [
    {
        id: 1,
        title: "Hospitality",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "/images/icons/hospitality.avif",
        image: "/images/sectors/1.avif",
    },
    {
        id: 2,
        title: "Protective Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "/images/icons/protective.avif",
        image: "/images/sectors/2.avif",
    },
    {
        id: 3,
        title: "Energy Solutions",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "/images/icons/energy.avif",
        image: "/images/sectors/3.avif",
    },
    {
        id: 4,
        title: "Textiles",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "/images/icons/textiles.avif",
        image: "/images/sectors/4.avif",
    },
]

const Sectors = () => {
    return (
        <section className="pt-[5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap items-center">
            <div className="w-[48%] flex justify-between items-start flex-wrap">
                {sectorsData.map((sector) => {
                    return(
                        <div key={sector.id} className={`
                            relative overflow-hidden group
                            w-[48.5%] 
                            mb-[1.2rem] sm:mb-[1.1rem] lg:mb-[1rem] xl:mb-[1.1rem] 2xl:mb-[1.2rem]
                            ${sector.id === 2 ? "mt-[3rem] sm:mt-[2rem] lg:mt-[2.6rem] xl:mt-[2.8rem] 2xl:mt-[3rem]" : ""}
                            ${sector.id === 3 ? "mt-[-3rem] sm:mt-[-2rem] lg:mt-[-2.6rem] xl:mt-[-2.8rem] 2xl:mt-[-3rem]" : ""}
                        `}>
                            <img src={sector.image} alt={sector.title} loading="lazy" className="w-full aspect-[5/4] object-cover" />
                            <div className="
                                w-full h-full absolute top-0 left-0 bg-primary/70 
                                p-[1.5rem] sm:p-[1.7rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
                                flex items-center justify-center 
                                opacity-0 group-hover:opacity-100 transition duration-500
                                scale-110 group-hover:scale-100
                            ">
                                <img 
                                    src={sector.icon} 
                                    alt={sector.title} 
                                    loading="lazy" 
                                    className="w-[50%]" 
                                />
                                {/* <span className="block text-white text-[1.5rem] sm:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold mt-[1rem]">
                                    {sector.title}
                                </span>
                                <p className="text-[0.9rem] sm:text-[0.9rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem] text-white/90 mt-[0.2rem]">
                                    {sector.desc}
                                </p> */}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-[48%]">
                <motion.h3
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Our Sectors <br /> & Businesses 
                </motion.h3>
                <p className="mt-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error ex voluptates sed harum repellat fugiat illum incidunt animi iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus.
                </p>
            </div>
        </section>
    )
}

export default Sectors
