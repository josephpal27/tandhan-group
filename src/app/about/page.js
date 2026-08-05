import Founder from "@/components/about/Founder";
import MissionVision from "@/components/about/MissionVision";
import OurJourney from "@/components/about/OurJourney";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";
import HeroBanner from "@/components/HeroBanner";

export const metadata = {
  title: "About Us - Tandhan Group",
  description: "",
};

export default function About() {
  return (
    <>
      <HeroBanner
        image="/images/banners/about-banner.avif"
        mobileImage="/images/banners/about-mob-banner.avif"
        title="About Us"
        desc="Three decades of manufacturing excellence, global ambition, and enduring partnerships shaping industries, communities, and sustainable growth."
      />
      <OurStory />
      <OurJourney />
      <MissionVision />
      <OurValues />
      <Founder />
      <OurTeam />
    </>
  );
}
