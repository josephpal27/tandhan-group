
const Values = () => {
    return (
        <section className="
            pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            px-0 flex justify-between flex-wrap
        ">

            {/* Left */}
            <div className="w-[50%] bg-[url('/images/services/3.avif')] bg-center bg-cover bg-no-repeat pl-[12%] relative">
                {/* Layer */}
                <div className="w-full h-full absolute top-0 left-0 bg-primary/50"></div>
                {/* Content Box */}
                <div className="bg-white h-full px-[3.5rem] py-[3rem] relative z-10">
                    <h3>
                        Lorem Ipsum
                    </h3>
                    <p className="mt-[0.7rem] lg:mt-[1.8rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, et neque. Deserunt quod modi ipsam optio natus itaque quisquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus veniam, soluta aut ut similique, culpa nisi aliquam, perferendis explicabo dolore possimus incidunt corporis! Earum voluptatibus sequi consequatur.
                    </p>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, et neque. Deserunt quod modi ipsam optio natus itaque quisquam in. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>

            {/* Right */}
            <div className="w-[50%] pr-[4%] bg-primary/50">
                <img src="/images/footer-bg.avif" alt="Values Image" loading="lazy" className="w-full" />
            </div>

        </section>
    )
}

export default Values
