import HeroBanner from "@/components/HeroBanner";
import CSR from "@/components/sustainability/CSR";
import FocusAreas from "@/components/sustainability/FocusAreas";
import Impact from "@/components/sustainability/Impact";
import Initiatives from "@/components/sustainability/Initiatives";
import KeyHighlights from "@/components/sustainability/KeyHighlights";
import OurApproach from "@/components/sustainability/OurApproach";
import SustainabilityValues from "@/components/sustainability/SustainabilityValues";

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
                desc="At Tandhan, sustainability is not an initiative, it is a way of building responsibly. Across our businesses, we continuously invest in technologies, processes, and practices that minimise environmental impact while creating long-term value. From responsible manufacturing and resource conservation to renewable energy adoption and sustainable product innovation, we are committed to building businesses that contribute to a more resilient future."
            />
            <OurApproach />
            <SustainabilityValues />
            <Impact />
            <KeyHighlights />
            <CSR />
            <FocusAreas />
            <Initiatives />
        </>
    );
}
