import BlogCard from "./BlogCard"

const tabHeads = [
    { id: 1, name: "Blogs" },
    { id: 2, name: "Press Releases & Articles" },
]

const MediaListTabbing = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
        ">
            {/* Head */}
            <div className="
                border-primary border-b-[3px] 
                pb-[1rem] 
                mb-[2rem]
                flex justify-end gap-[2rem]
            ">
                {tabHeads.map((head, index) => {
                    return (
                        <span key={index} className="
                            text-[2rem]
                            font-semibold
                        ">
                            {head.name}
                        </span>
                    )
                })}
            </div>

            {/* List */}
            <div>
                {/* Blog Cards */}
                <div className="
                    flex flex-wrap gap-[3.5%]
                ">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>

        </section>
    )
}

export default MediaListTabbing
