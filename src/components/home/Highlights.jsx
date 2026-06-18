"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const highlightsData = [
    { id: 1, title: 31, suffix: "+", desc: "Years of Experience", icon: "/images/icons/quality.avif" },
    { id: 2, title: 3000, suffix: "+", desc: "Clients Served", icon: "/images/icons/client.avif" },
    { id: 3, title: 25, suffix: "+", desc: "Country Presence", icon: "/images/icons/country.avif" },
    { id: 4, title: 2000, suffix: "+", desc: "Total Workforce", icon: "/images/icons/team.avif" },
]

const CountUp = ({ target, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (!isInView) return

        let startTime = null
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // ease out
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [isInView, target, duration])

    return (
        <span ref={ref} className="
            text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]
            font-semibold block
            mt-[0.5rem] sm:mt-[0.7rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
        ">
            {target >= 1000 ? count.toLocaleString() : count}{suffix}
        </span>
    )
}

const Highlights = () => {
    return (
        <section className="
            px-[1rem] sm:px-[10%] lg:px-[14%]
            pb-[1.5rem] sm:pb-[1.7rem] lg:pb-[3rem] xl:pb-[3.5rem] 2xl:pb-[4rem]
            mt-[3.5rem] sm:mt-[3.8rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
            flex justify-between flex-wrap
            bg-[linear-gradient(to_bottom,white_70%,black_60%)] lg:bg-[linear-gradient(to_bottom,white_40%,black_40%)]
        ">
            {highlightsData.map((highlight) => {
                return (
                    <div key={highlight.id} className="
                        w-[48%] lg:w-[23.5%] bg-white flex flex-col items-center text-center shadow-[rgba(0,0,0,0.24)_0px_3px_20px]
                        p-[0.5rem] sm:p-[0.7rem] lg:p-[1.3rem] xl:p-[1.4rem] 2xl:p-[1.5rem] mb-[1rem] lg:mb-0
                    ">
                        <img src={highlight.icon} alt={highlight.title} loading="lazy" className="w-[35%] lg:w-[45%] mt-[0.5rem] lg:mt-0" />
                        <CountUp target={highlight.title} suffix={highlight.suffix} />
                        <p className="
                            font-semibold 
                            text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
                            mb-[0.5rem] lg:mb-0
                        ">
                            {highlight.desc}
                        </p>
                    </div>
                )
            })}
        </section>
    )
}

export default Highlights
