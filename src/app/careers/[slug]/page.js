import { notFound } from "next/navigation";
import { careersData } from "@/data/careersData";
import CareerDetailsBanner from "@/components/careers/CareerDetailsBanner";
import CareerDetailsContent from "@/components/careers/CareerDetailsContent";

export async function generateStaticParams() {
    return careersData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = careersData.find((p) => p.slug === slug);
    if (!post) return { title: "Career Not Found - Tandhan Group" };
    return { title: `${post.title} - Tandhan Group`, description: post.description };
}

export default async function CareerDetails({ params }) {
    const { slug } = await params;
    const post = careersData.find((p) => p.slug === slug);
    if (!post) return notFound();

    return (
        <>
            <CareerDetailsBanner />
            <CareerDetailsContent post={post} />
        </>
    );
}