import InTheNews from "@/components/sectors/InTheNews";
import SectorsGallery from "@/components/sectors/SectorsGallery";
import SectorsProducts from "@/components/sectors/SectorsProducts";
import SectorsBanner from "@/components/sectors/SectorsBanner";
import SectorsCTA from "@/components/sectors/SectorsCTA";
import SectorsFAQ from "@/components/sectors/SectorsFAQ";
import EnergySectorOverview from "@/components/energy-solutions/EnergySectorOverview";
import EnergyBrandOverview from "@/components/energy-solutions/EnergyBrandOverview";

import { sectorsFaqData } from "@/data/sectorsFaqData";
import { inTheNewsData } from "@/data/inTheNewsData";
import { sectorsProductsData } from "@/data/sectorsProductsData";
import { sectorsCtaData } from "@/data/sectorsCtaData";
import { sectorsGalleryData } from "@/data/sectorsGalleryData";

export const metadata = {
  title: "Energy Solutions - Tandhan Group",
  description: "",
};

export default function EnergySolutions() {
  return (
    <>
      <SectorsBanner
        image="/images/banners/energy-solutions-banner.avif"
        title="Energy Solutions"
        desc="Reliable power solutions engineered to keep homes, businesses, and industries running with dependable performance, energy efficiency, and technology built for tomorrow."
        business="Tandhan Power"
      />
      <EnergySectorOverview />
      <EnergyBrandOverview />
      <SectorsProducts 
        products={sectorsProductsData.energy}
      />
      <SectorsGallery 
        gallery={sectorsGalleryData.energy}
      />
      <SectorsFAQ
        description={sectorsFaqData.energy.description}
        faqs={sectorsFaqData.energy.faqs}
        image={sectorsFaqData.energy.image}
      />
      <InTheNews
        news={inTheNewsData.energy.news}
      />
      <SectorsCTA 
        cta={sectorsCtaData.energy.cta}
      />
    </>
  );
}
