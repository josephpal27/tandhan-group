"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import BlogCard from "./BlogCard";
import { eventsData } from "@/data/eventsData";
import { articlesData } from "@/data/articlesData";
import { blogsData } from "@/data/blogsData";
import { pressReleasesData } from "@/data/pressReleasesData";

const tabHeads = [
    { id: 1, name: "Events" },
    { id: 2, name: "News & Articles" },
    { id: 3, name: "Blogs" },
    { id: 4, name: "Press Releases" },
]

const MediaListTabbing = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="
            pt-[2rem] sm:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
            pb-[2.5rem] sm:pb-[3.5rem] lg:pb-[2.5rem] xl:pb-[3rem] 2xl:pb-[3.5rem]
        ">
            {/* Head */}
            <div className="
                border-primary border-b-[3px] lg:border-b-[2px] xl:border-b-[2.5px] 2xl:border-b-[3px]
                pb-[0.7rem] sm:pb-[0.9rem] lg:pb-[0.8rem] xl:pb-[0.9rem] 2xl:pb-[1rem]
                mb-[1.5rem] sm:mb-[2rem] lg:mb-[2.6rem] xl:mb-[2.8rem] 2xl:mb-[3rem]
                flex lg:justify-end gap-[1rem] lg:gap-[2rem] flex-wrap
            ">
                {tabHeads.map((head) => {

                    const isActive = activeTab === head.id;

                    return (
                        <button
                            key={head.id}
                            onClick={() => setActiveTab(head.id)}
                            className={`
                                text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                                font-semibold
                                transition-colors duration-300
                                cursor-pointer
                                ${isActive ? "text-primary" : "text-[#c4c4c4]"}
                            `}
                        >
                            {head.name}
                        </button>
                    )
                })}
            </div>

            {/* List */}
            <div>
                <AnimatePresence mode="wait">
                    {activeTab === 1 && (
                        <motion.div
                            key="events"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex flex-wrap gap-[3.5%]"
                        >
                            {eventsData.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 2 && (
                        <motion.div
                            key="articles"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            {articlesData.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 3 && (
                        <motion.div
                            key="blogs"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex flex-wrap gap-[3.5%]"
                        >
                            {blogsData.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 4 && (
                        <motion.div
                            key="pressReleases"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                            {pressReleasesData.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

        </section>
    )
}

export default MediaListTabbing
