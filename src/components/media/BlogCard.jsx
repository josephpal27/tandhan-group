import Link from "next/link";

const BlogCard = ({ blog }) => {
    return (
        <Link href={`/media/${blog.slug}`} className="
            w-full lg:w-[31%] group
            mb-[3rem] sm:mb-[2.5rem] lg:mb-[2.6rem] xl:mb-[2.8rem] 2xl:mb-[3rem]
        ">
            {/* Image */}
            <div className="overflow-hidden">
                <img 
                    src={blog.image} 
                    alt={blog.title} 
                    loading="lazy" 
                    className="w-full group-hover:scale-[1.05] transition duration-300" 
                />
            </div>

            {/* Content */}
            <div className="
                bg-white text-primary w-[87%] relative z-10 shadow-[1px_1px_10px_rgba(0,0,0,0.3)]
                ml-auto 
                mr-[-1.5rem] sm:mr-[-1rem] lg:mr-[-1.1rem] xl:mr-[-1.3rem] 2xl:mr-[-1.5rem]
                mt-[-2.5rem] sm:mt-[-2rem] lg:mt-[-2.1rem] xl:mt-[-2.3rem] 2xl:mt-[-2.5rem]
                p-[1.5rem] sm:p-[1.5rem] lg:p-[1.1rem] xl:p-[1.3rem] 2xl:p-[1.5rem]
            ">
                <span className="
                    text-[1.4rem] sm:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.4rem] font-semibold line-clamp-1
                ">
                    {blog.title}
                </span>
                <p className="
                    text-[0.9rem] sm:text-[0.8rem] lg:text-[0.75rem] xl:text-[0.83rem] 2xl:text-[0.9rem]
                    mt-[0.5rem] line-clamp-2 font-medium
                ">
                    {blog.desc}
                </p>
                <button className="
                    block mt-[1rem]
                    border-primary border-[2px] lg:border-[1.5px] xl:border-[1.7px] 2xl:border-[2px]
                    w-max font-medium
                    hover:bg-primary hover:text-white transition duration-300
                    px-[0.7rem]
                    py-[0.25rem]
                    text-[1rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]
                ">
                    Read More
                </button>
            </div>
        </Link>
    )
}

export default BlogCard