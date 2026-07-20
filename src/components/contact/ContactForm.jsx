const ContactForm = () => {
    return (
        <form
            action=""
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
                    name="name"
                    id="name"
                    required
                />
            </div>

            {/* Email + Phone */}
            <div className="flex gap-[1.3rem] sm:gap-[1.4rem] lg:gap-[1.6rem] xl:gap-[1.8rem] 2xl:gap-[2rem]">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="email" className="form-label">
                        Email*
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="phone" className="form-label">
                        Phone*
                    </label>
                    <input
                        type="number"
                        name="phone"
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
                    name="subject"
                    id="subject"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col">
                <label htmlFor="message" className="form-label">
                    Message*
                </label>
                <textarea name="message" id="message" required className="resize-none"></textarea>
            </div>

            {/* Submit */}
            <div className="mt-[1rem]">
                <button
                    type="submit"
                    className="
                        bg-white hover:bg-primary text-primary hover:text-white font-semibold transition
                        border-primary border-[2px] sm:border-[2.5px] lg:border-[2px] xl:border-[2.5px] 2xl:border-[3px]
                        py-[0.5rem] px-[1.4rem] w-[35%]
                    "
                >
                    SUBMIT
                </button>
            </div>
        </form>
    )
}

export default ContactForm