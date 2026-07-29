"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import { teamData } from "@/data/teamData";

const tabHeads = [
    { id: 1, name: "Management Committee" },
    { id: 2, name: "Board of Directors" },
    { id: 3, name: "Chairman Emeritus" },
]

const TeamGrid = ({ members }) => (
    <div className="flex flex-wrap gap-[3%] mt-[2rem] lg:mt-[3rem]">
        {members.map((team) => (
            <div key={team.id} className="
                w-[48.5%] lg:w-[31.3%] cursor-pointer group 
                mb-[1.5rem] sm:mb-[1.7rem] lg:mb-[2.6rem] xl:mb-[2.8rem] 2xl:mb-[3rem]
            ">
                <div className="overflow-hidden">
                    <img src={team.image} alt={team.name} loading="lazy" className="w-full group-hover:scale-[1.05] transition duration-300" />
                </div>
                <div>
                    <span className="
                        block mt-[0.6rem] lg:mt-[1rem] text-[1rem] sm:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold
                    ">
                        {team.name}
                    </span>
                    <p className="
                        text-[0.75rem] sm:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]
                    ">
                        {team.position}
                    </p>
                </div>
            </div>
        ))}
    </div>
);

const TeamList = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="
            pt-[2.5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[1rem] sm:pb-[1.5rem] lg:pb-[2rem] xl:pb-[2.5rem] 2xl:pb-[3rem]
        ">
            <motion.h2
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
            >
                Our Leaders
            </motion.h2>
            <p className="mt-[0.8rem] lg:mt-[1.2rem] w-full lg:w-[55%] mx-auto text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat labore accusantium doloremque natus ipsa quod voluptas ullam quisquam corporis.
            </p>

            {/* Head */}
            <div className="
                border-primary border-b-[2px] xl:border-b-[2.5px] 2xl:border-b-[3px]
                pb-[0.7rem] sm:pb-[0.9rem] lg:pb-[0.8rem] xl:pb-[0.9rem] 2xl:pb-[1rem]
                my-[1.5rem] sm:my-[2rem] lg:my-[2.6rem] xl:my-[2.8rem] 2xl:my-[3rem]
                flex lg:justify-around gap-[0.3rem] lg:gap-[2rem] flex-wrap
            ">
                {tabHeads.map((head) => {

                    const isActive = activeTab === head.id;

                    return (
                        <button
                            key={head.id}
                            onClick={() => setActiveTab(head.id)}
                            className={`
                                text-[1.3rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                                font-semibold cursor-pointer transition-colors duration-300 w-full lg:w-max text-left
                                ${isActive ? "text-primary" : "text-[#c4c4c4]"}
                            `}
                        >
                            {head.name}
                        </button>
                    )
                })}
            </div>

            {/* List */}
            <div>
                <AnimatePresence mode="wait">
                    {activeTab === 1 && (
                        <motion.div
                            key="management"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <TeamGrid members={teamData.filter((t) => t.tab === 1)} />
                        </motion.div>
                    )}

                    {activeTab === 2 && (
                        <motion.div
                            key="directors"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <TeamGrid members={teamData.filter((t) => t.tab === 2)} />
                        </motion.div>
                    )}

                    {activeTab === 3 && (
                        <motion.div
                            key="chairman"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            <TeamGrid members={teamData.filter((t) => t.tab === 3)} />
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

        </section>
    )
}

export default TeamList