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
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus reiciendis veniam deserunt."
      />
      <CareersListing />
    </>
  );
}
