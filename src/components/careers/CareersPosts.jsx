const CareersPosts = ({
    posts,
    titleQuery,
    locationQuery,
    onTitleChange,
    onLocationChange,
}) => {
    return (
        <div>
            {/* Search bar */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-[0.8rem]">
                <input
                    type="text"
                    placeholder="Job title or skill"
                    value={titleQuery}
                    onChange={(e) => onTitleChange(e.target.value)}
                    className="border border-black/15 rounded-md px-[1rem] py-[0.7rem] text-sm outline-none"
                />
                <input
                    type="text"
                    placeholder="City, State/Province or Country"
                    value={locationQuery}
                    onChange={(e) => onLocationChange(e.target.value)}
                    className="border border-black/15 rounded-md px-[1rem] py-[0.7rem] text-sm outline-none"
                />
            </div>

            {/* Posts */}
            <div className="mt-[1.5rem] divide-y divide-black/10 border-t border-black/10">
                {posts.length === 0 ? (
                    <p className="py-[2rem] text-sm text-black/60">
                        No openings match your search right now.
                    </p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="py-[1.5rem]">
                            <div className="flex items-start justify-between gap-[1rem]">
                                <h3 className="text-lg font-medium hover:underline cursor-pointer">
                                    {post.title}
                                </h3>
                                <div className="text-right shrink-0">
                                    <span className="text-sm font-medium">{post.type}</span>
                                    <p className="text-xs text-black/50">{post.date}</p>
                                </div>
                            </div>
                            <p className="text-sm text-black/60 mt-[0.2rem]">
                                {post.location}
                            </p>
                            <p className="mt-[0.6rem] text-sm text-black/70 line-clamp-2">
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