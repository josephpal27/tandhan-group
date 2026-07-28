import Founder from "@/components/about/Founder";
import HeroBanner from "@/components/HeroBanner";
import TeamList from "@/components/team/TeamList";

export const metadata = {
  title: "Our Team - Tandhan Group",
  description: "",
};

export default function Team() {
  return (
    <>
      <HeroBanner
        image="/images/banners/presence-banner.avif"
        title="Our Team"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus reiciendis veniam deserunt."
      />
      <Founder />
      <TeamList />
    </>
  );
}
