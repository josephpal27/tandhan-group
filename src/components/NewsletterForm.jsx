"use client";

import { useState } from "react";
import { toast } from "sonner";
import { LiaTelegram } from "react-icons/lia";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "9ae99fce-f6f9-4a38-ab5b-7caafb88fce6",
                    subject: "New Newsletter Subscription - Tandhan Group",
                    from_name: "Tandhan Group Website",
                    email: email,
                    message: "New Newsletter Subscription",
                }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Subscribed! Thanks for joining our newsletter.");
                setEmail("");
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative mt-[0.7rem] sm:mt-[0.8rem] lg:mt-[1rem] xl:mt-[1.1rem] 2xl:mt-[1.2rem]">
            <input
                type="email"
                placeholder="Enter Your Email"
                name="Email"
                required
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-[0.6rem] lg:py-[0.45rem] xl:py-[0.55rem] 2xl:py-[0.6rem] px-[0.9rem] lg:px-[0.7rem] xl:px-[0.8rem] 2xl:px-[0.9rem] bg-transparent border border-white text-white placeholder:text-white outline-none ring-white text-[1rem] sm:text-[1.1rem] lg:text-[0.9rem] xl:text-[1rem] 2xl:text-[1.1rem]"
            />
            <button
                type="submit"
                className="absolute right-[1rem] top-[50%] translate-y-[-50%]"
            >
                <LiaTelegram className="hover:text-[#e9e9e9] transition text-[1.5rem] lg:text-[1.3rem] xl:text-[1.4rem] 2xl:text-[1.5rem]" />
            </button>
        </form>
    );
};

export default NewsletterForm;