
const ContactCTA = () => {
    return (
        <section className="
            mt-[2rem] sm:mt-[3rem] lg:mt-[4.5rem] xl:mt-[5rem] 2xl:mt-[5.5rem]
            py-[2rem] sm:py-[3rem] lg:py-[4.5rem] xl:py-[5rem] 2xl:py-[5.5rem]
            text-white flex flex-col items-center text-center
            relative overflow-hidden
        ">
            <h3>
                Connect with <br/> Tandhan Globally
            </h3>
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
