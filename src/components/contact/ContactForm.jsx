
const ContactForm = () => {
    return (
        <>
            <form
                action=""
                className="
                    p-[3rem]
                    shadow-[3px_3px_10px_rgba(0,0,0,0.3)]
                    flex flex-col gap-[1.5rem]
                "
            >
                {/* Name */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-[1.2rem]">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="
                            border-b-[2px] border-black/40 focus:border-black
                            outline-none py-[0.5rem] bg-transparent
                        "
                    />
                </div>

                {/* Email + Phone */}
                <div className="flex gap-[2rem]">
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="email" className="text-[1.2rem]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="
                                border-b-[2px] border-black/40 focus:border-black
                                outline-none py-[0.5rem] bg-transparent
                            "
                        />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label htmlFor="phone" className="text-[1.2rem]">
                            Phone
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            className="
                                border-b-[2px] border-black/40 focus:border-black
                                outline-none py-[0.5rem] bg-transparent
                            "
                        />
                    </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                    <label htmlFor="subject" className="text-[1.2rem]">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="
                            border-b-[2px] border-black/40 focus:border-black
                            outline-none py-[0.5rem] bg-transparent
                        "
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-[1.2rem]">
                        Messege
                    </label>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        className="
                            border-b-[2px] border-black/40 focus:border-black
                            outline-none py-[0.5rem] bg-transparent
                        "
                    />
                </div>

                {/* Submit */}
                <div className="mt-[1rem]">
                    <button
                        type="submit"
                        className="
                            border-black border-[2.5px] px-[2rem] py-[0.7rem]
                            text-[1.1rem] hover:bg-black text-primary hover:text-white
                            transition-colors duration-300 font-medium
                        "
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactForm
