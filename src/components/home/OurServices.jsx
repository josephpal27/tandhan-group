const servicesData = [
    {
        id: 1,
        title: "Intrinsically incubate intuitive opportunities",
        desc: "Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.",
        image: "/images/demo-1.jpg",
    },
    {
        id: 2,
        title: "Intrinsically incubate intuitive opportunities",
        desc: "Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.",
        image: "/images/demo-1.jpg",
    },
    {
        id: 3,
        title: "Intrinsically incubate intuitive opportunities",
        desc: "Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.",
        image: "/images/demo-1.jpg",
    },
    {
        id: 4,
        title: "Intrinsically incubate intuitive opportunities",
        desc: "Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.",
        image: "/images/demo-1.jpg",
    },
]

const OurServices = () => {
    return (
        <section className="pt-[4.5rem]">

            <div className="flex flex-col items-center text-center">
                <h3>
                    Our Services
                </h3>
                <p className="w-[50%] mt-[1rem]">
                    Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology after plug-and-play networks.
                </p>
            </div>

            {/* Row */}
            <div className="flex justify-between flex-wrap mt-[2rem] border-b-[10px] border-primary">
                {servicesData.map((service) => {
                    return(
                        <div key={service.id} className="
                            w-[25%] relative overflow-hidden cursor-pointer group
                        ">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full" 
                            />

                            {/* Layer */}
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center
                                bg-secondary bg-opacity-80 p-[2rem] transition duration-300 group-hover:opacity-0
                                group-hover:scale-105
                            ">
                                <span className="
                                    text-white text-center text-[1.5rem] font-semibold
                                ">
                                    {service.title}
                                </span>
                            </div>

                            {/* Box */}
                            <div className="
                                absolute bottom-0 left-0 w-[85%] h-[80%] p-[1rem] bg-white 
                                -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500
                            ">
                                <span className="
                                    text-black text-[1.5rem] font-semibold leading-[1.1]
                                ">
                                    {service.title}
                                </span>
                                <p className="mt-[0.8rem] text-[0.85rem] text-gray-800">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default OurServices
