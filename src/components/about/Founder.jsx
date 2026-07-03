"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";
import Link from "next/link";

const Founder = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[2.2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            flex justify-between items-center flex-wrap
        ">
            {/* Image */}
            <div className="w-[35%]">
                <img 
                    src="/images/founder-demo.avif" 
                    alt="Founder" 
                    loading="lazy" 
                    className="w-full" 
                />
            </div>

            {/* Content */}
            <div className="w-[55%]">
                <img src="/images/quote.avif" alt="Quote" loading="lazy" className="w-[25%] mb-[3rem]" />
                <h5>
                    Founder's Message
                </h5>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugiat adipisicing elit tenetur dolorum commodi voluptatem debitis itaque facere adipisicing elit accusamus numquam nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className="flex gap-[0.8rem] items-center mt-[1rem]">
                    <div className="w-[45px] h-[2px] bg-primary"></div>
                    <span className="text-[1.7rem] font-semibold">
                        John Doe
                    </span>
                </div>
                <Link href="/" className="
                    mt-[2rem] block w-max bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                    border-primary border-[3px]
                    py-[0.4rem] px-[1.4rem]
                ">
                    Read More
                </Link>
            </div>
        </section>
    )
}

export default Founder
