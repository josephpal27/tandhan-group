import PresenceOverview from "@/components/global-presence/PresenceOverview";
import HeroBanner from "@/components/HeroBanner";

export const metadata = {
  title: "Global Presence - Tandhan Group",
  description: "",
};

export default function GlobalPresence() {
  return (
    <>
      <HeroBanner
        image="/images/banners/presence-banner.png"
        title="Global Presence"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
      />
      <PresenceOverview />
    </>
  );
}
