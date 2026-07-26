import BannerSlider from "@/components/global-presence/BannerSlider";
import CountryBrands from "@/components/global-presence/CountryBrands";
import PresenceCTA from "@/components/global-presence/PresenceCTA";
import PresenceOverview from "@/components/global-presence/PresenceOverview";
import HeroBanner from "@/components/HeroBanner";
import OurPresence from "@/components/home/OurPresence";

export const metadata = {
  title: "Global Presence - Tandhan Group",
  description: "",
};

export default function GlobalPresence() {
  return (
    <>

      <div className="relative">
        <HeroBanner
          image="/images/banners/presence-banner.png"
          title="Global Presence"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt."
        />
        <BannerSlider className="absolute top-[23%] left-0 z-10" />
      </div>

      <PresenceOverview />
      <CountryBrands />
      <OurPresence />
      <PresenceCTA />
    </>
  );
}
