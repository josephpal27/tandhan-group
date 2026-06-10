
const Founder = () => {
    return (
        <section className="
            pt-[3.5rem] sm:pt-[3.7rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            flex justify-between flex-wrap
        ">
            <div className="w-[20%]">
                <img
                    src="/images/qoute.png"
                    alt="Qoute Left"
                    loading="lazy"
                    className="
                        w-[230px]
                        mt-[1rem]
                    "
                />
            </div>
            <div className="w-[79%]">
                {/* Top */}
                <div>
                    <h4>
                        Founder's Message
                    </h4>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore et a, velit reprehenderit? Deserunt, necessitatibus possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis magnam eum quas delectus, nemo accusamus quam, ipsam id totam in adipisci inventore et a, velit reprehenderit? Deserunt, necessitatibus possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* Bottom */}
                <div className="
                    mt-[3.2rem]
                    flex justify-between
                ">
                    <div className="w-[35%]">
                        <img
                            src="/images/qoute.png"
                            alt="Qoute Left"
                            loading="lazy"
                            className="
                                w-[230px]
                                rotate-[180deg]
                            "
                        />
                    </div>
                    <div className="w-[55%] relative">
                        <img
                            src="/images/founder.png"
                            alt="Founder"
                            loading="lazy"
                            className="w-full border-b-[10px] border-primary"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-[1.5rem] text-white">
                            <span className="text-[1.8rem] font-semibold">
                                John Doe
                            </span>
                            <p>
                                - Founder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder
