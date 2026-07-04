import InTheNews from "@/components/sectors/InTheNews";
import SectorsGallery from "@/components/sectors/SectorsGallery";
import SectorsProducts from "@/components/sectors/SectorsProducts";
import SectorsBanner from "@/components/sectors/SectorsBanner";
import SectorsCTA from "@/components/sectors/SectorsCTA";
import SectorsFAQ from "@/components/sectors/SectorsFAQ";
import EnergySectorOverview from "@/components/energy-solutions/EnergySectorOverview";
import { sectorsFaq } from "@/data/sectorsFaq";

<SectorsFAQ
  title={sectorsFaq.energy.title}
  description={sectorsFaq.energy.description}
  image={sectorsFaq.energy.image}
  faqs={sectorsFaq.energy.faqs}
/>

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
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
        business="Tandhan Power"
      />
      <EnergySectorOverview />
      <SectorsProducts />
      <SectorsGallery />
      <SectorsFAQ 
        description={sectorsFaq.energy.description}
        faqs={sectorsFaq.energy.faqs}
        image={sectorsFaq.energy.image}
      />
      <InTheNews />
      <SectorsCTA />
    </>
  );
}
