"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArticleCard from "./ArticleCard";
import BlogCard from "./BlogCard";
import NewsletterCard from "./NewsletterCard";
import CategoryDropdown from "./CategoryDropdown";

import { eventsData } from "@/data/eventsData";
import { articlesData } from "@/data/articlesData";
import { blogsData } from "@/data/blogsData";
import { pressReleasesData } from "@/data/pressReleasesData";
import { newslettersData } from "@/data/newslettersData";

const tabHeads = [
    { id: 1, name: "Events" },
    { id: 2, name: "News & Articles" },
    { id: 3, name: "Blogs" },
    { id: 4, name: "Press Releases" },
    { id: 5, name: "Newsletters" },
]

const categories = [
    "All Categories",
    "Corporate",
    "Polyplast",
    "Denim ",
    "Hospitality",
];

const MediaListTabbing = () => {

    const [activeTab, setActiveTab] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setSelectedCategory("All Categories");
    };

    const filteredArticles =
        selectedCategory === "All Categories"
            ? articlesData
            : articlesData.filter(
                (item) => item.category === selectedCategory
            );

    const filteredPressReleases =
        selectedCategory === "All Categories"
            ? pressReleasesData
            : pressReleasesData.filter(
                (item) => item.category === selectedCategory
            );

    return (
        <section className="
            pt-[2rem] sm:pt-[1.5rem] lg:pt-[2rem] xl:pt-[2.5rem] 2xl:pt-[3rem]
            pb-[2.5rem] sm:pb-[3.5rem] lg:pb-[2.5rem] xl:pb-[3rem] 2xl:pb-[3.5rem]
        ">
            {/* Head */}
            <div className="
                border-primary border-b-[2px] xl:border-b-[2.5px] 2xl:border-b-[3px]
                pb-[0.7rem] sm:pb-[0.9rem] lg:pb-[0.8rem] xl:pb-[0.9rem] 2xl:pb-[1rem]
                mb-[1.5rem] sm:mb-[2rem] lg:mb-[2.6rem] xl:mb-[2.8rem] 2xl:mb-[3rem]
                flex lg:justify-end gap-[0.3rem] lg:gap-[2rem] flex-wrap
            ">
                {tabHeads.map((head) => {

                    const isActive = activeTab === head.id;

                    return (
                        <button
                            key={head.id}
                            onClick={() => handleTabChange(head.id)}
                            className={`
                                text-[1.3rem] sm:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem] 2xl:text-[2rem]
                                font-semibold transition-colors duration-300 cursor-pointer w-full lg:w-max text-left
                                ${isActive ? "text-primary" : "text-[#c4c4c4]"}
                            `}
                        >
                            {head.name}
                        </button>
                    )
                })}
            </div>

            {/* Category Dropdown */}
            {(activeTab === 2 || activeTab === 4) && (
                <div className="flex justify-end mb-[2rem]">
                    <CategoryDropdown
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>
            )}

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
                                <BlogCard key={blog.id} blog={blog} type="events" />
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
                            {filteredArticles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
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
                                <BlogCard key={blog.id} blog={blog} type="blogs" />
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
                            {filteredPressReleases.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 5 && (
                        <motion.div
                            key="newsletters"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex flex-wrap gap-[5%] lg:gap-[2%]"
                        >
                            {[...newslettersData].reverse().map((newsletter) => (
                                <NewsletterCard key={newsletter.id} newsletter={newsletter} />
                            ))}
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

        </section>
    )
}

export default MediaListTabbing