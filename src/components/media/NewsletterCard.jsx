
const NewsletterCard = ({newsletter}) => {
    return (
        <a 
            href={newsletter.link}
            target="_blank"
            className="w-[47.5%] lg:w-[23.5%] bg-gray-100 p-[0.6rem] lg:p-[0.8rem] mb-[1.3rem] sm:mb-[1.5rem] lg:mb-[1.8rem] xl:mb-[2rem] 2xl:mb-[2.2rem] shadow-[0px_3px_7px_rgba(0,0,0,0.2)] hover:bg-gray-50 transition duration-300 group"
        >
            <img 
                src={newsletter.image} 
                alt={newsletter.title} 
                loading="lazy"
                className="w-full aspect-[5/7]"
            />
            <span className="
                block text-center font-semibold group-hover:underline
                mt-[0.6rem] sm:mt-[0.7rem] lg:mt-[0.8rem] xl:mt-[0.9rem] 2xl:mt-[1rem]
            ">
                <span className="hidden lg:block">Tandhan Newsletter</span> {newsletter.title}
            </span>
        </a>
    )
}

export default NewsletterCard
