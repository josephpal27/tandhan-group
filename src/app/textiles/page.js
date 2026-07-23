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

export default function Textiles() {
  return (
    <>
      <SectorsBanner
        image="/images/banners/textiles-banner.avif"
        title="Textiles"
        desc="Driven by innovation and precision, we craft premium denim and textile solutions that combine quality, sustainability, and manufacturing excellence for global brands."
        business="Tandhan Denim"
      />
      <TextilesSectorOverview />
      <TextilesBrandOverview />
      <TextilesProducts />
      <SectorsGallery
        gallery={sectorsGalleryData.textiles}
      />
      <SectorsFAQ
        description={sectorsFaqData.textiles.description}
        faqs={sectorsFaqData.textiles.faqs}
        image={sectorsFaqData.textiles.image}
      />
      <InTheNews
        news={inTheNewsData.textiles.news}
      />
      <SectorsCTA
        cta={sectorsCtaData.textiles.cta}
      />
    </>
  );
}
