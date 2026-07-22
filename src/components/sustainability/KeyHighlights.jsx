
const highlightsData = [
    {
        text: "Sustainable product <br/> innovation",
        top: "14%", left: "-14%",
        align: "right",
    },
    {
        text: "Zero Liquid Discharge <br/> (ZLD) systems",
        top: "15%", left: "104%",
        align: "left",
    },
    {
        text: "Renewable energy adoption <br/> across manufacturing",
        top: "94%", left: "-20%",
        align: "right",
    },
    {
        text: "1 million litres of water <br/> recycled daily",
        top: "85%", left: "101.5%",
        align: "left",
    },
    {
        text: "Responsible manufacturing practices",
        top: "103%", left: "36%",
        align: "center",
    },
];

const KeyHighlights = () => {
    return (
        <section className="
            pt-[1.7rem] sm:pt-[2.2rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem] 
            pb-[1.7rem] sm:pb-[2rem] lg:pb-[1.5rem] xl:pb-[2rem] 2xl:pb-[2.5rem] 
            hidden lg:flex justify-center overflow-hidden lg:overflow-visible
        ">
            <div className="relative w-[55%]">
                <img
                    src="/images/sustainability/circle.avif"
                    alt="Highlights"
                    loading="lazy"
                    className="w-full"
                />

                {highlightsData.map((item, i) => (
                    <p
                        key={i}
                        className={`
                            absolute leading-tight font-medium w-max
                            text-primary hidden lg:block
                            ${item.align === "right" ? "text-right" : ""}
                            ${item.align === "left" ? "text-left" : ""}
                            ${item.align === "center" ? "text-center" : ""}
                        `}
                        style={{ top: item.top, left: item.left }}
                        dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                ))}
            </div>
        </section>
    );
};

export default KeyHighlights;