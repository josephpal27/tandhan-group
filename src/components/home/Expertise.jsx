"use client";


const expertiseData = [
    {
        id: 1,
        value: 31, 
        title: "Years of <br/> Experience",
        icon: "/images/icons/experience.png",
    },
    {
        id: 2,
        value: 3000,
        title: "Clients <br/> Served",
        icon: "/images/icons/clients.png",
    },
    {
        id: 3,
        value: 25,
        title: "Country <br/> Presence",
        icon: "/images/icons/earth.png",
    },
    {
        id: 4,
        value: 2000,
        title: "Total <br/> Workforce",
        icon: "/images/icons/digging.png",
    },
]

const Expertise = () => {
    return (
        <section className="
            px-0
            pt-[2rem] sm:pt-[3.5rem] lg:pt-[5rem] xl:pt-[5.5rem] 2xl:pt-[6rem]
            flex justify-between flex-wrap
        ">

            {/* Left */}
            <div className="w-[35%]">
                {/* Left Top */}
                <div className="
                    min-h-[20rem] pl-[20%] pr-[15%]
                ">
                    <span className="
                        text-[3rem] font-bold
                    ">
                        Lorem Ipsum
                    </span>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut voluptatum ut eaque amet qui officia fugit voluptatem.
                    </p>
                </div>
                {/* Left Bottom */}
                <div className="bg-secondary text-white pl-[20%] h-[12.5rem] flex justify-between items-center">
                    <div className="w-[77%]">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut voluptatum eaque amet qui officia fugit voluptatem.
                        </p>
                    </div>
                    <div className="w-[15%] bg-primary h-full">

                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="w-[65%] flex justify-between flex-wrap">
                {
                    expertiseData.map((item, index) => {
                        return (
                            <div key={index} className="w-[25%]">
                                {/* Card Top */}
                                <div className="min-h-[20rem] flex gap-[1rem]">
                                    {/* Bar */}
                                    <div className="
                                        w-[13px] bg-[#c8c8c8] flex items-end
                                    ">
                                        <div className="w-full h-[75%] bg-primary"></div>
                                    </div>
                                    {/* Value */}
                                    <div>
                                        <span className="text-[1.7rem] font-bold"> 
                                            {item.value}+
                                        </span>
                                        <p className="
                                            mt-[0.2rem] font-semibold text-[1.2rem] leading-[1.1]
                                        " dangerouslySetInnerHTML={{ __html: item.title }}>
                                            
                                        </p>
                                    </div>
                                </div>
                                {/* Card Bottom */}
                                <div className="bg-primary h-[12.5rem] py-[2rem] pr-[3rem] text-[#f3f3f3]">
                                    <img 
                                        src={item.icon}
                                        alt="Icon" 
                                        loading="lazy" 
                                        className="w-[20%]" 
                                    />
                                    <span className="text-[1.3rem] block mt-[1rem]">
                                        Lorem Ipsum
                                    </span>
                                    <p className="text-[0.8rem] mt-[0.5rem]"> 
                                        Lorem ipsum dolor sit amet elit Lorem, ipsum dolor.
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <div >

                </div>
            </div>

        </section>
    )
}

export default Expertise
