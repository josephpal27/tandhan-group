"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const missionVisionData = [
    {
        id: 1,
        title: "Our Purpose",
        desc: "To create enduring value by building businesses that anticipate change, strengthen communities, and unlock opportunities. Guided by instinct and driven by responsibility, we strive to deliver solutions that empower progress, foster resilience, and contribute to a more sustainable future.",
        image: "/images/mission.avif",
        mobImage: "/images/mission-mob.avif",
    },
    {
        id: 2,
        title: "Our Belief",
        desc: "We believe that growth comes to those willing to see potential before it becomes obvious. Our vision is to build enduring enterprises that create value, empower communities, and inspire progress - guided by instinct, strengthened by experience, and driven by a commitment to the future.",
        image: "/images/vision.avif",
        mobImage: "/images/vision-mob.avif",
    },
]

const MissionVision = () => {
    return (
        <section className="px-0 pt-[3rem] sm:pt-[3.2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] overflow-hidden pb-[1rem]">
            {missionVisionData.map((item) => {
                return (
                    <div key={item.id} className={`
                        flex justify-between flex-wrap
                        ${item.id % 2 === 0 ? "flex-row-reverse mt-[1rem] sm:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]" : ""}
                    `}>
                        <motion.div 
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-[90%] lg:w-[60%] overflow-hidden relative"
                        >
                            <img src={item.image} alt={item.title} loading="lazy" className="w-full hidden lg:block" />
                            <img src={item.mobImage} alt={item.title} loading="lazy" className="w-full block lg:hidden" />
                            
                            <div className={`
                                absolute w-full h-full top-0 left-0 flex justify-between text-white items-end lg:items-start
                                p-[1rem] sm:p-[1.2rem] lg:p-[4rem] xl:p-[4.5rem] 2xl:p-[5rem]
                                ${item.id % 2 === 0 ? "flex-row-reverse !items-end" : ""}
                            `}>
                                <div className="w-0 lg:w-[45%]">

                                </div>
                                <div className="w-full lg:w-[52%]">
                                    <motion.span
                                        variants={headingVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="text-[1.5rem] sm:text-[1.7rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem] font-semibold block"
                                    >
                                        {item.title}
                                    </motion.span>
                                    <p className="mt-[0.4rem] lg:mt-[1rem] text-[0.85rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <div className={`
                            w-[35%] hidden lg:flex justify-start relative
                            ${item.id % 2 === 0 ? "justify-end" : ""}
                        `}>
                            <img
                                src="/images/artboard.avif"
                                alt="Artboard"
                                loading="lazy"
                                className="
                                    w-[85%] filter invert absolute
                                    top-[-4rem] sm:top-[-2rem] lg:top-[-3rem] xl:top-[-3.5rem] 2xl:top-[-4rem]
                                "
                            />
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default MissionVision
