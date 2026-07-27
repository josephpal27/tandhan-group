"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { teamData } from "@/data/teamData";

const TeamList = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[1rem] sm:pb-[1.5rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]
        ">
            <motion.h6
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Our Leaders
            </motion.h6>
            <p className="mt-[0.8rem] lg:mt-[1.2rem] w-full lg:w-[55%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat labore accusantium doloremque natus ipsa quod voluptas ullam quisquam corporis.
            </p>

            {/* Row */}
            <div className="flex flex-wrap gap-[2%] mt-[3rem]">
                {teamData.map((team, index) => {
                    return (
                        <div key={index} className="
                            w-[23.5%] cursor-pointer group 
                            mb-[1.8rem] sm:mb-[2rem] lg:mb-[2.6rem] xl:mb-[2.8rem] 2xl:mb-[3rem]
                        ">
                            <div className="overflow-hidden">
                                <img src={team.image} alt={team.name} loading="lazy" className="w-full group-hover:scale-[1.05] transition duration-300" />
                            </div>
                            <div>
                                <span className="
                                    block mt-[1rem] text-[1.2rem] sm:text-[1.25rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold
                                ">
                                    {team.name}
                                </span>
                                <p className="
                                    text-[0.9rem] sm:text-[1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                                ">
                                    {team.position}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TeamList