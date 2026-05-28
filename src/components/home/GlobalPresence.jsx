"use client";

import { SlLocationPin } from "react-icons/sl";

const GlobalPresence = () => {
    return (
        <section className="mt-[4rem] px-0 relative">

            {/* Map Image */}
            <div>
                <img 
                    src="/images/our-presence/india.png" 
                    alt="India" 
                    loading="lazy"
                    className="w-full h-screen object-cover"
                />
            </div>

            {/* Content Box */}
            <div className="absolute w-full h-full left-0 top-0 px-[1rem] sm:px-[5%] lg:px-[7%] py-[5rem]">
                <div className="w-[30%] h-full bg-white shadow-xl">
                    {/* Top */}
                    <div className="relative">
                        <img src="/images/demo-1.jpg" alt="Map" loading="lazy" className="w-full" />
                        {/* Layer */}
                        <div className="absolute top-0 left-0 w-full h-full bg-primary/50 flex items-end">
                            <div className="w-[90%] flex justify-between">
                                <div className="bg-white w-[80%] py-[2rem] px-[1rem]">
                                    <span className="text-[1.4rem] font-semibold block">
                                        Tandhan Denim
                                    </span>
                                </div>
                                <div className="
                                    bg-secondary hover:bg-primary text-white w-[20%] flex justify-center items-center 
                                    text-[3rem]
                                    cursor-pointer transition select-none
                                ">
                                    ›
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="p-[1rem]">
                        <a href="/" className="flex items-center gap-[0.5rem]">
                            <SlLocationPin/> Address
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GlobalPresence
