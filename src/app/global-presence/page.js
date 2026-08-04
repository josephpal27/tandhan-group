import BannerSlider from "@/components/global-presence/BannerSlider";
import Flags from "@/components/global-presence/Flags";
import PresenceCTA from "@/components/global-presence/PresenceCTA";
import PresenceOverview from "@/components/global-presence/PresenceOverview";
import HeroBanner from "@/components/HeroBanner";
import OurPresence from "@/components/home/OurPresence";
import { GlobalPresenceProvider } from "@/contexts/GlobalPresenceContext";

export const metadata = {
  title: "Global Presence - Tandhan Group",
  description: "",
};

export default function GlobalPresence() {
  return (
    <>
      <div className="relative">
        <HeroBanner
          image="/images/banners/presence-banner.avif"
          title="Global Presence"
          desc="Expanding beyond borders, Tandhan Group serves diverse markets through manufacturing excellence, strategic partnerships, and a growing global presence."
        />
        <BannerSlider className="absolute top-[22%] left-0 z-10" />
      </div>

      <PresenceOverview />
      <GlobalPresenceProvider>
        <Flags />
        <OurPresence />
      </GlobalPresenceProvider>
      <PresenceCTA />
    </>
  );
}