"use client";

const InTheNews = () => {
    return (
        <section className="pt-[2rem] sm:pt-[2.2rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem] flex justify-between flex-wrap">

            {/* Left */}
            <div className="w-[60%]">
                <div>
                    01
                </div>
                <h6>
                    In The <br /> News
                </h6>

                {/* Slider */}
                <div>

                </div>
            </div>

            {/* Right */}
            <div className="w-[35%]">
                <span>
                    Lorem Ipsum
                </span>
                <p className="mt-[0.7rem] lg:mt-[1.2rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, temporibus exercitationem voluptate odio dolorem sit enim provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, quas.
                </p>

                {/* Next Btn */}
                <button className="
                    w-[35px] sm:w-[40px] lg:w-[40px] xl:w-[45px] 2xl:w-[50px]
                    h-[35px] sm:h-[40px] lg:h-[50px] xl:h-[55px] 2xl:h-[60px]
                    flex items-center justify-center bg-secondary hover:bg-primary hover:text-white transition 
                    text-[1.8rem] sm:text-[1.8rem] lg:text-[1.8rem] xl:text-[2rem] 2xl:text-[2.2rem]
                " id="news-next">
                    ›
                </button>
            </div>

        </section>
    )
}

export default InTheNews
