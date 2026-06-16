import InTheNews from "@/components/InTheNews";
import BrandOverview from "@/components/protective-solutions/BrandOverview";
import PolyplastGallery from "@/components/protective-solutions/PolyplastGallery";
import PolyplastProducts from "@/components/protective-solutions/PolyplastProducts";
import SectorsBanner from "@/components/SectorsBanner";
import SectorsCTA from "@/components/SectorsCTA";
import SectorsFAQ from "@/components/SectorsFAQ";

export const metadata = {
  title: "Protective Solutions - Tandhan Group",
  description: "",
};

export default function ProtectiveSolutions() {
  return (
    <>
      <SectorsBanner
        image="/images/banners/protective-solutions-banner.avif"
        title={<>Lorem Ipsum <br /> Dolor Sit Amet</>}
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
      />
      <BrandOverview />
      <PolyplastProducts />
      <PolyplastGallery />
      <SectorsFAQ />
      <InTheNews />
      <SectorsCTA />
    </>
  );
}
