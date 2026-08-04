import CareersListing from "@/components/careers/CareersListing";
import HeroBanner from "@/components/HeroBanner";

export const metadata = {
  title: "Careers - Tandhan Group",
  description: "",
};

export default function Careers() {
  return (
    <>
      <HeroBanner
        image="/images/banners/careers-banner.avif"
        title="Careers"
        desc="At Tandhan, we believe great businesses are built by great people. Discover opportunities to learn, lead, and make an impact."
      />
      <CareersListing />
    </>
  );
}
