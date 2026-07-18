import LatestBlogs from "./LatestBlogs";

const BlogDetailsContent = ({ blog }) => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[3rem] sm:pb-[3.5rem] lg:pb-[5rem] xl:pb-[5.5rem] 2xl:pb-[6rem]
        ">

            {/* Top */}
            <div className="flex justify-between">

                {/* Main Image */}
                <div className="w-[50%]">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                        className="w-full shadow-[3px_3px_10px_rgba(0,0,0,0.3)]"
                    />
                </div>

                {/* Latest Blogs */}
                <div className="w-[46%]">
                    <LatestBlogs />
                </div>

            </div>

            {/* Bottom */}
            <div
                className="mt-[3rem] blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

        </section>
    )
}

export default BlogDetailsContent
