import InTheNews from "@/components/sectors/InTheNews";
import PolyplastBrandOverview from "@/components/protective-solutions/PolyplastBrandOverview";
import PolyplastSectorOverview from "@/components/protective-solutions/PolyplastSectorOverview";
import SectorsGallery from "@/components/sectors/SectorsGallery";
import SectorsProducts from "@/components/sectors/SectorsProducts";
import SectorsBanner from "@/components/sectors/SectorsBanner";
import SectorsCTA from "@/components/sectors/SectorsCTA";
import SectorsFAQ from "@/components/sectors/SectorsFAQ";
import { sectorsFaq } from "@/data/sectorsFaq";

export const metadata = {
  title: "Protective Solutions - Tandhan Group",
  description: "",
};

export default function ProtectiveSolutions() {
  return (
    <>
      <SectorsBanner
        image="/images/banners/protective-solutions-banner.avif"
        title="Protective Solutions"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
        business="Polyplast"
      />
      <PolyplastSectorOverview />
      <PolyplastBrandOverview />
      <SectorsProducts />
      <SectorsGallery />
      <SectorsFAQ 
        description={sectorsFaq.protective.description}
        faqs={sectorsFaq.protective.faqs}
        image={sectorsFaq.protective.image}
      />
      <InTheNews />
      <SectorsCTA />
    </>
  );
}
