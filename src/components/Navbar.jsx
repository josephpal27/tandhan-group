"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Body scroll lock
    useEffect(() => {
        if (open) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [open]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about/" },
        { name: "Our Businesses", href: "/businesses/" },
        { name: "Sustainability & Impact", href: "/sustainability/" },
        { name: "Media", href: "/media/" },
        { name: "Careers", href: "/careers/" },
        { name: "Contact Us", href: "/contact/" },
    ];

    const contactLinks = [
        {
            icon: <SlLocationPin />,
            label: "Visit Us",
            value: "Demo Address, Demo City",
            url: "/",
        },
        {
            icon: <LuPhone />,
            label: "Call Us",
            value: "+91 00000 00000",
            url: "/",
        },
        {
            icon: <LuMessageSquareText />,
            label: "Email Us",
            value: "example@gmail.com",
            url: "/",
        },
    ]

    return (
        <>
            <nav className={`
                absolute top-0 left-0 w-full z-50
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[1.5rem]
                border-b border-white/20
            `}>

                <header className="flex justify-between items-center">
                    <div>
                        <img
                            src="/images/logo/logo.png"
                            alt="Tandhan Group"
                            loading="lazy"
                            className="w-[250px] brightness-0 invert"
                        />
                    </div>
                    <div className="flex gap-[2rem]">
                        {contactLinks.map((item, index) => {
                            return(
                                <div key={index} className="flex items-center gap-[0.5rem] text-white">
                                    <div className="text-[2rem]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="block text-[0.8rem] leading-[1]">
                                            {item.label}
                                        </span>
                                        <Link href={item.url} className="block text-[0.95rem]">
                                            {item.value}   
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </header>

                <div className="flex items-center justify-between mt-[2rem]">

                    {/* Left Links */}
                    <ul className="hidden md:flex items-center gap-[2rem] sm:gap-[1.5rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-[3rem]">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`
                                            transition-colors duration-200 text-white
                                            ${isActive ? "font-bold underline underline-offset-8" : "hover:text-white/90"}
                                        `}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:block z-10">
                        <Link
                            href="/contact/"
                            className="bg-secondary hover:bg-white text-white hover:text-black px-[1.2rem] py-[0.2rem] rounded-md transition-colors duration-200"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden z-10">
                        <button onClick={() => setOpen(true)}>
                            <FiMenu size={26} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <div className={`fixed top-0 left-0 h-full w-[70%] max-w-sm bg-[#f7f7f7] z-50 shadow-lg transform transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center px-[1rem] py-[1.5rem] border-b">
                    <img src="/images/logo/logo.png" alt="Tandhan Group" className="w-[110px]" />
                    <button onClick={() => setOpen(false)}>
                        <FiX size={24} />
                    </button>
                </div>

                <ul className="flex flex-col gap-[1.3rem] p-[1rem] mt-[1rem]">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={() => setOpen(false)} className="font-[550] text-black">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="p-[1rem] mt-[0.5rem]" onClick={() => setOpen(false)}>
                    <Link href="/contact/" className="bg-primary text-white px-5 py-2.5 rounded-full">
                        Get In Touch
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;