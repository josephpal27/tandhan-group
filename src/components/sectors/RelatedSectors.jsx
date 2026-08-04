"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { headingVariant } from "@/utils/animations";
import Link from "next/link";

const sectorsData = [
    {
        id: 1,
        title: "Protective Solutions",
        image: "/images/sectors/2.avif",
        slug: "protective-solutions",
    },
    {
        id: 2,
        title: "Energy Solutions",
        image: "/images/sectors/3.avif",
        slug: "energy-solutions",
    },
    {
        id: 3,
        title: "Textiles",
        image: "/images/sectors/4.avif",
        slug: "textiles",
    },
    {
        id: 4,
        title: "Hospitality",
        image: "/images/sectors/1.avif",
        slug: "hospitality",
    },
];

const RelatedSectors = () => {
    const pathname = usePathname();
    const currentSlug = pathname.split("/").filter(Boolean).pop();

    const relatedSectors = sectorsData
        .filter((sector) => sector.slug !== currentSlug)
        .slice(0, 3);

    return (
        <section className="pt-[2rem] sm:pt-[2.5rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]">

            <motion.h6
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Other Sectors
            </motion.h6>

            <div className="
                mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.1rem] xl:mt-[2.3rem] 2xl:mt-[2.5rem]
                flex justify-between flex-wrap
            ">
                {relatedSectors.map((sector) => {
                    return (
                        <Link href={`/${sector.slug}`} key={sector.id} className="
                            w-full lg:w-[31.8%] mb-[1.2rem] lg:mb-0 block relative overflow-hidden group
                        ">
                            <img
                                src={sector.image}
                                alt={sector.title}
                                loading="lazy"
                                className="w-full group-hover:scale-105 transition duration-300"
                            />
                            <div className="
                                absolute bottom-0 left-0 w-full h-full text-white text-center
                                bg-gradient-to-b from-transparent to-primary/80 flex items-end justify-center
                                p-[1rem] sm:p-[1.2rem] lg:p-[1rem] xl:p-[1.1rem] 2xl:p-[1.2rem]
                            ">
                                <span className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-semibold block">
                                    {sector.title}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

        </section>
    );
};

export default RelatedSectors;