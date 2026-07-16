import HeroBanner from "@/components/HeroBanner";
import OurApproach from "@/components/sustainability/OurApproach";

export const metadata = {
    title: "Sustainability & Impact - Tandhan Group",
    description: "",
};

export default function Sustainability() {
    return (
        <>
            <HeroBanner
                image="/images/banners/sustainability-banner.avif"
                title="Sustainability"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
            />
            <OurApproach />
        </>
    );
}
