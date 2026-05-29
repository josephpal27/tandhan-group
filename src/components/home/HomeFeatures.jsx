import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const featuresData = [
    {
        id: 1,
        title: "Integrity",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
    },
    {
        id: 2,
        title: "Automation",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
    },
    {
        id: 3,
        title: "Tradition",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
    },
    {
        id: 4,
        title: "Safety",
        desc: "Lorem ipsum dolor sit amet, adipisicing elit. Distinctio numquam nihil lorem voluptatibus applications through revolutionary laboriosam.",
    },
]

const HomeFeatures = () => {
    return (
        <section className="flex justify-between flex-wrap 
        mt-[-2rem] sm:mt-[-2.5rem] lg:mt-[-3rem] xl:mt-[-4rem] 2xl:mt-[-5rem] relative">
            {featuresData.map((feature) => {
                return (
                    <div key={feature.id} className="w-[25%] bg-primary p-[2rem] border-b-[10px] border-secondary group">
                        <span className="text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem] text-gray-300 block">
                            0{feature.id}
                        </span>
                        <span className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.6rem] xl:text-[1.7rem] 2xl:text-[1.8rem] text-white font-semibold block">
                            {feature.title}
                        </span>
                        <p className="text-gray-300 mt-[0.8rem] text-[1rem] sm:text-[1.1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">
                            {feature.desc}
                        </p>
                        <Link href="/" className="
                            flex items-center mt-[1.5rem] text-white font-semibold 
                            text-[1.1rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                            gap-[0.5rem]
                        ">
                            Read More 
                            <MdNavigateNext className="
                                bg-black 
                                text-[1.2rem] sm:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] group-hover:text-black
                                group-hover:ml-[0.5rem] group-hover:bg-secondary transition-all duration-300
                            " />
                        </Link>
                    </div>
                )
            })}
        </section>
    )
}

export default HomeFeatures
