"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const CategoryDropdown = ({ categories, selectedCategory, setSelectedCategory }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full sm:w-[200px] lg:w-[230px] xl:w-[250px] 2xl:w-[270px]">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`
                    w-full flex items-center justify-between
                    px-4 py-3 bg-white
                    border transition-colors duration-200
                    ${open ? "border-primary" : "border-gray-400 hover:border-gray-500"}
                    outline-none cursor-pointer
                `}
            >
                <span className="font-medium text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem]">{selectedCategory}</span>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500 shrink-0"
                >
                    <FiChevronDown size={18} />
                </motion.div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="
                            absolute z-20 mt-2 w-full
                            bg-white border border-primary
                            shadow-[0px_6px_18px_rgba(0,0,0,0.12)]
                            overflow-hidden
                        "
                    >
                        {categories.map((category) => {
                            const isSelected = category === selectedCategory;
                            return (
                                <li
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setOpen(false);
                                    }}
                                    className={`
                                        px-4 py-3 text-[1rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1rem] cursor-pointer
                                        transition-colors duration-150
                                        ${isSelected
                                            ? "bg-black text-white font-medium"
                                            : "text-gray-700 hover:bg-gray-50"
                                        }
                                    `}
                                >
                                    {category}
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CategoryDropdown;