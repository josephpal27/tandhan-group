import CareerForm from "./CareerForm"

const CareerDetailsContent = ({ post }) => {
    return (
        <section className="
            pt-[2rem] sm:pt-[2.5rem] lg:pt-[3rem] xl:pt-[3.5rem] 2xl:pt-[4rem]
            pb-[5.5rem]
        ">

            {/* Top */}
            <div>
                <div className="
                    flex justify-between items-end border-b border-primary/50
                    pb-[1rem]
                ">
                    <h2 className="
                        text-[2.3rem] font-semibold
                    ">
                        {post.title}
                    </h2>
                    <span className="font-semibold text-[1.2rem]">
                        Posted On : {post.date}
                    </span>
                </div>
                <div className="mt-[1.7rem] [&>p]:mb-[0.6rem] [&>p]:font-[500]">
                    <p>
                        Experience : {post.experience}
                    </p>
                    <p>
                        Job Type : {post.type}
                    </p>
                    <p>
                        Location : {post.location}
                    </p>
                    <p>
                        Description : {post.description}
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="mt-[4rem]">
                <h3 className="text-[1.6rem] font-semibold text-gray-900">
                    Applying For - {post.title}
                </h3>
                <div className="mt-[1.5rem]">
                    <CareerForm />
                </div>
            </div>

        </section>
    )
}

export default CareerDetailsContent
