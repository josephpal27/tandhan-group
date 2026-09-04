
const highlightsData = [
    {
        text: "Sustainable product <br/> innovation",
        top: "25%", left: "-25%",
        align: "right",
    },
    {
        text: "Zero Liquid Discharge <br/> (ZLD) systems",
        top: "24%", left: "99%",
        align: "left",
    },
    {
        text: "Renewable energy adoption <br/> across manufacturing",
        top: "81%", left: "-32.5%",
        align: "right",
    },
    {
        text: "1 million litres of water <br/> recycled daily",
        top: "80%", left: "98%",
        align: "left",
    },
    // {
    //     text: "Responsible manufacturing practices",
    //     top: "103%", left: "36%",
    //     align: "center",
    // },
];

const KeyHighlights = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[2.5rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem] 
            pb-[1.7rem] sm:pb-[2rem] lg:pb-[0.7rem] xl:pb-[0.8rem] 2xl:pb-[1rem] 
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