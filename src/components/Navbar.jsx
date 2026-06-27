"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";
import { MdChevronRight, MdArrowDropDown } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [activeSector, setActiveSector] = useState(0);
    const navRef = useRef(null);
    const hideTimeoutRef = useRef(null);
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

    const handleMouseEnter = () => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        setMegaMenuOpen(true);
    };

    const handleMouseLeave = () => {
        hideTimeoutRef.current = setTimeout(() => {
            setMegaMenuOpen(false);
        }, 150);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about/" },
        { name: "Our Businesses", href: "", hasMega: true },
        { name: "Sustainability & Impact", href: "/sustainability/" },
        { name: "Media", href: "/media/" },
        { name: "Global Presence", href: "/grobal-presence/" },
        { name: "Careers", href: "/careers/" },
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

    const brandLogos = [
        { name: "Tandhan Polyplast", image: "/images/logo/tandhan-polyplast.png" },
        { name: "Tandhan Power", image: "/images/logo/tandhan-power.png" },
        { name: "Tandhan Denim", image: "/images/logo/tandhan-denim.png" },
        { name: "Tandhan Fashion", image: "/images/logo/tandhan-fashion.png" },
        { name: "Tandhan Exim", image: "/images/logo/tandhan-exim.png" },
        { name: "NX Hotel", image: "/images/logo/nx-hotel-2.png" },
    ];

    const sectorsData = [
        {
            sectorName: "Protective Solutions",
            image: "/images/sectors/2.avif",
            title: "Protective Solutions",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/protective-solutions",
        },
        {
            sectorName: "Energy Solutions",
            image: "/images/sectors/3.avif",
            title: "Energy Solutions",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/",
        },
        {
            sectorName: "Textiles",
            image: "/images/sectors/4.avif",
            title: "Textiles",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/",
        },
        {
            sectorName: "Hospitality",
            image: "/images/sectors/1.avif",
            title: "Hospitality",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "/",
        },
    ]

    return (
        <>
            <nav className={`
                absolute top-0 left-0 w-full z-50
                px-[1rem] sm:px-[5%] lg:px-[7%]
                py-[1.2rem] sm:py-[1.2rem] lg:py-[1.3rem] xl:py-[1.4rem] 2xl:py-[1.5rem]
                border-b border-white/20 bg-white
            `}>

                <header className="hidden lg:flex justify-between items-center">
                    <div>
                        <Link href="/">
                            <img
                                src="/images/logo/logo.png"
                                alt="Tandhan Group"
                                loading="lazy"
                                className="w-[100px] sm:w-[200px] lg:w-[190px] xl:w-[215px] 2xl:w-[240px]"
                            />
                        </Link>
                    </div>
                    <div className="flex gap-[2rem] sm:gap-[1.7rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-[2rem]">
                        {contactLinks.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center gap-[0.5rem] text-primary">
                                    <div className="text-[2rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="block text-[0.8rem] sm:text-[0.7rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[0.8rem] leading-[1]">
                                            {item.label}
                                        </span>
                                        <a href={item.url} className="block text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.85rem] 2xl:text-[0.95rem]">
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </header>

                <div className="flex items-center justify-between mt-[0.2rem] lg:mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]">

                    {/* Left Logo (Mobile View Only) */}
                    <div className="block lg:hidden">
                        <img
                            src="/images/logo/logo.png"
                            alt="Tandhan Group Logo"
                            loading="lazy"
                            className="w-[130px] brightness-0 invert"
                        />
                    </div>

                    {/* Left Links */}
                    <ul className="hidden md:flex items-center gap-[2rem] sm:gap-[2rem] lg:gap-[2.3rem] xl:gap-[2.7rem] 2xl:gap-[3rem]">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li
                                    key={link.name}
                                    onMouseEnter={link.hasMega ? handleMouseEnter : undefined}
                                    onMouseLeave={link.hasMega ? handleMouseLeave : undefined}
                                >
                                    {link.hasMega ? (
                                        <button
                                            className={`
                                                transition-colors duration-200 text-primary flex items-center
                                                ${isActive ? "font-bold underline underline-offset-8" : ""}
                                            `}
                                        >
                                            {link.name} <MdArrowDropDown className={`
                                                text-[1.6rem] lg:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[1.6rem] transition duration-300
                                                ${megaMenuOpen ? "rotate-180" : ""}
                                            `}/>
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`
                                                transition-colors duration-200 text-primary
                                                ${isActive ? "font-bold underline underline-offset-8" : ""}
                                            `}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA */}
                    <div className="hidden md:block z-10">
                        <Link
                            href="/contact/"
                            className="bg-white hover:bg-primary text-primary hover:text-white 
                            px-[1.2rem] sm:px-[1.1rem] lg:px-[1rem] xl:px-[1.1rem] 2xl:px-[1.2rem]
                            py-[0.15rem] border-primary border-[3px] font-[500]
                            transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden z-10 text-white mt-[0.2rem]">
                        <button onClick={() => setOpen(true)}>
                            <FiMenu size={26} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mega Menu - Desktop Only */}
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ paddingTop: navRef.current?.offsetHeight ?? 160 }}
                className={`
                    absolute top-[0.7rem] left-[7%] w-[86%] z-[49]
                    hidden lg:block
                    transition-all duration-300 ease-in-out
                    ${megaMenuOpen
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }
                `}
            >
                <div className="
                    bg-white shadow-2xl flex justify-between overflow-hidden
                ">
                    {/* Our Brands */}
                    <div className="w-[50%] flex justify-between">
                        <div className="w-[50%] bg-[#e2e3de] p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]">
                            <span className="
                                text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold
                            ">
                                Our Brands
                            </span>
                            <ul className="
                                mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                            ">
                                {brandLogos.map((brand, index) => {
                                    return (
                                        <li key={index} className="
                                            mb-[1.6rem] xl:mb-[1.8rem] 2xl:mb-[2rem] last:mb-0
                                        ">
                                            <img
                                                src={brand.image}
                                                alt={brand.name}
                                                loading="lazy"
                                                className="w-[55%]"
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        {/* Our Sectors */}
                        <div className="w-[50%] bg-[#eeefea] p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]">
                            <span className="
                                text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold
                            ">
                                Our Sectors
                            </span>
                            <ul className="
                                mt-[1.6rem] xl:mt-[1.8rem] 2xl:mt-[2rem]
                            ">
                                {sectorsData.map((sector, index) => {
                                    return (
                                        <li 
                                            key={index} 
                                            onMouseEnter={() => setActiveSector(index)}
                                            className="flex justify-between items-center py-[0.8rem] xl:py-[0.9rem] 2xl:py-[1rem] px-[0.6rem] xl:px-[0.8rem] 2xl:px-[1rem] border-b-[1px] border-gray-300 cursor-pointer hover:bg-[#e8e8e4]"
                                        >
                                            <span className="text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-semibold">
                                                {sector.sectorName}
                                            </span>
                                            <MdChevronRight className="text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]" />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Sector Preview */}
                    <div className="w-[50%] p-[1.5rem] xl:p-[1.8rem] 2xl:p-[2rem]">
                        <div className="relative overflow-hidden">
                            <img 
                                key={activeSector}
                                src={sectorsData[activeSector].image}
                                alt={sectorsData[activeSector].sectorName}
                                loading="lazy" 
                                className="w-full aspect-[7/5]" 
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem] text-white bg-gradient-to-b from-transparent to-primary">
                                <span className="text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.7rem] font-bold">
                                    {sectorsData[activeSector].title}
                                </span>
                                <p className="text-[0.65rem] xl:text-[0.75rem] 2xl:text-[0.85rem] mt-[0.3rem]">
                                    {sectorsData[activeSector].desc}
                                </p>
                                <div className="flex justify-end">
                                    <Link href={sectorsData[activeSector].url} className="flex items-center text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] gap-[3px] mt-[0.7rem] hover:underline group w-max">
                                    Visit Site  <HiArrowSmRight className="text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.4rem] rotate-[-45deg] group-hover:rotate-0 transition" />
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Mobile Drawer */}
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
                    <Link href="/contact/" className="bg-primary text-white px-4 py-1.5 rounded-md">
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;