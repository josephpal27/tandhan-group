
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const handleIcons = [
    {   id: 1, icon: <FaFacebookF /> },
    {   id: 2, icon: <FaXTwitter /> },
    {   id: 3, icon: <FaInstagram /> },
    {   id: 4, icon: <FaLinkedinIn /> },
    {   id: 5, icon: <FaYoutube /> },
]

const ContactHandles = () => {
    return (
        <section className="
            pt-[2.5rem] sm:pt-[3.5rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]
            pb-[4rem] sm:pb-[5rem] lg:pb-[4.5rem] xl:pb-[5rem] 2xl:pb-[5.5rem]
            flex flex-col items-center text-center
        ">

            <img 
                src="/images/logo/logo.png" 
                alt="Tandhan Group" 
                loading="lazy" 
                className="w-[60%] lg:w-[250px]" 
            />

            <p className="mt-[0.7rem] lg:mt-[1rem] w-full lg:w-[60%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique consectetur amet voluptates amet saepe quo at optio beatae quod eaque quam totam aspernatur.
            </p>

            <div className="mt-[1.7rem] lg:mt-[2rem] flex justify-center gap-[1rem]">
                {handleIcons.map((item, index) => {
                    return(
                        <div key={index} className="
                            w-[35px] lg:w-[40px]
                            h-[35px] lg:h-[40px] 
                            text-[1.2rem]
                            rounded-full bg-[#2d2d2d] hover:bg-primary text-white flex justify-center items-center transition duration-300 hover:scale-110
                        ">
                            <a href="#" target="_blank">
                                {item.icon}
                            </a>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ContactHandles
