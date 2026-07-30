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
                    className="border border-primary/50 focus:border-primary rounded-md px-[1rem] py-[0.7rem] outline-none w-full lg:w-[49%] shadow-[0.5px_0.5px_5px_rgba(0,0,0,0.1)] focus:shadow-[0.7px_0.7px_5px_rgba(0,0,0,0.25)]"
                />
                <input
                    type="text"
                    placeholder="City, State or Country"
                    value={locationQuery}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="border border-primary/50 focus:border-primary rounded-md px-[1rem] py-[0.7rem] outline-none w-full lg:w-[49%] shadow-[0.5px_0.5px_5px_rgba(0,0,0,0.1)] focus:shadow-[0.7px_0.7px_5px_rgba(0,0,0,0.25)]"
                />
            </div>

            {/* Posts */}
            <div className="mt-[1.5rem] divide-y divide-primary/20 border-t border-primary/10">
                {posts.length === 0 ? (
                    <p className="py-[2rem] text-black/60">
                        No openings match your search right now.
                    </p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="py-[1.5rem] px-[1rem] cursor-pointer bg-white hover:bg-gray-50 transition">
                            <div className="flex items-start justify-between gap-[1rem]">
                                <span className="text-[1.3rem] font-medium hover:underline">
                                    {post.title}
                                </span>
                                <div className="text-right shrink-0">
                                    <span className="text-[1rem] font-medium">{post.type}</span>
                                    <p className="text-[0.9rem] text-primary/50">{post.date}</p>
                                </div>
                            </div>
                            <p className="text-[1rem] text-black/60">
                                {post.location}
                            </p>
                            <p className="mt-[0.5rem] text-[1rem] text-black/70 line-clamp-2">
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