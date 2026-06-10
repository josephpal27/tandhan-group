const missionVisionData = [
    {
        id: 1,
        title: "Mission",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat unde, vero incidunt accusantium odit fugit maiores itaque eveniet.",
        image: "/images/mission.png",
    },
    {
        id: 2,
        title: "Vision",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, commodi quaerat unde, vero incidunt accusantium odit fugit maiores itaque eveniet.",
        image: "/images/vision.png",
    },
]

const MissionVision = () => {
    return (
        <section className="px-0 pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]">
            {missionVisionData.map((item) => {
                return (
                    <div key={item.id} className={`
                        flex justify-between flex-wrap
                        ${item.id % 2 === 0 ? "flex-row-reverse mt-[2rem]" : ""}
                    `}>
                        <div className="w-[60%] overflow-hidden relative">
                            <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                            <div className={`
                                absolute w-full h-full top-0 left-0 flex justify-between text-black
                                p-[5rem]
                                ${item.id % 2 === 0 ? "flex-row-reverse items-end text-white" : ""}
                            `}>
                                <div className="w-[45%]">

                                </div>
                                <div className="w-[52%]">
                                    <span className="text-[2.5rem] font-semibold">
                                        {item.title}
                                    </span>
                                    <p className="mt-[1rem]">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`
                            w-[35%] flex justify-start relative
                            ${item.id % 2 === 0 ? "justify-end" : ""}
                        `}>
                            <img 
                                src="/images/artboard.png" 
                                alt="Artboard" 
                                loading="lazy" 
                                className={`
                                    w-[85%] filter invert absolute
                                    top-[-4rem]
                                `} 
                            />
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default MissionVision
