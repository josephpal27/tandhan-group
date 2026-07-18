"use client";

import { FaLocationDot } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import ContactForm from "./ContactForm";

const contactDetails = [
    {
        id: 1,
        icon: <FaLocationDot />,
        label: "Head Office Address",
        content: "Martin Burn Business Park, 18th floor, Plot 3, Salt Lake Bypass, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
        url: "",
        target: "_blank",
    },
    {
        id: 2,
        icon: <BiSupport />,
        label: "Let's Talk",
        content: "+91 9051161666",
        url: "",
        target: "_self",
    },
    {
        id: 3,
        icon: <IoMailOutline />,
        label: "Email Us",
        content: "marketing@tandhangroup.com",
        url: "",
        target: "_self",
    },
]

const GetInTouch = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            flex justify-between flex-wrap
        ">

            {/* Content */}
            <div className="w-[45%]">
                <h2>
                    Get In Touch
                </h2>
                <p className="mt-[0.7rem] lg:mt-[1rem]">
                    As we shape the blueprint for a brighter tomorrow, your insights and interactions drive us forward. Let’s journey together.
                </p>

                <div className="mt-[1.7rem] lg:mt-[2.5rem]">
                    {contactDetails.map((item, index) => {
                        return (
                            <div key={index} className="
                                mb-[1.3rem] flex gap-[1rem]
                            ">
                                <div className="text-[2rem] pt-[0.3rem]">
                                    {item.icon}
                                </div>
                                <div>
                                    <span className="
                                        text-[1.8rem] font-semibold block
                                    ">
                                        {item.label}
                                    </span>
                                    <a href="" target={item.target} className="
                                        mt-[0.2rem] block
                                    ">
                                        {item.content}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Form */}
            <div className="w-[50%]">
                <ContactForm />
            </div>

        </section>
    )
}

export default GetInTouch
