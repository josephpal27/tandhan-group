import InTheNews from "@/components/sectors/InTheNews";
import PolyplastBrandOverview from "@/components/protective-solutions/PolyplastBrandOverview";
import PolyplastSectorOverview from "@/components/protective-solutions/PolyplastSectorOverview";
import SectorsGallery from "@/components/sectors/SectorsGallery";
import SectorsProducts from "@/components/sectors/SectorsProducts";
import SectorsBanner from "@/components/sectors/SectorsBanner";
import SectorsCTA from "@/components/sectors/SectorsCTA";
import SectorsFAQ from "@/components/sectors/SectorsFAQ";

import { sectorsFaqData } from "@/data/sectorsFaqData";
import { inTheNewsData } from "@/data/inTheNewsData";
import { sectorsProductsData } from "@/data/sectorsProductsData";
import { sectorsCtaData } from "@/data/sectorsCtaData";
import { sectorsGalleryData } from "@/data/sectorsGalleryData";

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
        desc="From agriculture to infrastructure, our high-performance protective solutions are engineered for durability, reliability, and long-term performance across diverse environments and applications."
        business="Polyplast"
      />
      <PolyplastSectorOverview />
      <PolyplastBrandOverview />
      <SectorsProducts
        products={sectorsProductsData.protective}
      />
      <SectorsGallery
        gallery={sectorsGalleryData.protective}
      />
      <SectorsFAQ
        description={sectorsFaqData.protective.description}
        faqs={sectorsFaqData.protective.faqs}
        image={sectorsFaqData.protective.image}
      />
      <InTheNews
        news={inTheNewsData.protective.news}
      />
      <SectorsCTA
        cta={sectorsCtaData.protective.cta}
      />
    </>
  );
}
