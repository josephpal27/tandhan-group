
const OurApproach = () => {
    return (
        <section className="
            pt-[1.7rem] sm:pt-[2.2rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            flex justify-between flex-wrap relative overflow-hidden
        ">

            {/* Image */}
            <div className="w-[45%]">
                <img src="/images/sustainability/approach.avif" alt="Our Approach" loading="lazy" className="w-full" />
            </div>

            {/* Content */}
            <div className="w-[50%]">
                <h2>
                    Our <br /> Approach
                </h2>
                <p className="mt-[2rem] lg:mt-[2.5rem]">
                    We believe sustainable growth begins with responsible decisions. Every investment we make is guided by a commitment to reduce environmental impact, improve operational efficiency, and create lasting value for future generations.
                </p>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Across our manufacturing businesses, we continue to strengthen water conservation, energy efficiency, waste management, and responsible sourcing practices. By integrating sustainability into our operations and embracing innovative technologies, we are building products and processes that support industries while protecting the resources they depend on. For us, sustainability is not a destination, it is a continuous journey of improvement, accountability, and responsible growth.
                </p>
            </div>

            {/* Artboard */}
            <img
                src="/images/artboard.avif"
                alt="Artboard"
                loading="lazy"
                className="
                    w-[20%] lg:w-[25%] invert absolute opacity-50
                    right-[-4rem] sm:right-[-5rem] lg:right-[-4rem] xl:right-[-4.5rem] 2xl:right-[-5rem]
                    top-[-3rem] sm:top-[-4rem] lg:top-[-6.5rem] xl:top-[-7rem] 2xl:top-[-7.5rem]
                "
            />

        </section>
    )
}

export default OurApproach
