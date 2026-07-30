const CareersPosts = ({ posts, titleQuery, locationQuery, onTitleChange, onLocationChange }) => {
    return (
        <div>

            {/* Search Bar */}
            <div className="flex justify-between flex-wrap">
                <input
                    type="text"
                    placeholder="Job Title"
                    value={titleQuery}
                    onChange={(e) => onTitleChange(e.target.value)}
                    className="
                        border border-primary/50 focus:border-primary rounded-md 
                        px-[1rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem]
                        py-[0.7rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                        outline-none w-full lg:w-[49%] shadow-[0.5px_0.5px_5px_rgba(0,0,0,0.1)] focus:shadow-[0.7px_0.7px_5px_rgba(0,0,0,0.25)]
                    "
                />
                <input
                    type="text"
                    placeholder="City, State or Country"
                    value={locationQuery}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="
                        border border-primary/50 focus:border-primary rounded-md 
                        px-[1rem] sm:px-[1.1rem] lg:px-[0.9rem] xl:px-[1rem] 2xl:px-[1.1rem]
                        py-[0.7rem] sm:py-[0.8rem] lg:py-[0.6rem] xl:py-[0.7rem] 2xl:py-[0.8rem]
                        outline-none w-full lg:w-[49%] shadow-[0.5px_0.5px_5px_rgba(0,0,0,0.1)] focus:shadow-[0.7px_0.7px_5px_rgba(0,0,0,0.25)] mt-[0.7rem] lg:mt-0
                    "
                />
            </div>

            {/* Posts */}
            <div className="mt-[1.5rem] divide-y divide-primary/20 border-t border-primary/10">
                {posts.length === 0 ? (
                    <p className="py-[1.5rem] sm:py-[1.7rem] lg:py-[1.6rem] xl:py-[1.8rem] 2xl:py-[2rem] text-black/60">
                        No openings match your search right now.
                    </p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="
                            py-[1.2rem] sm:py-[1.3rem] lg:py-[1.3rem] xl:py-[1.4rem] 2xl:py-[1.5rem]
                            px-[0] lg:px-[0.8rem] xl:px-[0.9rem] 2xl:px-[1rem]
                            cursor-pointer bg-white lg:hover:bg-[#f6f6f6] transition group
                        ">
                            <div className="flex items-start justify-between gap-[1rem]">
                                <span className="text-[1.15rem] sm:text-[1.3rem] lg:text-[1.1rem] xl:text-[1.2rem] 2xl:text-[1.3rem] font-medium group-hover:underline">
                                    {post.title}
                                </span>
                                <div className="text-right shrink-0">
                                    <span className="text-[0.8rem] sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] font-medium">{post.type}</span>
                                    <p className="text-[0.7rem] sm:text-[0.8rem] lg:text-[0.7rem] xl:text-[0.8rem] 2xl:text-[0.9rem] text-primary/50">{post.date}</p>
                                </div>
                            </div>
                            <p className="text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black/60">
                                {post.location}
                            </p>
                            <p className="mt-[0.3rem] lg:mt-[0.5rem] text-[0.9rem] sm:text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] text-black/70 line-clamp-2">
                                {post.description}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CareersPosts;