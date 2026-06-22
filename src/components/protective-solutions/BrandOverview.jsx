import Link from "next/link"

const BrandOverview = () => {
    return (
        <section className="
            mt-[5rem] sm:mt-[3rem] lg:mt-[4rem] xl:mt-[4.5rem] 2xl:mt-[5rem]
            mb-[5rem] sm:mb-[3rem] lg:mb-[4rem] xl:mb-[4.5rem] 2xl:mb-[5rem]
            px-0 bg-secondary
        ">
            <div className="flex justify-between flex-wrap pl-[1rem] sm:pl-[5%] lg:pl-[7%] text-white">
                <div className="w-[43%] flex flex-col justify-center">
                    <h3>
                        Brand Overview
                    </h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima adipisicing tenetur asperiores nihil repellat pariatur explicabo tenetur exercitationem molestiae ducimus fugiat.
                    </p>
                    <Link href="/" className="
                        mt-[2.5rem] bg-white hover:bg-primary w-max text-black hover:text-white font-semibold transition
                        py-[0.5rem] px-[1.5rem]
                    ">
                        Read More
                    </Link>
                </div>
                <div className="w-[54%] relative">
                    <img src="/images/paper-roll.png" alt="Brand Overview" loading="lazy" className="w-full" />
                    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-[#000000b8]">
                        <img src="/images/logo/tandhan-polyplast.png" alt="Tandhan Polyplast" loading="lazy" className="w-[40%] invert brightness-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandOverview
