"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const PresenceOverview = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            flex justify-between flex-wrap flex-col-reverse lg:flex-row
        ">

            {/* Image */}
            <div className="w-full lg:w-[45%] mt-[2rem] lg:mt-0">
                <img src="/images/presence/overview.avif" alt="Overview" loading="lazy" className="w-full" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[50%]">
                <motion.h2
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Global Reach. <br /> Enduring Partnerships.
                </motion.h2>
                <p className="mt-[1rem] lg:mt-[1.5rem]">
                    From its roots in Eastern India, Tandhan Group has steadily expanded its footprint across global markets, building relationships that span continents and industries. Today, our businesses serve customers in over 25 countries across Asia, Africa, the Middle East, and beyond. Backed by strong manufacturing capabilities, strategic market understanding, and a commitment to quality, we continue to create value across diverse geographies. 
                </p>
                {/* <p className="mt-[0.6rem] lg:mt-[1rem]">
                    Our international presence is strengthened by long-term partnerships, efficient supply chains, and the ability to adapt to evolving market needs. Whether through protective solutions, textiles, power solutions, or hospitality, Tandhan Group combines local expertise with global ambition, delivering products, services, and experiences that meet the expectations of customers worldwide. 
                </p> */}
            </div>

        </section>
    )
}

export default PresenceOverview
