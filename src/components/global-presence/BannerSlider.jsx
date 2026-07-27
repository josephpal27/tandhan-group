"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { globalPresenceData } from "@/data/globalPresenceData";

const BannerSlider = ({ className = "" }) => {
    const topRowRef = useRef(null);
    const bottomRowRef = useRef(null);

    const half = Math.ceil(globalPresenceData.length / 2);
    const topCountries = globalPresenceData.slice(0, half);
    const bottomCountries = globalPresenceData.slice(half);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                topRowRef.current,
                { xPercent: 0 },
                { xPercent: -50, duration: 50, ease: "none", repeat: -1 }
            );

            gsap.fromTo(
                bottomRowRef.current,
                { xPercent: -50 },
                { xPercent: 0, duration: 50, ease: "none", repeat: -1 }
            );
        });

        return () => ctx.revert();
    }, []);

    const renderCard = (item, key, textPos) => (
        <div
            key={key}
            className="
                relative overflow-hidden cursor-pointer aspect-[16/10] hrink-0
                w-[140px] sm:w-[160px] lg:w-[155px] xl:w-[180px] 2xl:w-[200px]
                mx-[0.2rem] lg:mx-[0.4rem] 
            "
        >
            <img
                src={item.banner}
                alt={item.country}
                loading="lazy"
                className="w-full h-full object-cover scale-[1.1]"
            />
            <div
                className={`absolute bottom-0 w-full px-3 py-1.5 lg:px-4 lg:py-2 flex from-black/80 via-black/50 to-transparent ${textPos === "left"
                        ? "justify-start bg-gradient-to-r"
                        : "justify-end bg-gradient-to-l"
                    }`}
            >
                <span className="text-white font-semibold tracking-wider uppercase text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                    {item.country}
                </span>
            </div>
        </div>
    );

    const renderRow = (countries, prefix, textPos) =>
        [...countries, ...countries].map((item, i) =>
            renderCard(item, `${prefix}-${i}`, textPos)
        );

    return (
        <div className={`w-full overflow-hidden ${className}`}>
            {/* Top row: text right-aligned */}
            <div className="overflow-hidden w-full">
                <div
                    ref={topRowRef}
                    className="flex w-max"
                    style={{ willChange: "transform" }}
                >
                    {renderRow(topCountries, "top", "right")}
                </div>
            </div>

            {/* Bottom row: text left-aligned */}
            <div className="overflow-hidden w-full mt-[0.6rem] md:mt-[0.8rem]">
                <div
                    ref={bottomRowRef}
                    className="flex w-max"
                    style={{ willChange: "transform" }}
                >
                    {renderRow(bottomCountries, "bottom", "left")}
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;