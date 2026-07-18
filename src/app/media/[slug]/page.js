import { notFound } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";
import BlogDetailsContent from "@/components/media/BlogDetailsContent";
import { blogsData } from "@/data/blogsData";

// Required for output: 'export' — tells Next which slugs to pre-render
export async function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return { title: "Blog Not Found - Tandhan Group" };
    }

    return {
        title: `${blog.title} - Tandhan Group`,
        description: blog.desc,
    };
}

export default async function BlogDetails({ params }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) return notFound();

    return (
        <>
            <HeroBanner
                image="/images/banners/media-banner.avif"
                title={blog.title}
                desc={blog.desc}
            />
            <BlogDetailsContent blog={blog} />
        </>
    );
}