import HeroBanner from "@/components/HeroBanner";
import MediaListTabbing from "@/components/media/MediaListTabbing";
// import RelatedBlogs from "@/components/media/RelatedBlogs";

export const metadata = {
    title: "Media - Tandhan Group",
    description: "",
};

export default function Media() {
    return (
        <>
            <HeroBanner
                image="/images/banners/media-banner.avif"
                title="Media"
                desc="Stay connected with the latest news, milestones, achievements, and stories that reflect Tandhan Group's journey of growth, innovation, and industry leadership."
            />
            <MediaListTabbing />
            {/* <RelatedBlogs /> */}
        </>
    );
}
