"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const faqData = [
    {
        id: 1,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
    },
    {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
    },
]

const SectorsFAQ = () => {

    const [openFaq, setOpenFaq] = useState(0); // first item open by default

    const handleToggle = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="pt-[2rem] sm:pt-[2.2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap">

            {/* FAQ */}
            <div className="w-[47%]">
                <h6>
                    FAQs
                </h6>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident.
                </p>

                <div className="mt-[3rem]">
                    {faqData.map((faq, index) => {

                        const isOpen = openFaq === index;

                        return (
                            <div key={index} className="
                                border-b-[3px] border-[#9f9f9f] mb-[1.5rem] pb-[1.5rem] 
                            ">
                                {/* Question */}
                                <div className="
                                    flex items-center justify-between cursor-pointer select-none px-[1rem]
                                " 
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className="w-[92%]">
                                        <span className="text-[1.3rem] font-bold">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className="w-[7%] flex justify-end">
                                        <FaPlus className={`
                                            text-[0.8rem] transition ${isOpen ? "rotate-45 scale-[1.06]" : ""}
                                        `} />
                                    </div>
                                </div>  

                                {/* Answer */}
                                <div className={`
                                    overflow-hidden transition-all duration-300 ease px-[1rem]
                                    ${isOpen ? "max-h-[300px] mt-[1rem]" : "max-h-0"}
                                `}>
                                    <p className="text-[1rem]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Image */}
            <div className="w-[46%]">
                <img src="/images/sectors/protective-solutions/faq.png" alt="FAQ" loading="lazy" className="w-full" />
            </div>

        </section>
    )
}

export default SectorsFAQ
