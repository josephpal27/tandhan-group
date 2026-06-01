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
        title={<>Lorem Ipsum <br /> Dolor Sit Amet</>}
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
      />
    </>
  );
}
