
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
        icon: "/images/icons/industry.png",
    },
    {
        id: 3,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        icon: "/images/icons/industry.png",
    },
    {
        id: 4,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
        icon: "/images/icons/industry.png",
    },
]

const HomeFeatures = () => {
    return (
        <section className="flex justify-between flex-wrap 
        mt-[-2rem] sm:mt-[-2.5rem] lg:mt-[-3rem] xl:mt-[-4rem] 2xl:mt-[-5rem] relative">
            {featuresData.map((feature) => {
                return (
                    <div key={feature.id} className="w-[25%] bg-primary p-[2rem] border-b-[10px] border-secondary group">
                        <img 
                            src={feature.icon} 
                            alt={feature.title} 
                            loading="lazy" 
                            className="w-[20%]" 
                        />
                        <span className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] text-white font-semibold block mt-[0.8rem]">
                            {feature.title}
                        </span>
                        <p className="text-gray-300 mt-[0.5rem] text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                            {feature.desc}
                        </p>
                    </div>
                )
            })}
        </section>
    )
}

export default HomeFeatures
