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
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
            />
            <GetInTouch />
            <ContactCTA />
            <OfficeLocation />
            <ContactHandles />
        </>
    );
}
