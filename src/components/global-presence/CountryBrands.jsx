
const CountryBrands = () => {
    return (
        <section className="
            pt-[2rem] sm:pt-[3rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem] px-0
        ">

            {/* Top */}
            <div className="flex px-[1rem] sm:px-[5%] lg:px-[7%]">
                {/* Top Left */}
                <div className="w-[65%]">
                    <h3>
                        Lorem Ipsum
                    </h3>
                    <p className="mt-[0.7rem] lg:mt-[1.2rem] w-full lg:w-[65%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex quis perferendis recusandae suscipit quo, quidem libero aut.
                    </p>

                    {/* Flag */}
                    <div className="mt-[3rem]">
                        <span className="text-[3rem] font-semibold">
                            India
                        </span>
                        <img 
                            src="/images/presence/flags/india.png" 
                            alt="India" 
                            loading="lazy"
                            className="w-[40%] mt-[1rem]"
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-end">
                        <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-r-[2px]
                        " id="products-prev">
                            ‹
                        </button>
                        <button className="
                            w-[40px] sm:w-[45px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                            h-[40px] sm:h-[45px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                            flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white transition 
                            text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                            border-primary border-[2px] lg:border-[3px] border-l-[2px]
                        " id="products-next">
                            ›
                        </button>
                    </div>
                </div>

                {/* Top Right */}
                <div className="w-[35%] border-primary border-l-[5px]">

                </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-wrap">
                {/* Bottom Left */}
                <div className="w-[62.9%] p-[2rem] pl-[7%] bg-primary text-gray-300 flex flex-wrap gap-[1rem]">
                    <span className="text-white font-semibold">India</span> | 
                    <span>Bangladesh</span> | 
                    <span>Myanmar</span>
                </div>

                {/* Bottom Right */}
                <div className="w-[37.1%] p-[2rem] pr-[7%] bg-[#a3a3a3]">
                    <p className="text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing nam, quidem. Lorem ipsum dolor sit amet, adipisicing elit. Praesentium consectetur excepturi.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default CountryBrands
