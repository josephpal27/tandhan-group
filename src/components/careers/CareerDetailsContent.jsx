import CareerForm from "./CareerForm"

const CareerDetailsContent = ({ post }) => {
    return (
        <section className="
            pt-[2rem] sm:pt-[2.5rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem]
            pb-[3rem] sm:pb-[3.5rem] lg:pb-[4.5rem] xl:pb-[5rem] 2xl:pb-[5.5rem]
        ">

            {/* Top */}
            <div>
                <div className="
                    flex justify-between items-start lg:items-end flex-col lg:flex-row border-b border-primary/50
                    pb-[0.6rem] sm:pb-[0.7rem] lg:pb-[0.8rem] xl:pb-[0.9rem] 2xl:pb-[1rem]
                ">
                    <h2 className="
                        text-[1.5rem] sm:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.1rem] 2xl:text-[2.3rem] font-semibold mb-[0.8rem] lg:mb-0
                    ">
                        {post.title}
                    </h2>
                    <span className="font-semibold text-[0.9rem] sm:text-[1.05rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]">
                        Posted On : {post.date}
                    </span>
                </div>
                <div className="mt-[1.2rem] lg:mt-[1.7rem] [&>p]:mb-[0.6rem] [&>p]:font-[500]">
                    <p>
                        Experience : {post.experience}
                    </p>
                    <p>
                        Job Type : {post.type}
                    </p>
                    <p>
                        Location : {post.location}
                    </p>

                    <div 
                        className="career-desc mt-[2rem]" 
                        dangerouslySetInnerHTML={{__html: post.description}}
                    />
                </div>
            </div>

            {/* Form */}
            <div className="mt-[2.5rem] sm:mt-[3rem] lg:mt-[3.4rem] xl:mt-[3.7rem] 2xl:mt-[4rem]">
                <h3 className="text-[1.2rem] lg:text-[1.3rem] xl:text-[1.45rem] 2xl:text-[1.6rem] font-semibold text-gray-900">
                    Applying For - {post.title}
                </h3>
                <div className="mt-[1.5rem]">
                    <CareerForm jobTitle={post.title} />
                </div>
            </div>

        </section>
    )
}

export default CareerDetailsContent
