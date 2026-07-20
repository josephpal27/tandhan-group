import LatestBlogs from "./LatestBlogs";

const BlogDetailsContent = ({ blog }) => {
    return (
        <section className="
            pt-[2rem] sm:pt-[2.5rem] lg:pt-[3.5rem] xl:pt-[4rem] 2xl:pt-[4.5rem]
            pb-[3rem] sm:pb-[3.5rem] lg:pb-[4.5rem] xl:pb-[5rem] 2xl:pb-[5.5rem]
        ">

            {/* Top */}
            <div className="flex justify-between">

                {/* Main Image */}
                <div className="w-full lg:w-[50%]">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full aspect-[3/2] shadow-[3px_3px_10px_rgba(0,0,0,0.3)]"
                    />
                </div>

                {/* Latest Blogs */}
                <div className="w-[46%] hidden lg:block">
                    <LatestBlogs />
                </div>

            </div>

            {/* Bottom */}
            <div
                className="mt-[1.5rem] sm:mt-[2rem] lg:mt-[2.3rem] xl:mt-[2.7rem] 2xl:mt-[3rem] blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Latest Blogs - Mobile Only */}
            <div className="block lg:hidden mt-[3rem]">
                <LatestBlogs />
            </div>

        </section>
    )
}

export default BlogDetailsContent
