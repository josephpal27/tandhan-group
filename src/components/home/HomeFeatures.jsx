import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const featuresData = [
    {
        id: 1,
        title: "Integrity",
        desc: "Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedure processes.",
    },
    {
        id: 2,
        title: "Automation",
        desc: "Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedure processes.",
    },
    {
        id: 3,
        title: "Tradition",
        desc: "Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedure processes.",
    },
    {
        id: 4,
        title: "Safety",
        desc: "Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedure processes.",
    },
]

const HomeFeatures = () => {
    return (
        <section className="flex justify-between flex-wrap mt-[-5rem] relative">
            {featuresData.map((feature) => {
                return (
                    <div key={feature.id} className="w-[25%] bg-primary p-[2rem] border-b-[10px] border-secondary group">
                        <span className="text-[1.1rem] text-gray-300 block">
                            0{feature.id}
                        </span>
                        <span className="text-[1.8rem] text-white font-semibold block">
                            {feature.title}
                        </span>
                        <p className="text-gray-300 mt-[0.8rem]">
                            {feature.desc}
                        </p>
                        <Link href="/" className="
                            flex items-center mt-[1.5rem] text-white font-semibold text-[1.2rem]
                            gap-[0.5rem]
                        ">
                            Read More 
                            <MdNavigateNext className="
                                bg-black text-[1.4rem] group-hover:text-black
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
