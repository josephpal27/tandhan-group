import ContactCTA from "@/components/contact/ContactCTA";
import GetInTouch from "@/components/contact/GetInTouch";
import OfficeLocation from "@/components/contact/OfficeLocation";
import ContactHandles from "@/components/contact/ContactHandles";
import HeroBanner from "@/components/HeroBanner";

export const metadata = {
    title: "Contact Us - Tandhan Group",
    description: "",
};

export default function Contact() {
    return (
        <>
            <HeroBanner
                image="/images/banners/contact-banner.avif"
                title="Contact Us"
                desc="Connect with our team to explore opportunities, partnerships, solutions, and conversations that drive meaningful growth together."
            />
            <GetInTouch />
            <ContactCTA />
            <OfficeLocation />
            <ContactHandles />
        </>
    );
}
