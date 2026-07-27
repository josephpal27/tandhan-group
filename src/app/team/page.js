import HeroBanner from "@/components/HeroBanner";

export const metadata = {
  title: "Our Team - Tandhan Group",
  description: "",
};

export default function Team() {
  return (
    <>
      <HeroBanner
        image="/images/banners/presence-banner.png"
        title="Our Team"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus reiciendis veniam deserunt."
      />
    </>
  );
}
