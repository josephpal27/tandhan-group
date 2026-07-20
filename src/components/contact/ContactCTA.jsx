"use client";

import { motion } from "framer-motion";
import { headingVariant } from "@/utils/animations";

const ContactCTA = () => {
    return (
        <section className="
            mt-[3.5rem] sm:mt-[4.5rem] lg:mt-[4.5rem] xl:mt-[5rem] 2xl:mt-[5.5rem]
            py-[2.5rem] sm:py-[3.5rem] lg:py-[4.5rem] xl:py-[5rem] 2xl:py-[5.5rem]
            text-white flex flex-col items-center text-center
            relative overflow-hidden
        ">
            <motion.h3
                className="relative z-50"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Connect with <br/> Tandhan Globally
            </motion.h3>
            <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[60%]">
                For a closer look into the heart of Tandhan, and to journey with us through every innovation, project, and milestone, connect with us on our social platforms.
            </p>

            {/* Blurred background layer */}
            <div className="
                absolute inset-0 -z-10
                bg-[url('/images/contact-cta.avif')] bg-cover bg-center bg-no-repeat
                blur-[2px] scale-105
            " />
        </section>
    )
}

export default ContactCTA
