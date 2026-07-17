import Link from "next/link";

const ArticleCard = ({ article }) => {
    return (
        <div className="
            flex justify-between flex-wrap
            mb-[3rem]
        ">
            {/* Image */}
            <div className="w-[30%]">
                <img src={article.image} alt={article.title} loading="lazy" className="w-full" />
            </div>

            {/* Content */}
            <div className="w-[67%]">
                <span className="
                    text-[1.4rem] font-semibold line-clamp-1
                ">
                    {article.title}
                </span>
                <p className="
                    text-[0.8rem]
                    mt-[0.5rem] line-clamp-2
                ">
                    {article.desc}
                </p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="
                    block mt-[1rem]
                    border-white border-[1.5px] w-max
                    px-[0.5rem]
                    py-[0.2rem]
                    text-[1rem]
                ">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default ArticleCard
