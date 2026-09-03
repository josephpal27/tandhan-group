
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const handleIcons = [
    {   id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com/tandhan.official" },
    {   id: 2, icon: <FaXTwitter />, url: "https://x.com/Tandhanofficial" },
    {   id: 3, icon: <FaInstagram />, url: "https://www.instagram.com/tandhangroup/" },
    {   id: 4, icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/tandhan-group" },
    {   id: 5, icon: <FaYoutube />, url: "https://www.youtube.com/@TandhanGroup" },
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

            <p className="mt-[0.7rem] lg:mt-[1rem] w-full lg:w-[55%]">
                For a closer look into the heart of Tandhan, and to journey with us through every innovation, project, and milestone, connect with us on our social platforms.
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
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
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
