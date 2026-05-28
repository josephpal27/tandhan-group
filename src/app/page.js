import HeroBanner from "@/components/HeroBanner";
import HomeFeatures from "@/components/home/HomeFeatures";
import OurServices from "@/components/home/OurServices";
import Sectors from "@/components/home/Sectors";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HomeFeatures />
      <WhoWeAre />
      <OurServices />
      <Sectors />
    </>
  );
}
