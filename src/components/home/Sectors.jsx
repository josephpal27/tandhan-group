const sectorsData = [
    {
        id: 1,
        title: "Sector 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "",
        image: "/images/sectors/1.jpeg",
    },
    {
        id: 2,
        title: "Sector 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "",
        image: "/images/sectors/2.jpeg",
    },
    {
        id: 3,
        title: "Sector 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "",
        image: "/images/sectors/3.jpeg",
    },
    {
        id: 4,
        title: "Sector 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error voluptates.",
        icon: "",
        image: "/images/sectors/4.png",
    },
]

const Sectors = () => {
    return (
        <section className="pt-[5rem] flex justify-between flex-wrap items-center">
            <div className="w-[48%] flex justify-between items-start flex-wrap">
                {sectorsData.map((sector) => {
                    return(
                        <div key={sector.id} className={`
                            relative overflow-hidden group
                            w-[48.5%] 
                            mb-[1.2rem]
                            ${sector.id === 2 ? "mt-[3rem]" : ""}
                            ${sector.id === 3 ? "mt-[-3rem]" : ""}
                        `}>
                            <img src={sector.image} alt={sector.title} loading="lazy" className="w-full" />
                            <div className="
                                w-full h-full absolute top-0 left-0 bg-secondary/85 p-[1.5rem]
                                flex flex-col justify-center 
                                opacity-0 group-hover:opacity-100 transition duration-500
                                scale-110 group-hover:scale-100
                            ">
                                <img src="/images/icons/sector.png" alt="Sector" loading="lazy" className="w-[20%]" />
                                <span className="block text-white text-[1.5rem] font-semibold mt-[1rem]">
                                    {sector.title}
                                </span>
                                <p className="text-[0.9rem] text-white/90 mt-[0.2rem]">
                                    {sector.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-[48%]">
                <h4>
                    Our Sectors
                </h4>
                <p className="mt-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error ex voluptates sed harum repellat fugiat illum incidunt animi iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, repellendus.
                </p>
            </div>
        </section>
    )
}

export default Sectors
