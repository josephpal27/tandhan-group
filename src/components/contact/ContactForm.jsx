"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "9ae99fce-f6f9-4a38-ab5b-7caafb88fce6",
                    subject: "New Contact Form Submission - Tandhan Group",
                    from_name: "Tandhan Group Website",
                    ...data,
                }),
            });

            const result = await res.json();

            if (result.success) {
                toast.success("Message sent! We'll get back to you soon.");
                formRef.current.reset();
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="
                contact-form
                p-[1rem] sm:p-[1.5rem] lg:p-[2.2rem] xl:p-[2.6rem] 2xl:p-[3rem]
                shadow-[3px_3px_10px_rgba(0,0,0,0.3)]
                flex flex-col gap-[1.3rem] sm:gap-[1.4rem] lg:gap-[1.1rem] xl:gap-[1.3rem] 2xl:gap-[1.5rem]
            "
        >
            {/* Name */}
            <div className="flex flex-col">
                <label htmlFor="name" className="form-label">
                    Name*
                </label>
                <input
                    type="text"
                    name="Name"
                    id="name"
                    required
                />
            </div>

            {/* Email + Phone */}
            <div className="flex gap-[1.3rem] sm:gap-[1.4rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-[2rem] flex-col lg:flex-row">
                <div className="flex flex-col lg:w-1/2">
                    <label htmlFor="email" className="form-label">
                        Email*
                    </label>
                    <input
                        type="email"
                        name="Email"
                        id="email"
                        required
                    />
                </div>
                <div className="flex flex-col lg:w-1/2">
                    <label htmlFor="phone" className="form-label">
                        Phone*
                    </label>
                    <input
                        type="number"
                        name="Phone"
                        id="phone"
                        required
                    />
                </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col">
                <label htmlFor="subject" className="form-label">
                    Subject
                </label>
                <input
                    type="text"
                    name="Subject"
                    id="subject"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col">
                <label htmlFor="message" className="form-label">
                    Message*
                </label>
                <textarea name="Message" id="message" required className="resize-none"></textarea>
            </div>

            {/* Submit */}
            <div className="mt-[0.7rem] lg:mt-[1rem]">
                <button
                    type="submit"
                    disabled={loading}
                    className="
                        bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                        border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                        py-[0.5rem] px-[1.4rem] w-[50%] lg:w-[35%]
                    "
                >
                    {loading ? "SUBMITTING..." : "SUBMIT"}
                </button>
            </div>
        </form>
    )
}

export default ContactForm