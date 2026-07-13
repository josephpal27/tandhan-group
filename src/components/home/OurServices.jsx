
const servicesData = [
    {
        id: 1,
        title: "Protective Solutions",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/2.avif",
        logos: ["/images/logo/tandhan-polyplast.png"],
    },
    {
        id: 2,
        title: "Energy Solutions",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/3.avif",
        logos: ["/images/logo/tandhan-power.png"],
    },
    {
        id: 3,
        title: "Textiles",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/4.avif",
        logos: ["/images/logo/tandhan-denim.png", "/images/logo/tandhan-saree.png", "/images/logo/tandhan-fashion.png"],
    },
    {
        id: 4,
        title: "Hospitality",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consectetur distinctio odit ab consectetur earum ipsum magni iste unde architecto quaerat.",
        image: "/images/services/1.avif",
        logos: ["/images/logo/nx-hotel.png"],
    },
]

const OurServices = () => {
    return (
        <section className="pt-[2rem] sm:pt-[2.5rem] lg:pt-[2.5rem] xl:pt-[3rem] 2xl:pt-[3.5rem]">

            {/* Row */}
            <div className="flex justify-between flex-wrap 
            ">
                {servicesData.map((service) => {
                    return(
                        <div key={service.id} className="
                            w-full lg:w-[25%] relative overflow-hidden cursor-pointer group
                            border-b-[7px] border-primary
                            mb-[1rem] lg:mb-0
                        ">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full aspect-[5/4] object-cover" 
                            />

                            {/* Layer */}
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center
                                bg-primary bg-opacity-50 p-[2rem] transition duration-300 group-hover:opacity-0
                                group-hover:scale-105
                            ">
                                <span className="
                                    text-white text-center text-[1.5rem] lg:text-[1.6rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold
                                ">
                                    {service.title}
                                </span>
                            </div>

                            {/* Box */}
                            <div className="
                                absolute bottom-0 left-0 w-[70%] lg:w-[85%] h-[70%] lg:h-[80%] p-[1rem] bg-white 
                                flex flex-col justify-center items-center overflow-hidden
                                gap-[0.3rem] divide-y divide-gray-200
                                -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500
                            ">
                                {service.logos.map((logo, index) => {
                                    return(
                                        <img src={logo} alt="Logo" key={index} className="
                                            w-[80%] lg:w-[60%] 
                                            pt-[0.6rem] lg:py-[0.8rem]
                                        " />
                                    )
                                })}
                                
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default OurServices
