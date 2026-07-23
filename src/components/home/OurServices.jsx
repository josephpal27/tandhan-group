"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const servicesData = [
    {
        id: 1,
        title: "Protective Solutions",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/2.avif",
        logos: ["/images/logo/tandhan-polyplast.png"],
        url: "/protective-solutions",
    },
    {
        id: 2,
        title: "Energy Solutions",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/3.avif",
        logos: ["/images/logo/tandhan-power.png"],
        url: "/energy-solutions",
    },
    {
        id: 3,
        title: "Textiles",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/4.avif",
        logos: ["/images/logo/tandhan-denim.png", "/images/logo/tandhan-saree.png", "/images/logo/tandhan-fashion.png"],
        url: "/textiles",
    },
    {
        id: 4,
        title: "Hospitality",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/1.avif",
        logos: ["/images/logo/nx-hotel.png"],
        url: "/hospitality",
    },
]

const ServiceCard = ({ service, isOpen, cardRef, onToggle }) => {
    return (
        <div
            ref={cardRef}
            data-id={service.id}
            onClick={() => onToggle(service.id)}
            className="
                w-full lg:w-[25%] relative overflow-hidden cursor-pointer group
                border-b-[7px] border-primary
                mb-[1rem] lg:mb-0
            "
        >
            <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-[5/4] object-cover"
            />

            {/* Layer */}
            <div
                className={`
                    absolute top-0 left-0 w-full h-full flex justify-center items-center
                    bg-primary bg-opacity-50 p-[2rem] transition duration-300
                    lg:group-hover:opacity-0 lg:group-hover:scale-105
                    ${isOpen ? "opacity-0 scale-105 lg:opacity-100 lg:scale-100" : ""}
                `}
            >
                <span className="
                    text-white text-center text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold
                ">
                    {service.title}
                </span>
            </div>

            {/* Box */}
            <Link href={service.url}
                className={`
                    absolute bottom-0 left-0 w-[70%] lg:w-[85%] h-[70%] lg:h-[80%] p-[1rem] bg-white
                    flex flex-col justify-center items-center overflow-hidden
                    gap-[0.3rem] divide-y divide-gray-200
                    transition-transform duration-500
                    lg:-translate-x-[105%] lg:group-hover:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-[105%]"}
                `}
            >
                {service.logos.map((logo, index) => (
                    <img
                        src={logo}
                        alt="Logo"
                        key={index}
                        className="w-[80%] lg:w-[60%] pt-[0.6rem] lg:py-[0.8rem]"
                    />
                ))}
            </Link>
        </div>
    )
}

const OurServices = () => {
    const [openId, setOpenId] = useState(null)
    const cardRefs = useRef({})
    const manualOverride = useRef(false) // true right after a click, so scroll doesn't fight it

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (manualOverride.current) return // user just clicked, let scroll settle before re-taking over

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = Number(entry.target.dataset.id)
                        setOpenId(id)
                    }
                })
            },
            {
                threshold: 0,
                rootMargin: "-45% 0px -45% 0px", // thin band at vertical center of viewport
            }
        )

        Object.values(cardRefs.current).forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    const handleToggle = (id) => {
        manualOverride.current = true
        setOpenId((prev) => (prev === id ? null : id))

        // release the override after a short delay so scroll-driven behavior resumes
        window.clearTimeout(handleToggle._t)
        handleToggle._t = window.setTimeout(() => {
            manualOverride.current = false
        }, 800)
    }

    return (
        <section className="pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] xl:pt-[3rem] 2xl:pt-[3.5rem]">
            <div className="flex justify-between flex-wrap">
                {servicesData.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        isOpen={openId === service.id}
                        cardRef={(el) => (cardRefs.current[service.id] = el)}
                        onToggle={handleToggle}
                    />
                ))}
            </div>
        </section>
    )
}

export default OurServices