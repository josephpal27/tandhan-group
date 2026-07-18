import Link from "next/link";
import { blogsData } from "@/data/blogsData";

const LatestBlogs = () => {

    return (
        <div>
            {/* Head */}
            <div>
                <span className="text-[1.8rem] font-semibold">
                    Latest Blogs
                </span>
            </div>

            {/* Cards */}
            <div className="border-t border-[#d1d1d1] mt-[0.7rem] pt-[1.3rem]">
                {blogsData.slice(-3).reverse().map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/media/${blog.slug}`}
                        className="flex flex-wrap justify-between pb-[1.1rem]"
                    >
                        <div className="w-full md:w-[23%]">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                loading="lazy"
                                className="w-full h-auto object-cover shadow-[2px_2px_7px_rgba(0,0,0,0.4)]"
                            />

                        </div>

                        <div className="w-full lg:w-[74.5%] mt-[0.7rem] lg:mt-0">
                            <span className="text-[1.2rem] font-semibold leading-0 line-clamp-2">
                                {blog.title}
                            </span>

                            <p className="text-gray-600 text-[0.85rem] mt-[0.3rem] line-clamp-2">
                                {blog.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default LatestBlogs
