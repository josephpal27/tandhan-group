import Link from "next/link";

const BlogCard = () => {
    return (
        <div className="
            w-full lg:w-[31%]
            mb-[3rem]
        ">
            {/* Image */}
            <div>
                <img src="/images/media/demo.png" alt="Demo" loading="lazy" className="w-full" />
            </div>

            {/* Content */}
            <div className="
                bg-primary text-white w-[85%] relative z-10
                ml-auto mr-[-1rem] mt-[-2.5rem]
                p-[1.5rem]
            ">
                <span className="
                    text-[1.4rem] font-semibold
                ">
                    Lorem ipsum dolor
                </span>
                <p className="
                    text-[0.8rem]
                    mt-[0.5rem]
                ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam.
                </p>
                <Link href="/" className="
                    block mt-[1rem]
                    border-white border-[1.5px] w-max
                    px-[0.5rem]
                    py-[0.2rem]
                    text-[1rem]
                ">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default BlogCard