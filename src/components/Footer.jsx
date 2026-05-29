const footerData = [
    {
        id: 1,
        title: "Quick Links",
        links: [
            { title: "Home", link: "/", },
            { title: "About Us", link: "/about", },
            { title: "Our Businesses", link: "/businesses", },
            { title: "Sustainability & Impact", link: "/sustainability-impact", },
            { title: "Media", link: "/media", },
            { title: "Careers", link: "/careers", },
            { title: "Contact Us", link: "/contact", },
        ]
    },
]

const Footer = () => {
    return (
        <footer className="
            pr-[1rem] sm:pr-[5%] lg:pr-[7%]
            pl-[1rem] sm:pl-[5%] lg:pl-0
            bg-primary
        ">
            <div className="flex justify-between flex-wrap">
                {/* Left */}
                <div className="w-[35%] relative">
                    <img src="/images/demo-2.jpeg" alt="Footer" loading="lazy" className="w-full" />
                    <div className="
                        absolute top-0 right-0 w-[78%] h-full bg-secondary/90 text-black
                        p-[2rem]
                    ">
                        <img 
                            src="/images/logo/logo.png" 
                            alt="Tandhan Group" 
                            loading="lazy" 
                            className="w-[190px]" 
                        />
                        <p className="font-[500] mt-[1.5rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur, delectus consequatur eos! Id, sed corrupti.
                        </p>
                        <p className="font-[500] mt-[1rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae suscipit error enim assumenda pariatur.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="w-[60%] py-[3rem]">
                    <div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div>

            </div>
        </footer>
    )
}

export default Footer