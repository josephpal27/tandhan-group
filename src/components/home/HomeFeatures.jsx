
const featuresData = [
    {
        id: 1,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        icon: "/images/icons/industry.png",
    },
    {
        id: 2,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        icon: "/images/icons/market.png",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        icon: "/images/icons/sustainable.png",
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        icon: "/images/icons/stack.png",
    },
]

const HomeFeatures = () => {
    return (
        <section className="
            flex justify-between flex-wrap z-50
            mt-[1.5rem] lg:mt-[-3rem] xl:mt-[-4rem] 2xl:mt-[-5rem] relative
        ">
            {featuresData.map((feature) => {
                return (
                    <div key={feature.id} className="w-full lg:w-[25%] bg-white p-[1.2rem] lg:p-[2rem] border-b-[6px] border-primary mb-[1rem] lg:mb-0 group shadow-[rgba(0,0,0,0.15)_0px_3px_8px]">
                        <img 
                            src={feature.icon} 
                            alt={feature.title} 
                            loading="lazy" 
                            className="w-[20%]" 
                        />
                        <span className="text-[1.4rem] sm:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] text-black font-semibold block mt-[0.8rem]">
                            {feature.title}
                        </span>
                        <p className="text-gray-900 mt-[0.5rem] text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                            {feature.desc}
                        </p>
                    </div>
                )
            })}
        </section>
    )
}

export default HomeFeatures
