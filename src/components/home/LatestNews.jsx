const latestNewsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam soluta minus, dolores molestias Lorem.",
        image: "/images/latest-news/1.png",
        url: "/",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam soluta minus, dolores molestias Lorem.",
        image: "/images/latest-news/2.png",
        url: "/",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam soluta minus, dolores molestias Lorem.",
        image: "/images/latest-news/3.png",
        url: "/",
    },
]

const LatestNews = () => {
    return (
        <section className="pt-[4.5rem]">
            <div className="flex flex-col items-center text-center">
                <h6>
                    Latest News
                </h6>
                <p className="w-[50%] mt-[1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim in ipsum sunt explicabo totam corporis soluta minus, dolores molestias Lorem, ipsum.
                </p>
            </div>

            {/* Row */}
            <div className="mt-[2.5rem] flex justify-between flex-wrap">
                {latestNewsData.map((item) => {
                    return(
                        <div key={item.id} className="
                            w-[31%] bg-primary relative
                        ">
                            <div className="relative">
                                <img src={item.image} alt={item.title} loading="lazy" className="w-full" />
                                <div className="
                                    absolute top-0 left-0 bg-secondary p-[1rem]
                                    text-[1.3rem] font-semibold
                                ">
                                    0{item.id}
                                </div>
                            </div>
                            <div className="
                                text-white
                                px-[1.5rem]
                                pt-[1.5rem]
                                pb-[6rem]
                            ">
                                <span className="text-[1.5rem] font-semibold">
                                    {item.title}
                                </span>
                                <p className="mt-[0.7rem] text-[1rem]">
                                    {item.desc}
                                </p>
                                <a href="/" className="
                                    absolute bottom-0 right-0 w-[70px] aspect-square bg-secondary
                                    flex justify-center items-center text-[3rem] text-black
                                    transition duration-300 hover:bg-[#ced430]
                                ">
                                    ›
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default LatestNews
