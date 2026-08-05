
const NewsletterCard = ({newsletter}) => {
    return (
        <a 
            href={newsletter.link}
            target="_blank"
            className="w-full lg:w-[23.5%] bg-gray-100 p-[0.8rem] mb-[2.2rem] shadow-[0px_3px_7px_rgba(0,0,0,0.2)] hover:bg-gray-50 transition duration-300 group"
        >
            <img 
                src={newsletter.image} 
                alt={newsletter.title} 
                loading="lazy"
                className="w-full aspect-[5/7]"
            />
            <span className="
                block text-center font-semibold group-hover:underline
                mt-[1rem]
                text-[1rem]
            ">
                Tandhan Newsletter - {newsletter.title}
            </span>
        </a>
    )
}

export default NewsletterCard
