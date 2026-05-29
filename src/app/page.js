import HeroBanner from "@/components/HeroBanner";
import GlobalPresence from "@/components/home/GlobalPresence";
import HomeFeatures from "@/components/home/HomeFeatures";
import LatestNews from "@/components/home/LatestNews";
import OurServices from "@/components/home/OurServices";
import Sectors from "@/components/home/Sectors";
import Sustainable from "@/components/home/Sustainable";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeFeatures />
      <WhoWeAre />
      <OurServices />
      <Sectors />
      <Sustainable />
      <LatestNews />
      <GlobalPresence />
    </>
  );
}
