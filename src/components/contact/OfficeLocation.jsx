
const OfficeLocation = () => {
    return (
        <section className="
            pt-[2.5rem] sm:pt-[3.5rem] lg:pt-[4.5rem] xl:pt-[5rem] 2xl:pt-[5.5rem]
            px-0
        ">

            {/* Head */}
            <div className="px-[1rem] sm:px-[5%] lg:px-[7%]">
                <h4>
                    Head Office Address
                </h4>
                <p className="mt-[0.7rem] lg:mt-[1rem] w-full lg:w-[60%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem blanditiis adipisicing quam ad quas, consectetur enim doloremque adipisicing fugiat itaque cumque veritatis.
                </p>
            </div>

            {/* Map */}
            <div className="
                mt-[2rem] sm:mt-[2.5rem] lg:mt-[2.4rem] xl:mt-[2.7rem] 2xl:mt-[3rem]
                h-[40vh] lg:h-[55vh]
            ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7367.929910678097!2d88.437142!3d22.580414!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a6ec25bcf9%3A0xb5d0d60668ec6adf!2sMartin%20Burn%20Business%20Park!5e0!3m2!1sen!2sin!4v1784369188703!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>

        </section>
    )
}

export default OfficeLocation
