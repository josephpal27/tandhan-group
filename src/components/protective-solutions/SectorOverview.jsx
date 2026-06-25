
const SectorOverview = () => {
    return (
        <section className="flex justify-between flex-wrap">

            {/* Left */}
            <div className="w-[30%] pt-[5rem]">
                <h2>
                    Sector Overview
                </h2>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur asperiores nihil repellat.
                </p>
                <button className="
                    mt-[2.5rem] bg-secondary hover:bg-primary text-white font-semibold transition
                    py-[0.5rem] px-[1.5rem]
                ">
                    Read More
                </button>
            </div>

            {/* Center */}
            <div className="w-[32%]">
                <img 
                    src="/images/sectors/protective-solutions/overview-bg.png" 
                    alt="Sector Overview" 
                    loading="lazy" 
                    className="w-full" 
                />
            </div>

            {/* Right */}
            <div className="w-[30%] flex items-end pb-[3rem]">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima adipisicing tenetur asperiores nihil repellat pariatur explicabo tenetur exercitationem molestiae ducimus fugiat.
                </p>
            </div>

        </section>
    )
}

export default SectorOverview
