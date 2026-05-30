import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";

const footerData = [
    {
        id: 1,
        title: "Quick Links",
        links: [
            { label: "Home", url: "/", },
            { label: "About Us", url: "/about", },
            { label: "Our Businesses", url: "/businesses", },
            { label: "Sustainability & Impact", url: "/sustainability-impact", },
            { label: "Media", url: "/media", },
            { label: "Careers", url: "/careers", },
            { label: "Contact Us", url: "/contact", },
        ]
    },
    {
        id: 2,
        title: "Our Sectors",
        links: [
            { label: "Sector 1", url: "/", },
            { label: "Sector 2", url: "/", },
            { label: "Sector 3", url: "/", },
            { label: "Sector 4", url: "/", },
        ]
    },
]

const contactLinks = [
    {
        label: "Address",
        url: "/",
        icon: <SlLocationPin />,
        target: "_blank",
    },
    {
        label: "example@gmail.com",
        url: "mailto:example@gmail.com",
        icon: <LuMessageSquareText />,
        target: "_self",
    },
    {
        label: "+91 00000 00000",
        url: "tel:+910000000000",
        icon: <LuPhone />,
        target: "_self",
    },
]

const Footer = () => {
    return (
        <footer className="
            bg-primary
        ">
            {/* Top */}
            <div className="
                pr-[1rem] sm:pr-[5%] lg:pr-[7%]
                pl-[1rem] sm:pl-[5%] lg:pl-0
                flex justify-between flex-wrap
            ">
                {/* Left */}
                <div className="w-[35%] relative">
                    <img src="/images/footer-bg.avif" alt="Footer Background" loading="lazy" className="w-full" />
                    <div className="
                        absolute top-0 right-0 w-[78%] h-full bg-secondary/90 text-black
                        p-[1rem] sm:p-[1.5rem] lg:p-[1.6rem] xl:p-[1.8rem] 2xl:p-[2rem]
                    ">
                        <img
                            src="/images/logo/logo.png"
                            alt="Tandhan Group"
                            loading="lazy"
                            className="w-[190px] sm:w-[150px] lg:w-[150px] xl:w-[170px] 2xl:w-[190px]"
                        />
                        <p className="font-[500] mt-[1.5rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur, delectus consequatur eos! Id, sed corrupti.
                        </p>
                        <p className="font-[500] mt-[1rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="w-[60%] pt-[4rem] sm:pt-[3rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem] flex justify-between flex-wrap">

                    {/* Quick Links & Sectors */}
                    {footerData.map((item, index) => {
                        return (
                            <div key={index} className="
                                w-[32%] text-white
                            ">
                                <span className="text-[1.5rem] sm:text-[1.5rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
                                    {item.title}
                                </span>
                                <ul className="mt-[1.2rem] sm:mt-[1.3rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
                                    {item.links.map((link, index) => {
                                        return (
                                            <li key={index} className="mt-[0.5rem]">
                                                <Link href={link.url} className="
                                                    flex items-center gap-[0.1rem]
                                                    hover:text-secondary transition
                                                ">
                                                    <BsDot /> {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}

                    {/* Get In Touch */}
                    <div className="w-[32%] text-white">
                        <span className="text-[1.5rem] sm:text-[1.5rem] lg:text-[1.15rem] xl:text-[1.35rem] 2xl:text-[1.5rem] font-semibold">
                            Get In Touch
                        </span>
                        <ul className="mt-[1.2rem] sm:mt-[1.3rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
                            {contactLinks.map((item, index) => (
                                <li key={index} className="mt-[0.5rem]">
                                    <a href={item.url} target={item.target}
                                        className="flex items-center gap-[0.5rem] hover:text-secondary transition"
                                    >
                                        {item.icon} {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="py-[1rem] sm:py-[1rem] lg:py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem] px-[1rem] bg-[#05115f]">
                <p className="text-center text-[1rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-white">
                    Copyright © 2026 | Tandhan Group | All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer