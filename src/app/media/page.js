import HeroBanner from "@/components/HeroBanner";
import RelatedBlogs from "@/components/media/RelatedBlogs";

export const metadata = {
    title: "Media - Tandhan Group",
    description: "",
};

export default function Sustainability() {
    return (
        <>
            <HeroBanner
                image="/images/banners/media-banner.avif"
                title="Media"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam nihil voluptatibus laboriosam reiciendis veniam deserunt, quas voluptatem molestias deleniti vitae exercitationem."
            />
            <RelatedBlogs />
        </>
    );
}
