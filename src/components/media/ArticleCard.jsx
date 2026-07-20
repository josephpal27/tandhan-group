
const ArticleCard = ({ article }) => {
    return (
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="
            flex justify-between flex-wrap group shadow-[1px_1px_10px_rgba(0,0,0,0.3)] 
            hover:bg-[#fbfbfb] transition duration-300
            mb-[1.7rem] lg:mb-[2rem] last:mb-[2.3rem] lg:last:mb-[3rem]
            p-[0.7rem] sm:p-[1rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
            border-[#c0bebe] border-b-[1px] last:border-b-0
        ">
            {/* Image */}
            <div className="w-full lg:w-[30%] overflow-hidden shadow-[3px_3px_10px_rgba(0,0,0,0.3)]">
                <img 
                    src={article.image} 
                    alt={article.title} 
                    loading="lazy" 
                    className="w-full aspect-[16/9] group-hover:scale-[1.05] transition duration-300" 
                />
            </div>

            {/* Content */}
            <div className="w-full lg:w-[67%] mt-[1.2rem] lg:mt-0">
                <span className="
                    text-[1.2rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem] font-semibold line-clamp-1
                ">
                    {article.title}
                </span>
                <p className="
                    mt-[0.3rem] lg:mt-[0.5rem] line-clamp-2 font-medium
                ">
                    {article.desc}
                </p>
                <button className="
                    mt-[1.3rem] sm:mt-[1.4rem] lg:mt-[1.5rem] xl:mt-[1.6rem] 2xl:mt-[1.7rem]
                    border-primary border-[2px] lg:border-[1.5px] xl:border-[1.7px] 2xl:border-[2px] w-max font-medium
                    hover:bg-primary hover:text-white transition duration-300
                    px-[1rem]
                    py-[0.25rem]
                ">
                    Read More
                </button>
            </div>
        </a>
    )
}

export default ArticleCard
