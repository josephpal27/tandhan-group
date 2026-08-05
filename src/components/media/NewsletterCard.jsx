
const NewsletterCard = ({newsletter}) => {
    return (
        <a 
            href="/"
            target="_blank"
            className="w-full lg:w-[23.5%] bg-gray-100 p-[0.8rem] mb-[1.8rem] shadow-[0px_3px_7px_rgba(0,0,0,0.2)]  group"
        >
            <img 
                src={newsletter.image} 
                alt={newsletter.title} 
                loading="lazy"
                className="w-full"
            />
        </a>
    )
}

export default NewsletterCard
