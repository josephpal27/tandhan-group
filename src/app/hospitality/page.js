import InTheNews from "@/components/sectors/InTheNews";
import SectorsGallery from "@/components/sectors/SectorsGallery";
import SectorsProducts from "@/components/sectors/SectorsProducts";
import SectorsBanner from "@/components/sectors/SectorsBanner";
import SectorsCTA from "@/components/sectors/SectorsCTA";
import SectorsFAQ from "@/components/sectors/SectorsFAQ";
import HospitalitySectorOverview from "@/components/hospitality/HospitalitySectorOverview";
import HospitalityBrandOverview from "@/components/hospitality/HospitalityBrandOverview";

import { sectorsFaqData } from "@/data/sectorsFaqData";
import { inTheNewsData } from "@/data/inTheNewsData";
import { sectorsProductsData } from "@/data/sectorsProductsData";
import { sectorsCtaData } from "@/data/sectorsCtaData";
import { sectorsGalleryData } from "@/data/sectorsGalleryData";

export const metadata = {
  title: "Hospitality - Tandhan Group",
  description: "",
};

export default function EnergySolutions() {
  return (
    <>
      <SectorsBanner
        image="/images/banners/hospitality-banner.avif"
        title="Hospitality"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
        business="NX Hotel"
      />
      <HospitalitySectorOverview />
      <HospitalityBrandOverview />
      <SectorsProducts 
        products={sectorsProductsData.hospitality}
      />
      <SectorsGallery 
        gallery={sectorsGalleryData.hospitality}
      />
      <SectorsFAQ
        description={sectorsFaqData.hospitality.description}
        faqs={sectorsFaqData.hospitality.faqs}
        image={sectorsFaqData.hospitality.image}
      />
      <InTheNews
        news={inTheNewsData.hospitality.news}
      />
      <SectorsCTA 
        cta={sectorsCtaData.hospitality.cta}
      />
    </>
  );
}
