import InTheNews from "@/components/sectors/InTheNews";
import SectorsGallery from "@/components/sectors/SectorsGallery";
import SectorsBanner from "@/components/sectors/SectorsBanner";
import SectorsCTA from "@/components/sectors/SectorsCTA";
import SectorsFAQ from "@/components/sectors/SectorsFAQ";
import TextilesSectorOverview from "@/components/textiles/TextilesSectorOverview";
import TextilesBrandOverview from "@/components/textiles/TextilesBrandOverview";
import TextilesProducts from "@/components/textiles/TextilesProducts";

import { sectorsFaqData } from "@/data/sectorsFaqData";
import { inTheNewsData } from "@/data/inTheNewsData";
import { sectorsCtaData } from "@/data/sectorsCtaData";
import { sectorsGalleryData } from "@/data/sectorsGalleryData";

export const metadata = {
  title: "Textiles - Tandhan Group",
  description: "",
};

export default function EnergySolutions() {
  return (
    <>
      <SectorsBanner
        image="/images/banners/textiles-banner.avif"
        title="Textiles"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
        business="Tandhan Denim"
      />
      <TextilesSectorOverview />
      <TextilesBrandOverview />
      <TextilesProducts />
      <SectorsGallery
        gallery={sectorsGalleryData.textiles}
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
