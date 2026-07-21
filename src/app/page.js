import HeroBanner from "@/components/HeroBanner";
// import Expertise from "@/components/home/Expertise";
import GlobalPresence from "@/components/home/GlobalPresence";
// import Highlights from "@/components/home/Highlights";
import HomeFeatures from "@/components/home/HomeFeatures";
import LatestNews from "@/components/home/LatestNews";
import OurServices from "@/components/home/OurServices";
import Sectors from "@/components/home/Sectors";
import Sustainable from "@/components/home/Sustainable";
import Values from "@/components/home/Values";
import ValuesRow from "@/components/home/ValuesRow";
import WhoWeAre from "@/components/home/WhoWeAre";

export const metadata = {
  title: "Tandhan Group",
  description: "",
};

export default function Home() {
  return (
    <>
      <HeroBanner
        image="/images/banners/home-banner.avif"
        mobileImage="/images/banners/home-mob-banner.avif"
        title={<>Lorem Ipsum <br /> Dolor Sit Amet</>}
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
      />
      <HomeFeatures />
      <WhoWeAre />
      <Values />
      <ValuesRow />
      {/* <Highlights /> */}
      {/* <Expertise /> */}
      <Sectors />
      <OurServices />
      <Sustainable />
      <LatestNews />
      <GlobalPresence />
    </>
  );
}
