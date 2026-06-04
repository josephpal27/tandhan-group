const highlightsData = [
    {
        id: 1,
        title: "31+",
        desc: "Years of Experience",
        icon: "/images/icons/quality.png",
    },
    {
        id: 2,
        title: "3,000+",
        desc: "Clients Served",
        icon: "/images/icons/client.png",
    },
    {
        id: 3,
        title: "25+",
        desc: "Country Presence",
        icon: "/images/icons/country.png",
    },
    {
        id: 4,
        title: "2000+",
        desc: "Total Workforce",
        icon: "/images/icons/team.png",
    },
]

const Highlights = () => {
    return (
        <section className="
            px-[1rem] sm:px-[10%] lg:px-[14%]
            pb-[3rem] sm:pb-[2rem] lg:pb-[3rem] xl:pb-[3.5rem] 2xl:pb-[4rem]
            mt-[5rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
            flex justify-between flex-wrap
            bg-[linear-gradient(to_bottom,white_40%,#1a2ba8_40%)]
        ">
            {highlightsData.map((highlight) => {
                return(
                    <div key={highlight.id} className="
                        w-[23.5%] bg-white flex flex-col items-center text-center shadow-[rgba(0,0,0,0.24)_0px_3px_20px]
                        p-[1.1rem] sm:p-[1.2rem] lg:p-[1.3rem] xl:p-[1.4rem] 2xl:p-[1.5rem]
                    ">
                        <img src={highlight.icon} alt={highlight.title} className="w-[45%]" />
                        <span className="
                            text-[2rem] sm:text-[1.6rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem]
                            font-semibold block
                            mt-[1rem] sm:mt-[1rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
                        ">
                            {highlight.title}
                        </span>
                        <p className="
                            font-semibold 
                            text-[1.1rem] sm:text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem]
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
