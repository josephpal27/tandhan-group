"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const SectorsFAQ = ({ description, image, faqs }) => {

    const [openFaq, setOpenFaq] = useState(0); // first item open by default

    const handleToggle = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="pt-[1rem] sm:pt-[2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap">

            {/* FAQ */}
            <div className="w-full lg:w-[47%]">
                <motion.h6
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    FAQs
                </motion.h6>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    {description}
                </p>

                <div className="mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.3rem] xl:mt-[2.7rem] 2xl:mt-[3rem]">
                    {faqs.map((faq, index) => {

                        const isOpen = openFaq === index;

                        return (
                            <div key={index} className="
                                border-b-[2px] lg:border-b-[3px] border-[#9f9f9f] 
                                mb-[0.9rem] sm:mb-[1.2rem] lg:mb-[1.3rem] xl:mb-[1.4rem] 2xl:mb-[1.5rem]
                                pb-[0.8rem] sm:pb-[1.2rem] lg:pb-[1.3rem] xl:pb-[1.4rem] 2xl:pb-[1.5rem]
                            ">
                                {/* Question */}
                                <div className="
                                    flex items-center justify-between cursor-pointer select-none px-0 lg:px-[1rem]
                                "
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="w-[92%]">
                                        <span className="text-[1.1rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-bold">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className="w-[7%] flex justify-end">
                                        <FaPlus className={`
                                            text-[0.8rem] sm:text-[0.9rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] transition ${isOpen ? "rotate-45 scale-[1.06]" : ""}
                                        `} />
                                    </div>
                                </div>

                                {/* Answer */}
                                <div className={`
                                    overflow-hidden transition-all duration-300 ease px-0 lg:px-[1rem]
                                    ${isOpen ? "max-h-[300px] mt-[0.9rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]" : "max-h-0"}
                                `}>
                                    <p className="text-[0.95rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[46%] mt-[1rem] lg:mt-0">
                <img src={image} alt="FAQ" loading="lazy" className="w-full" />
            </div>

        </section>
    )
}

export default SectorsFAQ
