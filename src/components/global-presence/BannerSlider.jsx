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
            className="country-card relative overflow-hidden cursor-pointer w-[150px] lg:w-[200px] shrink-0 mx-[0.4rem] md:mx-[0.4rem] aspect-[16/10]"
        >
            <img
                src={item.banner}
                alt={item.country}
                loading="lazy"
                className="w-full h-full object-cover scale-[1.15]"
            />
            <div
                className={`absolute bottom-0 w-full px-3 py-1.5 md:px-4 md:py-2 flex from-black/80 via-black/50 to-transparent ${textPos === "left"
                        ? "justify-start bg-gradient-to-r"
                        : "justify-end bg-gradient-to-l"
                    }`}
            >
                <span className="country-card-text text-white text-sm md:text-base font-semibold tracking-wider uppercase">
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